import React from "react";
import "./shop-item-list.styles.scss";
import ShopItem from "../shop-item-component/shop-item.component";

const ShopItemList = ({ items }) => (
  <div className="shop-item-list">
    {items
      .filter((items, index) => index < 4)
      .map(({ id, ...otherItemVars }) => (
        <ShopItem key={id} {...otherItemVars} />
      ))}
  </div>
);

export default ShopItemList;
