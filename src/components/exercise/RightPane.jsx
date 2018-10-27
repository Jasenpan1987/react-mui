import React from "react";
import { Paper, Typography } from "@material-ui/core";

const RightPane = props => {
  const { styles, selectedExerciseId, exercises } = props;
  if (selectedExerciseId !== undefined) {
    const { title, description } = exercises.find(
      ex => ex.id === selectedExerciseId
    );

    return (
      <Paper style={styles.Paper}>
        <Typography variant="display1">{title}</Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          {description}
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper style={styles.Paper}>
      <Typography variant="display1">Welcome</Typography>
      <Typography variant="subheading" style={{ marginTop: 20 }}>
        Please Select an exercise...
      </Typography>
    </Paper>
  );
};

export { RightPane };
