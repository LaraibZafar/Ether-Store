import React from "react";
import "./App.css";
import HomePage from "./page-components/homepage-component/homepage.component";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
