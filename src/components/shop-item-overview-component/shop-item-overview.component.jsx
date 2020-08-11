import React from "react";
import "./shop-item-overview.styles.scss";

import ShopItemList from "../shop-item-list-component/shop-item-list.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopData } from "../../redux/shop-item/shop-item.selector";

const ShopItemPreview = ({ collections }) => (
  <div className="itemPreview">
    {collections.map(({ id, title, items }) => (
      <div key={id}>
        <h1>{title}</h1>
        <ShopItemList id={id} items={items} />
      </div>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopData,
});

export default connect(mapStateToProps)(ShopItemPreview);
