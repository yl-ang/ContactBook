import * as React from "react";
import { URL_CREATE_USER } from "../configs";
import { useState } from "react";
import CreateContactForm from "./CreateContactForm";
import ViewContactForm from "./ViewContactForm";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";

function createData(name, email, gender, phone) {
  return { name, email, gender, phone };
}

function ContactsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [telephone, setTelephone] = useState("");
  const [openCreateContactForm, setOpenCreateContactForm] = useState(false);

  const rows = [createData("0", "0", "0", "0")];

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
        telephone,
      })
      .catch((err) => {
        alert("Please try again later");
      });

    if (res && res.status === 200) {
      // alert(res.data.data._id);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={4}>
        <CreateContactForm />
        <ViewContactForm />
        <Grid>
          <Button variant="contained">Update Contact</Button>
        </Grid>
        <Grid>
          <Button variant="contained">Delete Contact</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactsPage;
