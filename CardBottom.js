import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";

function CardBottom({ para, number, color, name }) {
  return (
    <Card
      sx={{ minWidth: 260 }}
      style={{ marginRight: "20px", padding: "10px 15px 10px 5px" }}
    >
      <CardContent>
        <Typography>{name}</Typography>
        <Typography style={{ color: "gray", fontSize: "10px" }}>
          service
        </Typography>
        <Typography style={{ fontSize: "12px" }}>Physiotherapy</Typography>
        <Grid container display="flex" justifyContent="space-between">
          <Grid item>
            <Typography style={{ color: "gray", fontSize: "10px" }}>
              Date
            </Typography>
            <Typography style={{ fontSize: "12px" }}>25 Jul 2020</Typography>
          </Grid>

          <Grid item>
            <Typography style={{ color: "gray", fontSize: "10px" }}>
              Time
            </Typography>
            <Typography style={{ fontSize: "12px" }}>11:00-12:00</Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            style={{ fontSize: "12px", color: "#BC8CF2", fontWeight: "800" }}
          >
            Accept Booking
          </Typography>
          <Typography style={{ fontSize: "12px", color: "gray" }}>
            Decline
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CardBottom;
