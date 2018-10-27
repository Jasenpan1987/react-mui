import React, { Component } from "react";
import { FormControl, InputLabel, Select, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { muscles as musclesInStore } from "../../../store";

const styles = theme => ({
  root: {
    width: 300
  }
});

class CreateComponent extends Component {
  state = {
    open: false,
    exercise: {
      title: "",
      description: "",
      muscles: ""
    }
  };

  handleOpenClose = isOpen => () => {
    this.setState(prevState => ({
      ...prevState,
      open: isOpen
    }));
  };

  handleFieldChange = e => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [e.currentTarget.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onCreateExercise({
      ...this.state.exercise
    });

    this.handleOpenClose(false)();
  };

  render() {
    const {
      exercise: { title, description, muscles }
    } = this.state;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Button
          variant="fab"
          color="secondary"
          aria-label="Add"
          mini
          styles={{ marginRight: 20 }}
          onClick={this.handleOpenClose(true)}
        >
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleOpenClose(false)}
          aria-labelledby="form-dialog-title"
        >
          <form onSubmit={this.handleSubmit} className={classes.root}>
            <DialogTitle id="form-dialog-title">
              Create a new exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>Please give the details...</DialogContentText>

              <TextField
                autoFocus
                value={title}
                margin="dense"
                id="title"
                label="Title"
                type="text"
                name="title"
                fullWidth
                onChange={this.handleFieldChange}
              />

              <FormControl fullWidth>
                <InputLabel htmlFor="age-native-simple">Muscles</InputLabel>
                <Select
                  native
                  value={muscles}
                  name="muscles"
                  onChange={this.handleFieldChange}
                >
                  <option value="" />
                  {musclesInStore.map(muscle => (
                    <option key={muscle} value={muscle}>
                      {muscle}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <TextField
                value={description}
                multiline
                rows={4}
                margin="dense"
                id="description"
                label="Description"
                type="text"
                name="description"
                onChange={this.handleFieldChange}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button type="submit" color="primary">
                Create
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </React.Fragment>
    );
  }
}
export const Create = withStyles(styles)(CreateComponent);
