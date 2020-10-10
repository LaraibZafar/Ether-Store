import React from "react";
import CustomButton from "../Custom-button-component/Custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item-component/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartVisibility } from "../../redux/cart/cart.actions";

const CartDropDown = ({ cartItems, dispatch, history, match }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem item={cartItem} />)
        ) : (
          <span className="empty-cart">Your Cart Is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push(`${match.url}checkout`);
          dispatch(toggleCartVisibility());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
