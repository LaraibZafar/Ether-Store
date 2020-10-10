import React from "react";
import "./checkout.styles.scss";

import CheckoutItem from "../../components/checkout-item-component/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button-component/stripe-button.component";

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
        <CheckoutItem cartItem={cartItem} />
      ))}
    </div>
    <div className="total">
      <h2>{`TOTAL : $ ${totalPrice}`}</h2>
    </div>
    <div className="card-test">
      Please Use The Following Card Info To Test The Payment
      <br />
      4242424242424242 - Exp : Future Data - CVV:123
    </div>
    <StripeCheckoutButton price={totalPrice} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  totalPrice: selectCartTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
