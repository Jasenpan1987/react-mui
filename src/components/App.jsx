import React, { Component } from "react";
import { Header, Footer } from "./layouts";
import { Exercise } from "./exercise";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Exercise />
        <Footer />
      </React.Fragment>
    );
  }
}

export { App };
