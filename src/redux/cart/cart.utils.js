export const addItems = (cartItems, newItem) => {
  const foundMatch = cartItems.find(
    (cartItem) => cartItem.name === newItem.name
  );
  if (foundMatch) {
    return cartItems.map((cartItem) =>
      cartItem.name === newItem.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }
};
