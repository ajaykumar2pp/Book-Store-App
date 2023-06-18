import React from 'react'
import { NavLink } from "react-router-dom"
import { BsCart3 } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Navbar = () => {
   
  const items = useSelector((state)=>state.cart.cartItems)

  const NavLinkCss = ({ isActive }) => {
    return {
      fontSize: isActive ? "18px" : "18px",
      color: isActive ? "blue" : "black",
      borderBottom: isActive ? "2px solid blue" : "",

    }
  }

  return (
    <>


      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center">
            <img src="./book-logo.png" className="h-9 mr-3 " alt="book-logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Book Store App</span>
          </NavLink>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li className="mr-2">
                <NavLink to="/" style={NavLinkCss} className="inline-block border-b-2 p-3 border-transparent rounded-t-lg hover:border-gray-300 " >Home</NavLink>
              </li>
              <li className="mr-2">
                <NavLink to="/booklisting" style={NavLinkCss} className="inline-block border-b-2 p-3 border-transparent rounded-t-lg hover:border-gray-300 ">Book Listing</NavLink>
              </li>
             
              <li className="mr-2">
                <NavLink to="/checkout" style={NavLinkCss} className="inline-block border-b-2 p-3 border-transparent rounded-t-lg hover:border-gray-300 ">Checkout: {items.length}</NavLink>
              </li>
              
               <li className="mr-2">
                <NavLink to="/orders" style={NavLinkCss} className="inline-block border-b-2 p-3 border-transparent rounded-t-lg hover:border-gray-300 ">Order Book</NavLink>
              </li>
             
                
              <li className="mr-2">
                <NavLink to="/shippingCart" style={NavLinkCss} className="inline-block border-b-2 p-3 border-transparent rounded-t-lg hover:border-gray-300 "><BsCart3 /></NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar