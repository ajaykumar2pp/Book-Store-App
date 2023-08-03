import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart ,removeFromCart} from "../redux/actions/cartActions";
import  Footer from '../components/Footer'

const booksData = [
  {
    id: 1,
    title: "Book 1",
    author: "Ajay",
    description: "Coding Ninjas",
    price: 10,
  },
  {
    id: 2,
    title: "Book 2",
    author: "Vijay",
    description: "Ws CubeTech",
    price: 20,
  },
  {
    id: 3,
    title: "Book 3",
    author: "Sagar",
    description: "Google Ninja",
    price: 30,
  },
  {
    id: 4,
    title: "Book 4",
    author: "Saloni",
    description: "Coding Ninjas",
    price: 40,
  },
  {
    id: 5,
    title: "Book 5",
    author: "Shobhit",
    description: "Ws CubeTech",
    price: 50,
  },
  {
    id: 6,
    title: "Book 6",
    author: "Tanu",
    description: "Google Ninja",
    price: 60,
  },
  {
    id: 7,
    title: "Book 7",
    author: "Shivani",
    description: "Coding Ninjas",
    price: 70,
  },
  {
    id: 8,
    title: "Book 8",
    author: "Puja",
    description: "Ws CubeTech",
    price: 80,
  },
  {
    id: 9,
    title: "Book 9",
    author: "Mayur",
    description: "Google Ninja",
    price: 90,
  },
];

const BookListingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredBooks = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      book.author.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };
  const handleRemoveFromCart = (book) => {
    dispatch(removeFromCart(book));
  };
  return (
    <div>
      <h3 className="text-3xl font-bold dark:text-white text-center mt-3">
        Book Listing
      </h3>

      <div className="mb-5 flex justify-center">
        <input
          type="text"
          className="w-96  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          onChange={handleSearch}
        />
        <input
          type="text"
          className="w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Filter by author"
          onChange={handleFilter}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-3 mt-5">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="p-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
          >
            <Link to={`/book/${book.id}`}>
              <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white bg-red-300 p-1 rounded-1">
                View : {book.title}
              </span>
            </Link>

            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Author : {book.author}
            </h5>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                Price: {book.price}$
              </span>
              <button
                onClick={() => handleAddToCart(book)}
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Add to Cart
              </button><br />
              <button
                onClick={() => handleRemoveFromCart(book.id)}
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Remove Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default BookListingPage;
