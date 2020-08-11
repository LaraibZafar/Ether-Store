import { createSelector } from "reselect";
import shopItemReducer from "./shop-item.reducer";

const ITEM_TO_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShopItem = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShopItem],
  (shop) => shop.shopItems
);

export const selectCategoryData = (categoryItem) =>
  createSelector([selectShopData], (shopItems) =>
    shopItems.find((shopItem) => shopItem.id === ITEM_TO_ID_MAP[categoryItem])
  );
