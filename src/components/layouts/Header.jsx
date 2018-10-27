import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Create } from "../exercise/dialogs/Create";

const HeaderComponent = props => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="headline"
            color="inherit"
            style={{ flexGrow: 1 }}
          >
            Exercise Demo
          </Typography>
          <Create onCreateExercise={props.onCreateExercise} />
        </Toolbar>
      </AppBar>
    </header>
  );
};

export const Header = HeaderComponent;
