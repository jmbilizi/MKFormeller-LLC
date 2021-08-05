import logo from "./logo.svg";
import "./style.css";
import { ModalLink } from "react-router-modal-gallery";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <h>MKFormeller, LLC</h>. While the site still under
          construction, you can still contact us.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ModalLink to="/contact">Contact Us</ModalLink>
        </a>
      </header>
    </div>
  );
}

export default Home;
