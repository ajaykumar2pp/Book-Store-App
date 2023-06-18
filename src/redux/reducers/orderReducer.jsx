const initialState = {
    orders: [],
  };
  
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PLACE_ORDER':
        return {
          ...state,
          orders: [...state.orders, { items: action.payload, date: new Date() }],
        };
      default:
        return state;
    }
  };
  
  export default orderReducer;
  