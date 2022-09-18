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

const ViewContactForm = () => {
  const [openViewContactForm, setOpenViewContactForm] = useState(false);
  const [id, setId] = useState("");
  const [obtainedContact, setObtainedContact] = useState("");
  const handleClickOpenViewContactForm = () => {
    setOpenViewContactForm(true);
  };

  const handleViewContact = async () => {
    setOpenViewContactForm(false);
    const res = await axios
      .get(URL_VIEW_USER + id, {
        id,
      })
      .catch((err) => {
        alert(err);
        alert("Please try again later");
      });

    if (res && res.status === 200) {
      setObtainedContact(res.data);
    }
  };

  return (
    <Grid>
      <Button variant="contained" onClick={handleClickOpenViewContactForm}>
        View Contact
      </Button>
      <Dialog
        open={openViewContactForm}
        onClose={() => setOpenViewContactForm(false)}
      >
        <DialogTitle>View contact via /GET using id</DialogTitle>
        <DialogContent>
          <DialogContentText>View contact via id</DialogContentText>
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
          <Button onClick={() => setOpenViewContactForm(false)}>Cancel</Button>
          <Button onClick={handleViewContact}>View</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default ViewContactForm;
