import React from "react";
import "./shoppage.styles.scss";

import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { addShopData } from "../../redux/shop-item/shop-item.actions";

import {
  firestore,
  transformShopDataCollection,
} from "../../firebase/firebase.utils";

import ShopItemOverview from "../../components/shop-item-overview-component/shop-item-overview.component";
import CategoryPage from "../category-page-component/category-page.component";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { storeShopData } = this.props;
    const collectionRefernce = firestore.collection("Shop Data");
    collectionRefernce.onSnapshot(async (snap) => {
      const transformedData = transformShopDataCollection(snap);
      console.log(transformedData);
      storeShopData(transformedData);
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

const mapDispatchToProps = (dispatch) => ({
  storeShopData: (shopData) => dispatch(addShopData(shopData)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
