import React from "react";
import CustomButton from "../Custom-button-component/Custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item-component/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
