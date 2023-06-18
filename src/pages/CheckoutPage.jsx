import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../redux/actions/orderActions";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    dispatch(placeOrder(cartItems));
  };
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
      

      {cartItems.length === 0 ? (
        <h3 className="text-2xl font-bold dark:text-white text-center mt-3">
        Your cart is empty.
      </h3>
       
      ) : (
        <div className="flex flex-col items-center pb-10">
          <h4 class="text-2xl font-bold colors.red:text-white text-center">
            Order Summary
          </h4>

          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <ul className="">
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <span className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      {item.title}{" "}
                    </span>
                    <span className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      ${item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          
            <div className="p-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  Total Price: ${getTotalPrice()}
                </span>
                <button
                  onClick={handlePlaceOrder}
                  className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Place Order
                </button>
              </div>
            </div>
          
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
