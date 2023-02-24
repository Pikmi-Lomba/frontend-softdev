import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { GiCommercialAirplane } from "react-icons/gi";

import "./asu.css";
// import image1 from "../../assets/image/animal-001.jpg";

function AsuPage() {
  const slides = [
    {
      img: "https://tse4.mm.bing.net/th?id=OIP.NDDcBnBo_xdqeyqcLmsrUAHaD4&pid=Api&P=0",
    },
    {
      img: "https://tse4.mm.bing.net/th?id=OIP.k_GULNSxm4fGy0SfX3djEgHaEK&pid=Api&P=0",
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
    <div className="containerww">
      <div className="cards">
        <div className="card">
          <div className="imageContent">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
              className="popo"
            ></div>
            <GiCommercialAirplane className="icon222" />

            <BsChevronCompactLeft onClick={prevSlide} className="leftIcon" />
            <BsChevronCompactRight onClick={nextSlide} className="rightIcon" />
            <div className="cardsaa">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="cardaa"
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsuPage;
