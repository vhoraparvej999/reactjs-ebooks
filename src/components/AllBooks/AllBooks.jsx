import React from "react";
import Book1 from "../../assets/books/02.jpg";
import Book2 from "../../assets/books/01.jpg";
import Book3 from "../../assets/books/03.jpg";
import Book4 from "../../assets/books/04.jpg";
import Book5 from "../../assets/books/06.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
  {
    id: 1,
    img: Book1,
    title: "Discovery of India ",
    rating: 5.0,
    author: "Sunil Khilnani",
  },
  {
    id: 2,
    img: Book2,
    title: "India's Geography",
    rating: 4.5,
    author: "Sanjeev Sanayal",
  },
  {
    id: 3,
    img: Book3,
    title: "The Wealth of Nations",
    rating: 4.7,
    author: "Adam Smith",
  },
  {
    id: 4,
    img: Book4,
    title: "OLIVER TWIST",
    rating: 5.0,
    author: "Charles Dickens",
  },
  {
    id: 5,
    img: Book5,
    title: "Coding For Absolute Beginners ",
    rating: 5.0,
    author: "ORSON HENRY",
  },
];

const AllBooks = () => {
  return (
    <>
      <div className="py-10">
        <div className="container placeholder-gray-100">
          {/* header */}
          <div
            data-aos="slide-up"
            className="text-center mb-20 max-w-[400px] mx-auto"
          >
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Best Books
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              Voracious readers know that feeling of finishing a good book or
              stopping at a place in the story, and their heads feel a little
              disconnected from what’s happening around them. That’s what a
              bibliobibuli is.
            </p>
          </div>

          {/* Card */}
          <div data-aos="slide-up">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {BooksData.map((data) => (
                <div className="space-y-3">
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-semibold">{data.title}</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {data.author}
                    </p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer py-2 px-5 bg-primary text-white rounded-full">
                View All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
