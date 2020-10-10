import React from "react";
import "./cart-item.styles.scss";

const CartItem = (item) => {
  const { name, imageUrl, price, quantity } = item.item;
  console.log(imageUrl);
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item-img" />
      <div className="item-content">
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
