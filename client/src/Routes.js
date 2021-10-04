import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Modal from "./components/Modal";
import { ModalSwitch, ModalRoute } from "react-router-modal-gallery";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    defaultParentPath: "/",
    modal: true,
    path: "/contact",
    component: Contact,
  },
];

const modalRoutes = routes
  .filter((route) => route.modal)
  .map((route) => <ModalRoute key={route.path} {...route} />);

const Routes = () => (
  <ModalSwitch
    renderModal={({ open, redirectToBack }) => (
      <Modal open={open} scroll="body" onExited={redirectToBack}>
        {modalRoutes}
      </Modal>
    )}
  >
    {routes.map((route) =>
      route.modal ? (
        <ModalRoute key={route.path} {...route} />
      ) : (
        <Route key={route.path} {...route} />
      )
    )}
  </ModalSwitch>
);

export default Routes;
