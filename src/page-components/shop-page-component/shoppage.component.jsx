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
import Spinner from "../../components/spinner-component/spinner.component";

const ShopItemOverviewWithSpinner = Spinner(ShopItemOverview);
const CategoryPageWithSpinner = Spinner(CategoryPage);

class ShopPage extends React.Component {
  state = { isLoading: true };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { storeShopData } = this.props;
    const collectionRefernce = firestore.collection("Shop Data");
    collectionRefernce.onSnapshot(async (snap) => {
      const transformedData = transformShopDataCollection(snap);
      console.log(transformedData);
      storeShopData(transformedData);
      this.setState({ isLoading: false });
    });
  }

  render() {
    return (
      <div className="Shop-Page">
        <Route
          exact
          path={`/shop`}
          render={(props) => (
            <ShopItemOverviewWithSpinner
              isLoading={this.state.isLoading}
              {...props}
            />
          )}
        />
        <Route
          exact
          path={`/shop/:categoryid`}
          render={(props) => (
            <CategoryPageWithSpinner
              isLoading={this.state.isLoading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeShopData: (shopData) => dispatch(addShopData(shopData)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
