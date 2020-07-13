import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/cartIcon.svg";
import "./shopping-cart.styles.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingBag className="cart-img" />
    <span className="cart-count">0</span>
  </div>
);

export default CartIcon;
