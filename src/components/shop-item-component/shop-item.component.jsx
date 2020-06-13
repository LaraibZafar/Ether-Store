import React from "react";
import "./shop-item.styles.scss";

const ShopItem = ({ id, name, imageUrl, price }) => (
  <div className="shop-item">
    <div
      className="background-Image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <span>{name}</span>
      <span>${price}</span>
    </div>
  </div>
);

export default ShopItem;
