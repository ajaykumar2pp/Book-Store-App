import { ADD_TO_CART,REMOVE_FROM_CART } from "../constant";

const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        console.log("Add Reducer Call", action)
        return {
          ...state,
          cartItems: [...state.cartItems, action.book],
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: [...state.cartItems.filter(item => item.id !== action.id)],
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  