import React from "react";
import "./header.styles.scss";
import CartIcon from "../shopping-cart/shopping-cart.component";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons8-ethereum.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartDropDown from "../cart-dropdown-component/cart-dropdown.component";
import { selectCartHiddenStatus } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, cartToggle }) => (
  <div className="header-container">
    <Link to="/" className="logo">
      <Logo className="logo-svg" />
    </Link>
    <div className="nav-buttons">
      <Link to="/shop" className="button">
        <h2>SHOP</h2>
      </Link>
      <Link to="/contact" className="button">
        <h2>CONTACT</h2>
      </Link>
      {currentUser ? (
        <div className="button" onClick={() => auth.signOut()}>
          <h2>SIGN OUT</h2>
        </div>
      ) : (
        <Link to="/signin" className="button">
          <h2>SIGN IN</h2>
        </Link>
      )}
      <CartIcon className="button" />
    </div>
    {cartToggle ? <CartDropDown></CartDropDown> : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartToggle: selectCartHiddenStatus,
});

export default connect(mapStateToProps)(Header);
