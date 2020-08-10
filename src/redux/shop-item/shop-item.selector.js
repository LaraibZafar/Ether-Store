import { createSelector } from "reselect";
import { createStore } from "redux";

const selectShopItem = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShopItem],
  (shop) => shop.shopItems
);
