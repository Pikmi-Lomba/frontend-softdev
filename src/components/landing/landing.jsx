import "./landing.scss";
import { MenuFeature } from "./MenuFeature";
import Slider from "react-slick";
import image from "../../assets/image/img-hero.jpg";

// Icons
import { FaLocationArrow } from "react-icons/fa";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const LandingComp = () => {
  const berhitung = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const tiga = [1, 2, 3];
  // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  //   <BsArrowLeftCircle {...props} className="PopularSlick" />
  // );

  // const SlickArrowRight = ({ currentSlide, slideCount, style, ...props }) => (
  //   <BsArrowRightCircle
  //     {...props}
  //     className="PopularSlick"
  //     style={{ color: "red" }}
  //   />
  // );

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    // prevArrow: <SlickArrowLeft />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
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
    <div className="landingComp">
      <div className="topWrapper flex">
        <div className="textAbout flex">
          <p className="title">Explore Tempat Destinasi </p>
          <p className="content">
            Pikirkan tentang berpergian kemana pun yang anda suka dan belajar
            tentang suatu dari yang baru kamu kunjungi. Bayangkan kegembiraan
            kamu saat berada di tempat baru
          </p>
        </div>
        <div className="imgAbout">
          <img src={image} alt="gambar" />
        </div>
      </div>

      <div className="popularDestination">
        <h1 className="title">Tempat Wisata Popular</h1>
        <div className="popularTripCards">
          <Slider {...settings}>
            {berhitung.map((data) => (
              <div className="popularTripCard ">
                <div className="imagePopular">
                  <img src={image} alt="" />
                </div>
                <div className="contentPopular">
                  <h1 className="nameDestination">Kepulauan Raja Ampat</h1>
                  <div className="locationPopular flex">
                    <FaLocationArrow className="icon" />
                    <div className="locDestination">
                      Waigeo Barat, Papua Barat
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="featureWebsite">
        <h3 className="title">
          Beberapa Fitur untuk membantu layanan perjalanan Anda!
        </h3>
        {MenuFeature.map((data) => (
          <div className="featureContent1 flex">
            <div className="imageFeature">{data.image}</div>
            <div className="contentFeature flex">
              <p className="titleFeature">{data.title}</p>
              <p className="paraFeature">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingComp;
