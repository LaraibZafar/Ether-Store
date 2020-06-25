import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons8-ethereum.svg";
import { auth } from "../../firebase/firebase.utils";
const Header = ({ currentUser }) => (
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
    </div>
  </div>
);
export default Header;
