export const placeOrder = (cartItems) => {
    return {
      type: 'PLACE_ORDER',
      payload: cartItems,
    };
  };
  