import React from "react";
import LibraryImg from "../../assets/images/library.jpg";
import { GrSecure } from "react-icons/gr";

const Banner = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            {/* image section */}
            <div>
              <img
                data-aos="zoom-in"
                src={LibraryImg}
                alt="Libraryimge"
                className="max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>

            {/* text content section */}
            <div
              data-aos="slide-up"
              className="flex flex-col justify-center gap-6 sm:pt-0"
            >
              <h1 className="text-3xl sm:text-4xl font-bold">
                Library at your fingertips
              </h1>
              <p className=" text-sm text-gray-500 tracking-wide leading-5">
                Libraries have a unique set of vocabulary to describe different
                resources and services they offer. Check out the list to the
                right to see commonly used words ...
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:text-black dar:bg-violet-400 cursor-pointer" />
                  <p>Quality Books</p>
                </div>
                <div className="flex items-center gap-4">
                  <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:text-black dar:bg-orange-400 cursor-pointer" />
                  <p>Fast Delivery</p>
                </div>
                <div className="flex items-center gap-4">
                  <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:text-black dar:bg-green-400 cursor-pointer" />
                  <p>Easy Payment Method</p>
                </div>
                <div className="flex items-center gap-4">
                  <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:text-black dar:bg-yellow-400 cursor-pointer" />
                  <p>Get Offers On Books</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
