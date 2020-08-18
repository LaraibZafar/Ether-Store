import React from "react";
import "./shoppage.styles.scss";

import { Route } from "react-router-dom";

import {
  firestore,
  transformShopDataCollection,
} from "../../firebase/firebase.utils";

import ShopItemOverview from "../../components/shop-item-overview-component/shop-item-overview.component";
import CategoryPage from "../category-page-component/category-page.component";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const collectionRefernce = firestore.collection("Shop Data");
    collectionRefernce.onSnapshot(async (snap) => {
      const transformedData = transformShopDataCollection(snap);
      console.log(transformedData);
    });
  }

  render() {
    return (
      <div className="Shop-Page">
        <Route exact path={`/shop`} component={ShopItemOverview} />
        <Route exact path={`/shop/:categoryid`} component={CategoryPage} />
      </div>
    );
  }
}

export default ShopPage;
