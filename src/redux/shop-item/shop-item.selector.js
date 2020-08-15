import { createSelector } from "reselect";

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
