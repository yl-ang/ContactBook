import * as React from "react";
import { URL_DELETE_USER } from "../configs";
import { useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
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
      .delete(URL_DELETE_USER + id, {
        id,
      })
      .catch((err) => {
        alert(err);
        alert("Please try again later");
      });

    if (res && res.status === 200) {
      alert("Successfully deleted contact");
    }
  };

  return (
    <Grid m={1}>
      <Button
        variant="contained"
        onClick={handleClickOpenDeleteContactForm}
        endIcon={<DeleteIcon />}
      >
        Delete Contact
      </Button>
      <Dialog
        open={openDeleteContactForm}
        onClose={() => setOpenDeleteContactForm(false)}
      >
        <DialogTitle>Delete contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please input the contact ID of the contact to be deleted
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="Contact ID"
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
