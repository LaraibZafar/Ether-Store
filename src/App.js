import React from "react";
import "./App.css";
import HomePage from "./page-components/homepage-component/homepage.component";
import ShopPage from "./page-components/shop-page-component/shoppage.component.jsx";
import Header from "./components/header-component/header.component.jsx";
import LoginSignUpPage from "./page-components/Login-Signup-page-component/Login-Signup-page.component.jsx";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={LoginSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
