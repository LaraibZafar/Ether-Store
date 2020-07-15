import React from "react";
import "./shoppage.styles.scss";
import ShopData from "./SHOP-DATA.js";
import ShopItemList from "../../components/shop-item-list-component/shop-item-list.component";
class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: ShopData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="Shop-Page">
        {collections.map(({ id, title, items }) => (
          <div key={id}>
            <h1>{title}</h1>
            <ShopItemList id={id} items={items} />
          </div>
        ))}
      </div>
    );
  }
}

export default ShopPage;
