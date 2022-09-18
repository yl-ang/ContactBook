import * as React from "react";
import { URL_VIEW_USER } from "../configs";
import { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Grid,
} from "@mui/material";

const DeleteContactForm = () => {
  const [openDeleteContactForm, setOpenDeleteContactForm] = useState(false);
  const [id, setId] = useState("");
  const handleClickOpenDeleteContactForm = () => {
    setOpenDeleteContactForm(true);
  };

  const handleDeleteContact = async () => {
    setOpenDeleteContactForm(false);
    const res = await axios
      .delete(URL_VIEW_USER + id, {
        id,
      })
      .catch((err) => {
        alert(err);
        alert("Please try again later");
      });

    if (res && res.status === 200) {
      console.log(res);
    }
  };

  return (
    <Grid>
      <Button variant="contained" onClick={handleClickOpenDeleteContactForm}>
        Delete Contact
      </Button>
      <Dialog
        open={openDeleteContactForm}
        onClose={() => setOpenDeleteContactForm(false)}
      >
        <DialogTitle>Delete contact via /DEL using id</DialogTitle>
        <DialogContent>
          <DialogContentText>Delete contact via id</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="Id"
            type="id"
            fullWidth
            variant="standard"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteContactForm(false)}>
            Cancel
          </Button>
          <Button onClick={handleDeleteContact}>Delete contact</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default DeleteContactForm;
