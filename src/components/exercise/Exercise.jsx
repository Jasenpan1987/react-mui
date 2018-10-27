import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

class Exercise extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item sm>
          <LeftPane styles={styles} />
        </Grid>

        <Grid item sm>
          <RightPane styles={styles} />
        </Grid>
      </Grid>
    );
  }
}

export { Exercise };
