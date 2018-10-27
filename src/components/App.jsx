import React, { Component } from "react";
import { Header, Footer } from "./layouts";
import { Exercise } from "./exercise";
import { muscles, exercises } from "../store";

class App extends Component {
  state = {
    exercises
  };

  getExercisesByMuscles = () => {
    return this.state.exercises.reduce((exerciseByMuscles, currentExercise) => {
      const { muscles } = currentExercise;

      exerciseByMuscles[muscles] = exerciseByMuscles[muscles]
        ? [...exerciseByMuscles[muscles], currentExercise]
        : [currentExercise];

      return exerciseByMuscles;
    }, {});
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <Exercise exercises={this.getExercisesByMuscles()} />
        <Footer muscles={muscles} />
      </React.Fragment>
    );
  }
}

export { App };
