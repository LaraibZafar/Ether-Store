import { cartActionTypes } from "./cart.types";
const INITIAL_STATE = {
  cartToggle: false,
};

const CartReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return {
        ...currentState,
        cartToggle: !currentState.cartToggle,
      };

    default:
      return currentState;
  }
};

export default CartReducer;
