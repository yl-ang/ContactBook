import * as React from "react";
import CreateContactForm from "./CreateContactForm";
import ViewContactForm from "./ViewContactForm";
import UpdateContactForm from "./UpdateContactForm";
import DeleteContactForm from "./DeleteContactForm";
import { useState } from "react";
import axios from "axios";
import { FaAddressBook } from "react-icons/fa";
import { URL_GET_ALL_USERS } from "../configs";

import { DataGrid } from "@mui/x-data-grid";

import { Paper, Grid } from "@mui/material";

function ContactsPage() {
  const [contacts, setcontacts] = useState([]);

  const columns = [
    { field: "sn", headerName: "S/N", width: 75 },
    { field: "id", headerName: "Contact ID", width: 250 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "gender", headerName: "Gender", width: 75 },
    { field: "telephone", headerName: "Telephone", width: 150 },
    { field: "__v0", hide: true },
  ];

  const handleGetAllContacts = async () => {
    const res = await axios.get(URL_GET_ALL_USERS).catch((err) => {
      alert("Please try again later");
    });

    if (res && res.status === 200) {
      setcontacts(res.data.data);
    }
  };

  React.useEffect(() => {
    handleGetAllContacts();
  });

  return (
    <Grid
      container
      spacing={5}
      direction="row"
      alignItems="center"
      justify="center"
      m={10}
    >
      <Grid item xs={12}>
        <h1>
          Contact Book System <FaAddressBook />
        </h1>
      </Grid>
      <Grid item xs={8}>
        <DataGrid
          component={Paper}
          style={{ height: 500, width: "100%", flexGrow: 1, display: "flex" }}
          rows={contacts.map((item, index) => ({
            sn: index + 1,
            id: item._id,
            name: item.name,
            email: item.email,
            gender: item.gender,
            telephone: item.phone,
          }))}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
        />
      </Grid>
      <Grid item xs={4}>
        <CreateContactForm />
        <ViewContactForm />
        <UpdateContactForm />
        <DeleteContactForm />
      </Grid>
    </Grid>
  );
}

export default ContactsPage;
