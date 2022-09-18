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
      var profile =
        "Successfully retrieved contact\n" +
        "Name: " +
        res.data.data.name +
        "\n" +
        "Email: " +
        res.data.data.email +
        "\n" +
        "Gender: " +
        res.data.data.gender +
        "\n" +
        "Phone: " +
        res.data.data.phone;
      alert(profile);
    }
  };

  return (
    <Grid m={1}>
      <Button variant="contained" onClick={handleClickOpenViewContactForm}>
        View Contact
      </Button>
      <Dialog
        open={openViewContactForm}
        onClose={() => setOpenViewContactForm(false)}
      >
        <DialogTitle>Get information about a contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please input the contact ID of the contact to be retrieved
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
          <Button onClick={() => setOpenViewContactForm(false)}>Cancel</Button>
          <Button onClick={handleViewContact}>View</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default ViewContactForm;
