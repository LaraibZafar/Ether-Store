import { cartActionTypes } from "./cart.types";

export const toggleCartVisibility = () => ({
  type: cartActionTypes.TOGGLE_CART,
});

export const addCartItem = (item) => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: cartActionTypes.REMOVE_FROM_CART,
  payload: item,
});
