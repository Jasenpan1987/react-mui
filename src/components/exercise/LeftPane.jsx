import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const LeftPane = props => {
  const { styles, exercises, handleExerciseSelect } = props;
  return (
    <Paper style={styles.Paper}>
      {Object.keys(exercises).map(muscle => {
        const exercisesByMuscle = exercises[muscle];
        return (
          <React.Fragment key={muscle}>
            <Typography
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              {muscle}
            </Typography>
            <List component="nav">
              {exercisesByMuscle.map(ex => (
                <ListItem
                  button
                  key={ex.id}
                  onClick={() => {
                    handleExerciseSelect(ex.id);
                  }}
                >
                  <ListItemText primary={ex.title} />
                </ListItem>
              ))}
            </List>
          </React.Fragment>
        );
      })}
    </Paper>
  );
};

export { LeftPane };
