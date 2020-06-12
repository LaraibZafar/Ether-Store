import React from "react";
import "./shoppage.styles.scss";
import ShopData from "./SHOP-DATA.js";

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
        {this.state.collections.map((item) => (
          <h1>{item.title}</h1>
        ))}
      </div>
    );
  }
}

export default ShopPage;
