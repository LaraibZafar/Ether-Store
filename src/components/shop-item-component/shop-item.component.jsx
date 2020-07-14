import React from "react";
import "./shop-item.styles.scss";
import CustomButton from "../Custom-button-component/Custom-button.component";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.actions";
const ShopItem = (item) => {
  const { name, imageUrl, price, addCartItem } = item;
  return (
    <div className="shop-item">
      <div
        className="background-Image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <CustomButton onClick={() => addCartItem(item)} invertedButton>
          ADD TO CART
        </CustomButton>
      </div>
      <div className="content">
        <span>{name}</span>
        <span>${price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(ShopItem);
