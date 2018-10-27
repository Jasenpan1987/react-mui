import React, { Component } from "react";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import { muscles, exercises } from "../store";
import { Exercise } from "./exercise/Exercise";

class App extends Component {
  state = {
    exercises,
    muscles,
    selectedMuscle: "All",
    selectedExerciseId: undefined
  };

  handleMuscleSelect = selectedMuscle => {
    this.setState(prevState => ({
      ...prevState,
      selectedMuscle
    }));
  };

  handleExerciseSelect = selectedExerciseId => {
    this.setState(prevState => ({
      ...prevState,
      selectedExerciseId
    }));
  };

  onCreateExercise = exercise => {
    this.setState(prevState => ({
      ...prevState,
      exercises: [
        ...prevState.exercises,
        {
          ...exercise,
          id: exercise.title
        }
      ]
    }));
  };

  render() {
    const {
      state: { exercises }
    } = this;

    return (
      <React.Fragment>
        <Header onCreateExercise={this.onCreateExercise} />
        <Exercise
          exercises={exercises}
          selectedMuscle={this.state.selectedMuscle}
          selectedExerciseId={this.state.selectedExerciseId}
          handleExerciseSelect={this.handleExerciseSelect}
          muscles={["All", ...muscles]}
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
