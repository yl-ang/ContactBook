import * as React from "react";
import { URL_UPDATE_USER } from "../configs";
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

const UpdateContactForm = () => {
  const [openUpdateContactForm, setOpenUpdateContactForm] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const handleClickOpenUpdateContactForm = () => {
    setOpenUpdateContactForm(true);
  };
  const handleUpdateContact = async () => {
    setOpenUpdateContactForm(false);
    const res = await axios
      .put(URL_UPDATE_USER + id, {
        name,
        email,
        gender,
        phone,
      })
      .catch((err) => {
        alert(err);
        alert("Please try again later");
      });

    if (res && res.status === 200) {
      var updatedProfile =
        "Successfully updated contact\n" +
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
      alert(updatedProfile);
    }
  };
  return (
    <Grid m={1}>
      <Button variant="contained" onClick={handleClickOpenUpdateContactForm}>
        Update Contact
      </Button>
      <Dialog
        open={openUpdateContactForm}
        onClose={() => setOpenUpdateContactForm(false)}
      >
        <DialogTitle>Update existing contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please input the contact ID, and other fields to update a contact
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="gender"
            label="Gender"
            type="gender"
            fullWidth
            variant="standard"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone"
            type="int"
            fullWidth
            variant="standard"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenUpdateContactForm(false)}>
            Cancel
          </Button>
          <Button onClick={handleUpdateContact}>Add</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default UpdateContactForm;
