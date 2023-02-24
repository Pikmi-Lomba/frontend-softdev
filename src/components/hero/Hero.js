import "./hero.scss";
import { MdLocationPin } from "react-icons/md";

import Slider from "react-slick";

import { Link, NavLink } from "react-router-dom";

import { MenuList } from "./MenuList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useState } from "react";

const HeroComp = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <BsArrowLeftCircle {...props} className="icon44" />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, style, ...props }) => (
    <BsArrowRightCircle {...props} className="icon55" />
  );
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="home radius-5">
        <div className="setContainer container">
          <div className="homeText">
            <h1 className="title">Plan Your With Travel DOT</h1>
            <p className="subTitle">
              Travel to your ciry with respectful of the environment
            </p>
          </div>

          <div className="homeCardContainer flex ">
            <div className="homeCard ">
              <Slider {...settings}>
                {MenuList.map((list, index) => (
                  <NavLink to={list.path} key={index} exact>
                    <div className="cardItem flex">
                      <div className="icon">{list.logo}</div>
                      <p className="nameCardItem">{list.name_menu}</p>
                    </div>
                  </NavLink>
                ))}
              </Slider>
            </div>
            <div className="flex LocationCard radius-2">
              <MdLocationPin className="icon" />
              <input type="text" placeholder="Bogor, Indonesia" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroComp;
