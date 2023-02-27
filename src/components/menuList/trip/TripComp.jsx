import "./tripcomp.scss";

import { MdLocationPin } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { useState } from "react";
import { RxArrowLeft, RxArrowRight, RxDotFilled } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const TripComp = () => {
  const berhitung = [
    { nama: "Marcell", id: 1 },
    { nama: "sakura", id: 2 },
    { nama: "sasuke", id: 3 },
    { nama: "kakashi", id: 4 },
    { nama: "itachi", id: 5 },
    { nama: "hinata", id: 6 },
  ];
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

  // const NextCard = (props) => {
  //   const [className, style, onClick] = props
  //   className= {className}
  //   style ={{"display": "block"}}

  // }

  return (
    <>
      <section className="tripComp">
        <h1 className="titlePage">Pencarian Wisata di daerah Bogor</h1>
        <div className="contentMenu flex">
          <div className="infoMenu">
            <div className="subTitleMenu">Wisata</div>
            <p className="numberPlaces">24 Tempat</p>
          </div>
          {/* <div className="filterMenu">
            <button className="btn">Sort</button>
          </div> */}
          <div className="filterMenu">
            <select className="btn2 radius-2">
              <option value="all" selected>
                Sort
              </option>
              <option value="nama">Nama</option>
              <option value="terpopuler">Terpopuler</option>
              <option value="jarak">Jarak</option>
            </select>
          </div>
        </div>
        <div className="cardSliderMenu">
          {berhitung.map((data, i) => (
            <div className="cardMenu" key={i}>
              <div className="imageContent">
                <NavLink to={`detail/${data.nama}`}>
                  <div
                    style={{
                      backgroundImage: `url(${slides[currentIndex].img})`,
                    }}
                    className="imgMenu radius-2"
                  ></div>
                </NavLink>

                <BsHeart className="icon" />

                <RxArrowLeft onClick={prevSlide} className="leftIcon" />
                <RxArrowRight onClick={nextSlide} className="rightIcon" />
                <div className="dots">
                  {slides.map((slide, slideIndex) => (
                    <div
                      key={slideIndex}
                      onClick={() => goToSlide(slideIndex)}
                      className="dot"
                    >
                      <RxDotFilled />
                    </div>
                  ))}
                </div>
              </div>
              <NavLink to={`detail/${data.nama}`}>
                <div className="LocationCardMenu">
                  <div className="titleCardMenu">
                    Taman Sakura Kebun Raya Cibodas
                  </div>
                  <div className="contentLocation flex">
                    <div className="pusing flex">
                      <MdLocationPin className="icon" />

                      <div className="place"> Jl. Tama</div>
                    </div>

                    <div className="range"> Berjarak 500 meter </div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="loadMore">
          <button className="btn radius">Load More</button>
        </div>
      </section>
    </>
  );
};

export default TripComp;
