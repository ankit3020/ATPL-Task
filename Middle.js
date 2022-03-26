import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CardBottom from "./CardBottom";
import CardTop from "./CardTop";

function Middle() {
  return (
    <Grid
      container
      direction="column"
      spacing={2}
      style={{
        backgroundColor: "#EFEFEF",
        padding: "20px",
      }}
    >
      <Grid item xs={12} style={{ position: "relative", top: "25px" }}>
        <Grid container display="flex" justifyContent="space-between">
          <Grid item>
            <Typography
              style={{
                fontSize: "25px",
                fontWeight: "800",
              }}
            >
              Dashboard
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="small"
              fontSize="10px"
              disableRipple
              style={{
                borderRadius: "50px",
                marginRight: "25px",
                textTransform: "none",
                backgroundColor: "#370665",
              }}
            >
              Customise Blocks
            </Button>
          </Grid>
        </Grid>

        <Typography style={{ color: "gray", fontSize: "12px" }}>
          Welcome back
        </Typography>
        <Typography
          style={{
            color: "gray",
            fontSize: "12px",
            fontWeight: "800",
            paddingTop: "20px",
          }}
        >
          Quick Stats
        </Typography>
      </Grid>
      <Grid
        item
        style={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CardTop para="Total Bookings" number="28,345" color="black" />
        <CardTop para="Pending Approval" number="120" color="#FF6464" />
        <CardTop para="New Client this month" number="89" />
        <CardTop para="Returning clients" number="46%" />
      </Grid>
      <Grid item style={{ display: "flex" }}>
        <Typography style={{ marginRight: "30px", fontWeight: "800" }}>
          Bookings
        </Typography>
        <Typography style={{ marginRight: "30px" }}>Enquiry</Typography>
        <Typography style={{ marginRight: "30px" }}>My Services</Typography>
      </Grid>
      <Divider />
      <Grid item xs={12}>
        <Grid container>
          <Grid item style={{ display: "flex", margin: "15px 0px 15px 0px" }}>
            <CardBottom
              name="Amanda Singh"
              para="Total Bookings"
              number="28,345"
              color="black"
            />
            <CardBottom
              name="Priyanka Singh"
              para="Total Bookings"
              number="28,345"
              color="black"
            />
            <CardBottom
              name="Sujeet Kumar"
              para="Total Bookings"
              number="28,345"
              color="black"
            />
          </Grid>
          <Grid item style={{ display: "flex" }}>
            <CardBottom
              name="Arvind Chobey"
              para="Total Bookings"
              number="28,345"
              color="black"
            />
            <CardBottom
              name="Ketty Perry"
              para="Total Bookings"
              number="28,345"
              color="black"
            />
            <CardBottom
              name="Aman Sharma"
              para="Total Bookings"
              number="28,345"
              color="black"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Middle;
