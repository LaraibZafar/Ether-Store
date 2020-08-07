import React from "react";
import "./App.css";
import HomePage from "./page-components/homepage-component/homepage.component";
import ShopPage from "./page-components/shop-page-component/shoppage.component.jsx";
import CheckoutPage from "./page-components/checkout-page-component/checkout.component.jsx";
import Header from "./components/header-component/header.component.jsx";
import LoginSignUpPage from "./page-components/Login-Signup-page-component/Login-Signup-page.component.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth != null) {
        const userReference = await createUserDocument(userAuth);
        //this.setState({ currentUser: userAuth });
        userReference.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(null); //userAuth== NULL
      }
    });
  }

  unsubscribeFromAuth() {
    this.unsubscribeFromAuth = null;
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <LoginSignUpPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  //update redux reducer
  setCurrentUser: (user) => dispatch(setCurrentUser(user)), //dispatch to each reducer the object returned by setCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App); //first argument StateToProps(or null) second DispatchToProps
