import { useState } from "react";
import imagem1 from "../assets/img2-global.webp";
import imagem2 from "../assets/home-site-global.webp";
import imagem3 from "../assets/img-global.jpg";

const SlideShow = () => {
  const slides = [
    { id: 1, image: imagem1},
    { id: 2, image: imagem2},
    { id: 3, image: imagem3},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides */}
      <div className="absolute inset-0 flex transition-transform duration-700">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute left-10 bottom-10 bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-200 z-20"
      >
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-10 bottom-10 bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-200 z-20"
      >
        {">"}
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default SlideShow