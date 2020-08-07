import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";
const CheckoutPage = ({ totalPrice, cartItems }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="table-labels">
        <span>Product</span>
      </div>
      <div className="table-labels">
        <span>Description</span>
      </div>
      <div className="table-labels">
        <span>Quantity</span>
      </div>
      <div className="table-labels">
        <span>Price</span>
      </div>
      <div className="table-labels">
        <span>Remove</span>
      </div>
    </div>
    <div className="cart-Items">
      {cartItems.map((cartItem) => (
        <h1>{cartItem.name}</h1>
      ))}
    </div>
    <div className="total">
      <h2>{totalPrice}</h2>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  totalPrice: selectCartTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);