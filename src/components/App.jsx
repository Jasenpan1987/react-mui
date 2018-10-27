import React, { Component } from "react";
import { Header, Footer } from "./layouts";
import { Exercise } from "./exercise";
import { muscles, exercises } from "../store";

class App extends Component {
  state = {
    exercises,
    selectedMuscle: "All",
    selectedExerciseId: undefined
  };

  getExercisesByMuscles = exercises => {
    return exercises.reduce((exerciseByMuscles, currentExercise) => {
      const { muscles } = currentExercise;

      exerciseByMuscles[muscles] = exerciseByMuscles[muscles]
        ? [...exerciseByMuscles[muscles], currentExercise]
        : [currentExercise];

      return exerciseByMuscles;
    }, {});
  };

  filterExercisesByMuscles = exercises => {
    if (this.state.selectedMuscle === "All") {
      return exercises;
    }

    return exercises.filter(
      exercise => exercise.muscles === this.state.selectedMuscle
    );
  };

  handleMuscleSelect = selectedMuscle => {
    this.setState(prevState => ({
      ...prevState,
      selectedMuscle
    }));
  };

  handlExerciseSelect = selectedExerciseId => {
    this.setState(prevState => ({
      ...prevState,
      selectedExerciseId
    }));
  };

  render() {
    const {
      state: { exercises },
      getExercisesByMuscles,
      filterExercisesByMuscles
    } = this;
    return (
      <React.Fragment>
        <Header />
        <Exercise
          exercises={getExercisesByMuscles(filterExercisesByMuscles(exercises))}
          selectedExerciseId={this.state.selectedExerciseId}
          handlExerciseSelect={this.handlExerciseSelect}
        />
        <Footer
          muscles={["All", ...muscles]}
          selectedMuscle={this.state.selectedMuscle}
          handleMuscleSelect={this.handleMuscleSelect}
        />
      </React.Fragment>
    );
  }
}

export { App };
