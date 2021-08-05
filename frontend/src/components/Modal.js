import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

function Modal({ children, title, open, onExited, ...rest }) {
  const [showModal, setShowModal] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (open) {
      setShowModal(true);
    }
  }, [open]);

  const handleClose = () => {
    setShowModal(false);
  };

  function onExitAnimationEnd() {
    onExited();
  }

  return (
    <Dialog
      {...rest}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      open={showModal}
      onClose={handleClose}
      onExited={onExitAnimationEnd}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent
        style={{
          padding: "0px",
          margin: "0px",
          marginTop: "16px",
          marginBottom: "40px",
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}

Modal.propTypes = {
  ...Dialog.propTypes,
};

export default Modal;
