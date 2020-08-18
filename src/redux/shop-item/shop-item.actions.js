import { shopActionTypes } from "./shop-item.types";

export const addShopData = (shopData) => ({
  type: shopActionTypes.ADD_SHOP_DATA,
  payload: shopData,
});
