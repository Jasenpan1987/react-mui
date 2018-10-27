import React from "react";
import { Paper, Typography } from "@material-ui/core";

const RightPane = props => {
  return (
    <Paper style={props.styles.Paper}>
      <Typography variant="display1">Welcome</Typography>
      <Typography variant="subheading" style={{ marginTop: 20 }}>
        Please Select an exercise...
      </Typography>
    </Paper>
  );
};

export { RightPane };
