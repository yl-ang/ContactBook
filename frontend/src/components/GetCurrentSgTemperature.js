import * as React from "react";
import { URI_AWS_LAMBDA_FUNCTION } from "../configs";
import { useState } from "react";
import axios from "axios";

import { Button, Grid } from "@mui/material";

const GetCurrentSgTemperature = () => {
  const handleDeleteContact = async () => {
    const res = await axios.get(URI_AWS_LAMBDA_FUNCTION).catch((err) => {
      alert(err);
      alert("Please try again later");
    });

    if (res && res.status === 200) {
      alert(res.data + " degrees Celsius");
    }
  };

  return (
    <Grid
      item
      xs={12}
      style={{
        alignContent: "flex-end",
        display: "row",
      }}
    >
      <Button variant="contained" onClick={handleDeleteContact}>
        Get Singapore current temperature
      </Button>
    </Grid>
  );
};

export default GetCurrentSgTemperature;
