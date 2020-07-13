import React from "react";
import "./shop-item.styles.scss";
import CustomButton from "../Custom-button-component/Custom-button.component";

const ShopItem = ({ id, name, imageUrl, price }) => (
  <div className="shop-item">
    <div
      className="background-Image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <CustomButton invertedButton>ADD TO CART</CustomButton>
    </div>
    <div className="content">
      <span>{name}</span>
      <span>${price}</span>
    </div>
  </div>
);

export default ShopItem;
