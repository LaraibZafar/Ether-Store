import { shopActionTypes } from "./shop-item.types";
const INITIAL_STATE = {
  shopItems: null,
};

const shopItemReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.ADD_SHOP_DATA:
      return {
        ...currentState,
        shopItems: action.payload,
      };
    default:
      return currentState;
  }
};

export default shopItemReducer;
