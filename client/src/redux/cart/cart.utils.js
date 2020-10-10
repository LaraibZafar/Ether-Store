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

export const decreaseQuantity = (cartItems, newItem) => {
  var removeItem = false;
  cartItems.map((cartItem) => {
    if (cartItem.name === newItem.name) {
      if (cartItem.quantity === 1) {
        removeItem = true;
      }
    }
  });

  if (removeItem) {
    return cartItems.filter((cartItem) => cartItem.name !== newItem.name);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.name === newItem.name
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
