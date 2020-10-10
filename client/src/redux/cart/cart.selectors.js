import { createSelector } from "reselect";
//input Selector
//return a small piece of the state
const selectCart = (state) => state.cart;
//output Selector
//createSelector method makes this function memoized

export const selectCartHiddenStatus = createSelector(
  [selectCart],
  (cart) => cart.cartToggle
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedValue, cartItem) =>
      accumulatedValue + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedValue, cartItem) => accumulatedValue + cartItem.quantity,
      0
    )
  /*
  cart.cartItems.reduce(
    (accumulatedValue, cartItem) => accumulatedValue + cartItem.quantity,
    0
  )
  */
);
