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
  transformExercisesByMuscle = exercises => {
    return exercises.reduce((exerciseByMuscles, currentExercise) => {
      const { muscles } = currentExercise;

      exerciseByMuscles[muscles] = exerciseByMuscles[muscles]
        ? [...exerciseByMuscles[muscles], currentExercise]
        : [currentExercise];

      return exerciseByMuscles;
    }, {});
  };

  filterExerciseBySelectedMuscle = (selectedMuscle, exercises) => {
    if (selectedMuscle === "All") {
      return exercises;
    }
    return exercises.filter(exercise => exercise.muscles === selectedMuscle);
  };

  render() {
    const {
      exercises,
      handleExerciseSelect,
      selectedExerciseId,
      selectedMuscle
    } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item sm>
          <LeftPane
            styles={styles}
            handleExerciseSelect={handleExerciseSelect}
            exercises={this.transformExercisesByMuscle(
              this.filterExerciseBySelectedMuscle(selectedMuscle, exercises)
            )}
          />
        </Grid>

        <Grid item sm>
          <RightPane
            styles={styles}
            selectedExerciseId={selectedExerciseId}
            exercises={exercises}
          />
        </Grid>
      </Grid>
    );
  }
}

export { Exercise };
