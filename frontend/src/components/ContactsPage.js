import * as React from "react";
import CreateContactForm from "./CreateContactForm";
import ViewContactForm from "./ViewContactForm";
import DeleteContactForm from "./DeleteContactForm";
import { useState } from "react";
import axios from "axios";
import { URL_GET_ALL_USERS } from "../configs";

import {
  Button,
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
  const [contacts, setcontacts] = useState([]);
  const rows = [createData("0", "0", "0", "0")];

  const handleGetAllContacts = async () => {
    const res = await axios.get(URL_GET_ALL_USERS).catch((err) => {
      alert(err);
      alert("Please try again later");
    });

    if (res && res.status === 200) {
      setcontacts(res.data);
    }
  };

  // React.useEffect(() => {
  //   handleGetAllContacts();
  //   // console.log(contacts);
  // });

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
        <DeleteContactForm />
      </Grid>
    </Grid>
  );
}

export default ContactsPage;
