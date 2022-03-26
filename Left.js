import { Card, CardContent, Grid, Typography } from "@mui/material";
import * as React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddCommentIcon from "@mui/icons-material/AddComment";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AppsIcon from "@mui/icons-material/Apps";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import AttachFileIcon from "@mui/icons-material/AttachFile";

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: "red",
//   },
// });

function Left() {
  //   const classes = useStyles(prps);

  return (
    <Grid>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={12} style={{ marginBottom: "100px" }}>
              <Grid container>
                <Grid
                  item
                  style={{
                    backgroundColor: "orange",
                    height: "5px",
                    width: "5px",
                    borderRadius: "20px",
                    position: "relative",
                    top: "20px",
                  }}
                ></Grid>
                <Grid item>
                  <Typography style={{ fontSize: "25px" }}>S</Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    backgroundColor: "orange",
                    height: "5px",
                    width: "5px",
                    borderRadius: "20px",
                    position: "relative",
                    top: "20px",
                  }}
                ></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "45px" }}>
              <Grid container>
                <Grid item>
                  <AccessTimeIcon />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "45px" }}>
              <Grid container>
                <Grid item>
                  <AddCommentIcon />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "45px" }}>
              <Grid container>
                <Grid item>
                  <AddCircleIcon />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "45px" }}>
              <Grid container>
                <Grid item>
                  <AppsIcon />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "45px" }}>
              <Grid container>
                <Grid item>
                  <AssistantDirectionIcon />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "45px" }}>
              <Grid container>
                <Grid item>
                  <AttachFileIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Left;
