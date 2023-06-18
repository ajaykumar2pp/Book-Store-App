import React from "react";
import { useParams } from "react-router-dom";

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
    author: "sagar",
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

const BookDetailPage = () => {
  const { id } = useParams();
  const book = booksData.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div>
      <h3 className="text-3xl font-bold dark:text-white text-center mt-3">
        Book Detail
      </h3>

      <div className="flex justify-center p-3 mt-5">
        <div
          key={book.id}
          className="p-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
        >
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Title : {book.title}
          </h5>

          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Author : {book.author}
          </h5>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Description :{book.description}
          </h5>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              Price: {book.price}$
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
