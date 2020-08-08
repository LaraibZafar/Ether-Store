import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
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
        <span className="arrow">&#10097;</span>
      </div>
      <div className="price">
        <span>{price}</span>
      </div>
      <div className="remove">
        <span>&#10006;</span>
      </div>
    </div>
  );
};
export default CheckoutItem;
