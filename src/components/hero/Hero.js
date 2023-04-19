import { useEffect } from "react";
// Style CSS
import "./hero.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Icons
import { MdLocationPin } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { MenuList } from "./MenuList";

// import Aos from "aos";
// import "aos/dist/aos.css";

const HeroComp = () => {
  const activeLink = "activeHeroMenu cardItem";
  const normalLink = "listMenu cardItem";
  // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  //   <BsArrowLeftCircle {...props} className="icon44" />
  // );

  // const SlickArrowRight = ({ currentSlide, slideCount, style, ...props }) => (
  //   <BsArrowRightCircle {...props} className="icon55" />
  // );

  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    // prevArrow: <SlickArrowLeft />,
    // nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
            <h1 data-aos="fade-down" className="title">
              Unlock Your <br /> Travel Dreams With Us!!!
            </h1>
            <p data-aos="fade-down" className="subTitle">
              Discover the world one adventure at a time <br /> Life is short
              book the trip
            </p>
          </div>

          <div className="homeCardContainer flex ">
            <div className="homeCard ">
              <Slider {...settings}>
                {MenuList.map((list, index) => (
                  <NavLink
                    to={list.path}
                    key={index}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <div className="cardItem flex">
                      <div className="icon">{list.logo}</div>
                      <p className="nameCardItem">{list.name_menu}</p>
                    </div>
                  </NavLink>
                ))}
              </Slider>
            </div>
            {/* <div className="flex LocationCard radius-2">
              <MdLocationPin className="icon" />
              <input type="text" placeholder="Bogor, Indonesia" />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroComp;
