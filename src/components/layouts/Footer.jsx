import React from "react";
import { Tab, Paper, Tabs } from "@material-ui/core";

const Footer = ({ muscles, handleMuscleSelect, selectedMuscle }) => (
  <footer>
    <Paper>
      <Tabs
        value={muscles.indexOf(selectedMuscle)}
        onChange={(e, index) => {
          handleMuscleSelect(muscles[index || 0]);
        }}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {muscles.map(muscle => (
          <Tab key={muscle} label={muscle} />
        ))}
      </Tabs>
    </Paper>
  </footer>
);

export { Footer };
