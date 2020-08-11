import React from "react";
import "./shoppage.styles.scss";

import { Route } from "react-router-dom";

import ShopItemOverview from "../../components/shop-item-overview-component/shop-item-overview.component";
import CategoryPage from "../category-page-component/category-page.component";

const ShopPage = () => (
  <div className="Shop-Page">
    <Route exact path={`/shop`} component={ShopItemOverview} />
    <Route exact path={`/shop/:categoryid`} component={CategoryPage} />
  </div>
);

export default ShopPage;
