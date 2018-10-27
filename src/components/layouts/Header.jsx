import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const HeaderComponent = props => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit">
            Exercise Demo
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export const Header = HeaderComponent;
