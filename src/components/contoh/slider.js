import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { GiCommercialAirplane } from "react-icons/gi";

import { RxDotFilled } from "react-icons/rx";
import "./exam.css";

function ExamSlider() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="lolo">
      <div className="containerExam">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="latihan"
        ></div>
        {/* Left Arrow */}
        <div className="kiri">
          <BsChevronCompactLeft onClick={prevSlide} size={10} />
        </div>
        {/* Right Arrow */}
        <div className="kanan">
          <BsChevronCompactRight onClick={nextSlide} size={10} />
        </div>
        <div className="cards">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="card"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExamSlider;
