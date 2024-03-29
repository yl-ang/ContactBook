import * as React from "react";
import { URL_CREATE_USER } from "../configs";
import { useState } from "react";
import axios from "axios";
import { STATUS_CODE_BAD_REQUEST } from "../constants";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
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

const CreateContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [openCreateContactForm, setOpenCreateContactForm] = useState(false);

  const isEmailValid = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(test) === false) {
      return false;
    }

    console.log("Email passed validation");
    return true;
  };

  const handleClickOpenCreateContactForm = () => {
    setOpenCreateContactForm(true);
  };

  const handleCreateContact = async () => {
    setOpenCreateContactForm(false);
    const res = await axios
      .post(URL_CREATE_USER, {
        name,
        email,
        gender,
        phone,
      })
      .catch((err) => {
        if (err.response.status === STATUS_CODE_BAD_REQUEST) {
          alert("Missing name/email fields");
        } else {
          alert("Please try again later");
        }
      });

    if (res && res.status === 200) {
      alert("Successfully created contact:\n" + res.data.data.name);
    }
  };

  return (
    <Grid m={1}>
      <Button
        variant="contained"
        onClick={handleClickOpenCreateContactForm}
        endIcon={<PersonAddAltIcon />}
        style={{
          maxWidth: "200px",
          maxHeight: "35px",
          minWidth: "200px",
          minHeight: "35px",
        }}
      >
        Create Contact
      </Button>
      <Dialog
        open={openCreateContactForm}
        onClose={() => setOpenCreateContactForm(false)}
      >
        <DialogTitle>Create new contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please input the email, name, gender, phone of the contact to be
            added
          </DialogContentText>
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
          <Button onClick={() => setOpenCreateContactForm(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreateContact}>Add</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default CreateContactForm;
