export const addItems = (cartItems, newItem) => {
  let foundMatch = cartItems.find((cartItem) => cartItem.id === newItem.id);

  if (foundMatch) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItems, ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  if (!foundMatch) {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }
};
