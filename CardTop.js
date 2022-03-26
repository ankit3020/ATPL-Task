import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CardTop({ para, number, color }) {
  return (
    <Card sx={{ minWidth: 200 }} style={{ marginRight: "20px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {para}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{ fontWeight: "800", color: color }}
        >
          {number}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardTop;
