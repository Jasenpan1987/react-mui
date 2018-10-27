import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

class Exercise extends Component {
  render() {
    const { exercises, handlExerciseSelect, selectedExerciseId } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item sm>
          <LeftPane
            styles={styles}
            exercises={exercises}
            handlExerciseSelect={handlExerciseSelect}
          />
        </Grid>

        <Grid item sm>
          <RightPane styles={styles} selectedExerciseId={selectedExerciseId} />
        </Grid>
      </Grid>
    );
  }
}

export { Exercise };
