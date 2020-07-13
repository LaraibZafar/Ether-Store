import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/cartIcon.svg";
import { toggleCartVisibility } from "../../redux/cart/cart.actions.js";
import { connect } from "react-redux";
import "./shopping-cart.styles.scss";

const CartIcon = ({ toggleCartVisibility }) => (
  <div className="cart-icon">
    <ShoppingBag onClick={toggleCartVisibility} className="cart-img" />
    <span className="cart-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
