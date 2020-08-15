import { createSelector } from "reselect";
import shopItemReducer from "./shop-item.reducer";

const selectShopItem = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShopItem],
  (shop) => shop.shopItems
);

export const selectShopDataArray = createSelector(
  [selectShopData],
  (shopItems) => Object.keys(shopItems).map((itemKeys) => shopItems[itemKeys])
);

export const selectCategoryData = (categoryItem) =>
  createSelector([selectShopData], (shopItems) => shopItems[categoryItem]);
