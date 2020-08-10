import SHOP_DATA from "./SHOP-DATA";
const INITIAL_STATE = {
  shopItems: SHOP_DATA,
};

const shopItemReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return currentState;
  }
};

export default shopItemReducer;
