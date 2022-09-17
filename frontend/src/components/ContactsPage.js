import * as React from "react";

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
  const [openCreateContactForm, setOpenCreateContactForm] =
    React.useState(false);

  const rows = [createData("0", "0", "0", "0")];

  const handleClickOpenCreateContactForm = () => {
    setOpenCreateContactForm(true);
  };

  const handleClickAddContact = () => {
    setOpenCreateContactForm(false);
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
        <Grid>
          <Button
            variant="contained"
            onClick={handleClickOpenCreateContactForm}
          >
            Add Contact
          </Button>
          <Dialog
            open={openCreateContactForm}
            onClose={() => setOpenCreateContactForm(false)}
          >
            <DialogTitle>Create new contact via /POST</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Create new contact with name, email, gender, telephone
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="name"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="gender"
                label="Gender"
                type="gender"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="telephone"
                label="Telephone"
                type="int"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenCreateContactForm(false)}>
                Cancel
              </Button>
              <Button onClick={handleClickAddContact}>Add</Button>
            </DialogActions>
          </Dialog>
        </Grid>
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
