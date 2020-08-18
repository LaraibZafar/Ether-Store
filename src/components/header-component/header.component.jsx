import React from "react";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import CartDropDown from "../cart-dropdown-component/cart-dropdown.component";

import { selectCartHiddenStatus } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

import {
  HeaderContainer,
  NavigationButtons,
  LogoImage,
  ButtonCart,
  ButtonDiv,
  ButtonLink,
} from "./header.styles";

const Header = ({ currentUser, cartToggle }) => (
  <HeaderContainer>
    <Link to="/" className="logo">
      <LogoImage />
    </Link>
    <NavigationButtons>
      <ButtonLink to="/shop">
        <h2>SHOP</h2>
      </ButtonLink>
      <ButtonLink to="/contact">
        <h2>CONTACT</h2>
      </ButtonLink>
      {currentUser ? (
        <ButtonLink as="div" onClick={() => auth.signOut()}>
          <h2>SIGN OUT</h2>
        </ButtonLink>
      ) : (
        <ButtonLink to="/signin">
          <h2>SIGN IN</h2>
        </ButtonLink>
      )}
      <ButtonCart />
    </NavigationButtons>
    {cartToggle ? <CartDropDown></CartDropDown> : null}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartToggle: selectCartHiddenStatus,
});

export default connect(mapStateToProps)(Header);
