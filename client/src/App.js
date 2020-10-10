import React, { useEffect } from "react";
import "./App.css";

import HomePage from "./page-components/homepage-component/homepage.component";
import ShopPage from "./page-components/shop-page-component/shoppage.component.jsx";
import CheckoutPage from "./page-components/checkout-page-component/checkout.component.jsx";
import Header from "./components/header-component/header.component.jsx";
import LoginSignUpPage from "./page-components/Login-Signup-page-component/Login-Signup-page.component.jsx";

import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";
import { selectShopDataArray } from "./redux/shop-item/shop-item.selector";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <LoginSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  shopData: selectShopDataArray,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App); //first argument StateToProps(or null) second DispatchToProps
