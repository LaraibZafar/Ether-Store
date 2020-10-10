import { combineReducers } from "redux";
import thunk from "redux-thunk";

import UserReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import menuItemReducer from "./menu-item/menu-item.reducer";
import shopItemReducer from "./shop-item/shop-item.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfiguration = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  menuItem: menuItemReducer,
  shop: shopItemReducer,
});

export default persistReducer(persistConfiguration, rootReducer);
