import React from "react";
import { Tab, Paper, Tabs } from "@material-ui/core";

const Footer = () => (
  <footer>
    <Paper>
      <Tabs
        value={0}
        // onChange={this.handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  </footer>
);

export { Footer };
