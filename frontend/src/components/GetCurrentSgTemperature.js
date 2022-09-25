import * as React from "react";
import { URI_AWS_LAMBDA_FUNCTION } from "../configs";
import ThermostatAutoIcon from "@mui/icons-material/ThermostatAuto";
import axios from "axios";

import { Button, Grid } from "@mui/material";

const GetCurrentSgTemperature = () => {
  const handleDeleteContact = async () => {
    const res = await axios.get(URI_AWS_LAMBDA_FUNCTION).catch((err) => {
      alert("Please try again later");
    });

    if (res && res.status === 200) {
      alert("Average temperature in SG: " + res.data + " degrees Celsius");
    }
  };

  return (
    <Grid
      item
      xs={4}
      style={{
        alignContent: "flex-end",
        display: "row",
      }}
    >
      <Button
        variant="contained"
        onClick={handleDeleteContact}
        endIcon={<ThermostatAutoIcon />}
      >
        Get current temperature
      </Button>
    </Grid>
  );
};

export default GetCurrentSgTemperature;
