import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";

function ShoppingCartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div>
      <h3 className="text-3xl font-bold dark:text-white text-center mt-3">
        Shopping Cart
      </h3>

      {cartItems.length === 0 ? (
        <h3 className="text-2xl font-bold dark:text-white text-center mt-3">
          Your cart is empty.
        </h3>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-3 mt-5">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
                {cartItems.map((item) => (
                  <div key={item.id}>
                    <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white bg-red-300 px-1 mt-2  rounded-1">
                      View : {item.title}
                    </span>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        Price: {item.price}$
                      </span>
                      <button
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        
      )}
    </div>
  );
}

export default ShoppingCartPage;
