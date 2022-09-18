import * as React from "react";
import CreateContactForm from "./CreateContactForm";
import ViewContactForm from "./ViewContactForm";
import DeleteContactForm from "./DeleteContactForm";
import { useState } from "react";
import axios from "axios";
import { URL_GET_ALL_USERS } from "../configs";

import { DataGrid } from "@mui/x-data-grid";

import { Button, Paper, Grid } from "@mui/material";

function ContactsPage() {
  const [contacts, setcontacts] = useState([]);

  const columns = [
    { field: "sn", headerName: "S/N", width: 150 },
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "gender", headerName: "Gender", width: 150 },
    { field: "telephone", headerName: "Telephone", width: 150 },
    { field: "__v0", hide: true },
  ];

  const handleGetAllContacts = async () => {
    const res = await axios.get(URL_GET_ALL_USERS).catch((err) => {
      alert(err);
      alert("Please try again later");
    });

    if (res && res.status === 200) {
      setcontacts(res.data.data);
    }
  };

  React.useEffect(() => {
    handleGetAllContacts();
    // console.log(contacts.data);
  });

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={8}>
        <DataGrid
          component={Paper}
          style={{ height: 350, width: "100%", flexGrow: 1, display: "flex" }}
          rows={contacts.map((item, index) => ({
            sn: index,
            id: item._id,
            name: item.name,
            email: item.email,
            gender: item.gender,
            telephone: item.phone,
          }))}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
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
