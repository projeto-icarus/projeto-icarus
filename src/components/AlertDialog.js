import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import PubSub from "pubsub-js";

const DIALOG_TOPIC = "DIALOG_TOPIC";

const initialDialog = {
  open: false,
  title: "Atenção!",
  description: "",
  yesText: "Sim",
  noText: "Não",
  fullscreen: false,
};

export const dialog = (data) => {
  PubSub.publish(DIALOG_TOPIC, data);
};

export default function AlertDialog() {
  const [dialog, setDialog] = useState(initialDialog);
  const handleOnYes = useRef(() => {});
  const handleOnNo = useRef(() => {});

  useEffect(() => {
    const token = PubSub.subscribe(DIALOG_TOPIC, (_, data) => {
      const { onYes, onNo, ...restData } = data;

      handleOnYes.current = onYes || (() => {});
      handleOnNo.current = onNo || (() => {});

      setDialog({
        ...initialDialog,
        ...restData,
        open: true,
      });
    });

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  const handleClose = () => {
    setDialog((oldDialog) => ({
      ...oldDialog,
      open: false,
    }));
  };

  return (
    <Dialog
      open={dialog.open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      fullScreen={dialog.fullscreen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{dialog.title}</DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          style={{ whiteSpace: "break-spaces" }}
        >
          {dialog.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={(e) => {
            handleOnNo.current(e);
            handleClose();
          }}
          color="primary"
        >
          {dialog.noText}
        </Button>
        <Button
          onClick={(e) => {
            handleOnYes.current(e);
            handleClose();
          }}
          color="primary"
          autoFocus
        >
          {dialog.yesText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
