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
    console.log(this.state.collections.length);
  }

  render() {
    return (
      <div className="Shop-Page">
        {this.state.collections.map(({ title, items, id }) => (
          <div>
            <h1>{title}</h1>
            <ShopItemList key={items.id} items={items} />
          </div>
        ))}
      </div>
    );
  }
}

export default ShopPage;
