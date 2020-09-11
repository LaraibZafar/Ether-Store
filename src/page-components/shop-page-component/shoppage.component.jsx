import React from "react";
import "./shoppage.styles.scss";

import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchDataFromFirestore } from "../../redux/shop-item/shop-item.actions";
import { createStructuredSelector } from "reselect";
import { selectIsDataLoaded } from "../../redux/shop-item/shop-item.selector";

import ShopItemOverview from "../../components/shop-item-overview-component/shop-item-overview.component";
import CategoryPage from "../category-page-component/category-page.component";
import Spinner from "../../components/spinner-component/spinner.component";

const ShopItemOverviewWithSpinner = Spinner(ShopItemOverview);
const CategoryPageWithSpinner = Spinner(CategoryPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchDataFromFirestore } = this.props;
    fetchDataFromFirestore();
  }

  render() {
    const { isDataLoaded } = this.props;
    return (
      <div className="Shop-Page">
        <Route
          exact
          path={`/shop`}
          render={(props) => (
            <ShopItemOverviewWithSpinner isLoading={!isDataLoaded} {...props} />
          )}
        />
        <Route
          exact
          path={`/shop/:categoryid`}
          render={(props) => (
            <CategoryPageWithSpinner isLoading={!isDataLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = () =>
  createStructuredSelector({
    isDataLoaded: selectIsDataLoaded,
  });

const mapDispatchToProps = (dispatch) => ({
  fetchDataFromFirestore: () => dispatch(fetchDataFromFirestore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
