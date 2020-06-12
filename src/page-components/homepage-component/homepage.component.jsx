import React from "react";
import MenuItemList from "../../components/menu-item-list-component/menu-item-list.component";
import "./homepage.styles.scss";
import { Link } from "react-router-dom";

const HomePage = (props) => (
  <div className="homepage">
    <MenuItemList />
  </div>
);
export default HomePage;
