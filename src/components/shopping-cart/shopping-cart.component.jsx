import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/cartIcon.svg";
import { toggleCartVisibility } from "../../redux/cart/cart.actions.js";
import { connect } from "react-redux";
import "./shopping-cart.styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartVisibility, itemCount }) => (
  <div className="cart-icon">
    <ShoppingBag onClick={toggleCartVisibility} className="cart-img" />
    <span className="cart-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
