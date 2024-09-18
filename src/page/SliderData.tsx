import React, { useState } from "react";
import Group from "../assets/images/Group.png";

const sliderData = [
  { id: 1, title: "Фасадна універсальна" },
  { id: 2, title: "Плоска квадратна" },
  { id: 3, title: "Хрестоподібна з підшипником" },
  { id: 4, title: "Гвинтова (Бур)" },
  { id: 5, title: "Хрестоподібна (Люкс)" },
];

const SliderData = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex flex-col items-center w-full max-w-screen-lg mx-auto overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex - 1) * (100 / 3)}%)`,
          }}
        >
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className={`flex-shrink-0 flex items-center justify-center transition-transform duration-500 ${
                index === currentIndex
                  ? "transform scale-110 z-10 opacity-100"
                  : "transform scale-90 z-0 opacity-60"
              }`}
              style={{ width: "33.333%" }}
            >
              <div className="text-center flex flex-col items-center justify-center w-full h-full">
                <img
                  src={Group}
                  alt="Static"
                  className={`object-cover transition-transform duration-500 ${
                    index === currentIndex ? "w-3/4" : "w-1/2"
                  }`}
                  style={{ maxWidth: "100%", maxHeight: "80%" }}
                />
                <h1 className="text-sm md:text-md lg:text-2xl font-roboto text-black mt-4">
                  {slide.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-4 flex justify-between px-4">
        <button
          onClick={handlePrev}
          className="w-12 h-12 flex items-center justify-center bg-lime-400 text-white rounded-full hover:bg-green-700"
        >
          &lt;
        </button>

        <button
          onClick={handleNext}
          className="w-12 h-12 flex items-center justify-center bg-lime-400 text-white rounded-full hover:bg-green-700"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SliderData;
