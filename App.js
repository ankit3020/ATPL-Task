import { Grid } from "@mui/material";
import React from "react";
import "./App.css";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

function App() {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Left />
      </Grid>
      <Grid item xs={11}>
        <Grid container>
          <Grid item xs={9}>
            <Middle />
          </Grid>
          <Grid item xs={3}>
            <Right />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
