import React from "react";
import MenuItemList from "../../components/menu-item-list-component/menu-item-list.component";
import { HomePageContainer } from "./homepage.styles.jsx";

const HomePage = (props) => (
  <HomePageContainer>
    <MenuItemList />
  </HomePageContainer>
);
export default HomePage;
