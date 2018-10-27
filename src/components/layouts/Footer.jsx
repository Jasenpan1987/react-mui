import React from "react";
import { Tab, Paper, Tabs } from "@material-ui/core";

const Footer = ({ muscles }) => (
  <footer>
    <Paper>
      <Tabs
        value={0}
        // onChange={this.handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(muscle => (
          <Tab key={muscle} label={muscle} />
        ))}
      </Tabs>
    </Paper>
  </footer>
);

export { Footer };
