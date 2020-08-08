import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import { addCartItem, removeCartItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, incrementCartItem, removeCartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="item-image">
        <img alt="item" src={imageUrl}></img>
      </div>
      <div className="name">
        <span>{name}</span>
      </div>
      <div className="quantity">
        <span className="arrow">&#10096;</span>
        <span>{quantity}</span>
        <span className="arrow" onClick={() => incrementCartItem(cartItem)}>
          &#10097;
        </span>
      </div>
      <div className="price">
        <span>{price}</span>
      </div>
      <div className="remove">
        <span onClick={() => removeCartItem(cartItem)}>&#10006;</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  incrementCartItem: (item) => dispatch(addCartItem(item)),
  removeCartItem: (item) => dispatch(removeCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
