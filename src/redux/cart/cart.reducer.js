import { cartActionTypes } from "./cart.types";
import { addItems } from "./cart.utils";
const INITIAL_STATE = {
  cartToggle: false,
  cartItems: [],
};

const CartReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return {
        ...currentState,
        cartToggle: !currentState.cartToggle,
      };
    case cartActionTypes.ADD_TO_CART:
      return {
        ...currentState,
        cartItems: addItems(currentState.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_FROM_CART:
      return {
        ...currentState,
        cartItems: currentState.cartItems.filter(
          (cartItem) => cartItem.name !== action.payload.name
        ),
      };
    default:
      return currentState;
  }
};

export default CartReducer;
