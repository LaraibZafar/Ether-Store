import React from "react";
import "./shop-item-list.styles.scss";

const ShopItemList = ({ items, id }) => (
  <div className="shop-item-list">
    {items.map((item) => (
      <div></div>
    ))}
  </div>
);

export default ShopItemList;
