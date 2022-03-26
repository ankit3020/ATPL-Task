import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import FaceIcon from "@mui/icons-material/Face";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Button from "@mui/material/Button";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import ContactsIcon from "@mui/icons-material/Contacts";

function Right() {
  return (
    <Card sx={{ minWidth: 320 }} style={{ marginRight: "20px" }}>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "50px",
                    color: "grey",
                    backgroundColor: "#eef3f8",
                    marginLeft: "10px",
                  }}
                >
                  <SearchIcon />
                  <input
                    type="text"
                    style={{
                      outline: "none",
                      border: "none",
                      background: "none",
                    }}
                  ></input>
                </div>
              </Grid>
              <Grid item style={{ marginTop: "10px", marginLeft: "19px" }}>
                <CircleNotificationsIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "15px" }}>
            <Grid container display="flex" justifyContent="space-between">
              <Grid item>
                <Typography style={{ color: "gray", fontSize: "20px" }}>
                  Hello,
                </Typography>
                <Typography
                  style={{
                    color: "#3A3845",
                    fontSize: "25px",
                    fontWeight: "800",
                  }}
                >
                  Jonathon!
                </Typography>
                <Typography
                  style={{
                    color: "gray",
                    fontSize: "12px",
                    paddingRight: "70px",
                  }}
                >
                  copy your bio link and paste it in your profile to let people
                  find you
                </Typography>
              </Grid>
              <Grid
                item
                style={{ position: "relative", left: "250px", bottom: "70px" }}
              >
                <FaceIcon fontSize="large" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "50px",
                  color: "grey",
                  backgroundColor: "#eef3f8",
                  marginLeft: "10px",
                  width: "150px",
                }}
              >
                <input
                  type="text"
                  style={{
                    outline: "none",
                    border: "none",
                    background: "none",
                  }}
                ></input>
                <ContentCopyIcon
                  fontSize="small"
                  style={{ position: "relative", right: "50px" }}
                />
              </div>
              <Button
                variant="contained"
                size="small"
                fontSize="12px"
                style={{
                  borderRadius: "50px",
                  marginLeft: "15px",
                  textTransform: "none",
                }}
              >
                Edit Link
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Card sx={{ minWidth: 275 }} style={{ marginTop: "15px" }}>
              <CardContent style={{ backgroundColor: "#370665" }}>
                <Grid container display="flex" justifyContent="space-between">
                  <Grid item>
                    <Typography style={{ color: "white", fontSize: "20px" }}>
                      Upgrade to Pro
                    </Typography>
                    <Typography style={{ color: "white", fontSize: "12px" }}>
                      for more profile control
                    </Typography>
                  </Grid>
                  <Grid item>
                    <CoPresentIcon fontSize="large" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="flex"
              justifyContent="space-between"
              style={{ marginTop: "15px" }}
            >
              <Grid item>
                <Typography style={{ fontWeight: "800" }}>Reminders</Typography>
              </Grid>
              <Grid item style={{ fontSize: "16px", color: "orange" }}>
                view all
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "15px" }}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container display="flex" justifyContent="flex-start">
                  <Grid item style={{ marginRight: "30px", marginTop: "5px" }}>
                    <ContactsIcon />
                  </Grid>
                  <Grid item>
                    <Typography style={{ fontSize: "16px" }}>
                      Booking Reminder
                    </Typography>
                    <Typography style={{ color: "gray", fontSize: "12px" }}>
                      Loream ipsum
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ marginTop: "10px" }}>
                <Grid container display="flex" justifyContent="flex-start">
                  <Grid item style={{ marginRight: "30px", marginTop: "5px" }}>
                    <ContactsIcon />
                  </Grid>
                  <Grid item>
                    <Typography style={{ fontSize: "16px" }}>
                      New Message
                    </Typography>
                    <Typography style={{ color: "gray", fontSize: "12px" }}>
                      Loream ipsum
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ marginTop: "10px" }}>
                <Grid container display="flex" justifyContent="flex-start">
                  <Grid item style={{ marginRight: "30px", marginTop: "5px" }}>
                    <ContactsIcon />
                  </Grid>
                  <Grid item>
                    <Typography style={{ fontSize: "16px" }}>
                      Upcoming Booking
                    </Typography>
                    <Typography style={{ color: "gray", fontSize: "12px" }}>
                      Loream ipsum
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Right;
