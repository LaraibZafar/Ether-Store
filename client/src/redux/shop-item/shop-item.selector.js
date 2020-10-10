import { createSelector } from "reselect";

const selectShopItem = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShopItem],
  (shop) => shop.shopItems
);

export const selectShopDataArray = createSelector(
  [selectShopData],
  (shopItems) =>
    shopItems
      ? Object.keys(shopItems).map((itemKeys) => shopItems[itemKeys])
      : null
);

export const selectCategoryData = (categoryItem) =>
  createSelector([selectShopData], (shopItems) =>
    shopItems ? shopItems[categoryItem] : null
  );

export const selectFetchingStatus = createSelector(
  [selectShopItem],
  (shop) => shop.isFetching
);

export const selectIsDataLoaded = createSelector(
  [selectShopItem],
  (shop) => !!shop.shopItems
);
