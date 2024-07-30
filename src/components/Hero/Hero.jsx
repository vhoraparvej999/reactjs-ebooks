import React, { useState } from "react";
import Book1 from "../../assets/books/02.jpg";
import Book2 from "../../assets/books/01.jpg";
import Book3 from "../../assets/books/03.jpg";
import Vector from "../../assets/books/bg.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "His Life Will Forever Be Changed",
    description:
      "Jawaharlal Nehru wrote the book The Discovery of India, during his imprisonment at Ahmednagar fort for participating in the Quit India Movement (1942  1946).",
  },
  {
    id: 2,
    img: Book2,
    title: "The Incredible History of India's Geography",
    description:
      "This is an adaptation of Sanjeev Sanyal's Land of the Seven Rivers for a younger audience Maps and mountains, lions and tigers, rivers and oceans-all sorts of things you didn’t know about India’s geography.",
  },
  {
    id: 3,
    img: Book3,
    title: "The Wealth of Nations",
    description:
      "Discover the groundbreaking ideas and principles of modern economics in The Wealth of Nations by Adam Smith. This seminal work examines the wealth creation process, the division of labor, and the market forces that shape economies, laying the foundation for the study of capitalism",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [selectedImage, setSelectedImage] = useState(Book1);
  const [selectedTitle, setSelectedTitle] = useState(
    "His Life Will Forever Be Changed"
  );
  const [selectedDescription, setSelectedDescription] = useState(
    "Jawaharlal Nehru wrote the book The Discovery of India, during his imprisonment at Ahmednagar fort for participating in the Quit India Movement (1942  1946)."
  );

  const handleImageClick = (image, title, description) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setSelectedDescription(description);
  };

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <div
      className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text content section */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1
              data-aos="zoom-out"
              data-aos-duration="500"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              {selectedTitle}
            </h1>
            <p
              data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary text-right[10px] text-sm"
            >
              Buy Anonymous
            </p>
            <p
              data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className="text-sm"
            >
              {selectedDescription}
            </p>
            <div>
              <button
                onClick={handleOrderPopup}
                data-aos="zoom-in"
                className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 mt-4 rounded-full hover:scale-105 duration-200"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* image section */}
          <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            {/* main image */}
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-once="true"
                src={selectedImage}
                className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                alt="Selected Book"
              />
            </div>

            {/* other image list */}
            <div className="flex lg:bottom-[200px] lg:flex-col lg:top-1/2 lg:translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
              {ImageList.map((data) => (
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  key={data.id}
                  src={data.img}
                  className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200 cursor-pointer"
                  alt={data.title}
                  onClick={() =>
                    handleImageClick(data.img, data.title, data.description)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
