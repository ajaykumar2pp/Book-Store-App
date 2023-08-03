import {ADD_TO_CART,REMOVE_FROM_CART} from '../constant'
export const addToCart = (book) => {
  console.log("Action Add cart Call ", book)
    return {
      type: ADD_TO_CART,
        book: book,
    };
  };
  
  export const removeFromCart = (id) => {
    console.log("Action Remove cart Call ", id)
    return {
      type: REMOVE_FROM_CART,
       id,
    };
  };
  