import "./about.scss";
import { MenuFeature } from "../landing/MenuFeature";
import image from "../../assets/image/img-hero.jpg";
import FooterComp from "../footer/Footer";

const imageAbout = [
  {
    id: 1,
    image: "assets/images/event-about.jpg",
  },
  {
    id: 2,
    image: "assets/images/gunung.jpg",
  },
  {
    id: 3,
    image: "assets/images/komodo.jpg",
  },
  {
    id: 4,
    image: "assets/images/people-in-sea-about.jpg",
  },
];
const AboutComp = () => {
  return (
    <>
      <div className="aboutComp">
        <div className="topbarInfo">
          <h1 className="title">About Us</h1>
          <p className="subtitle">
            Kami Merencangan Tujuan Indah Setiap Akhir Pekan{" "}
          </p>
        </div>
        <div className="ContentAboutUs flex">
          <div data-aos="fade-up-right" className="leftContentAboutUs flex">
            <div className="imageContentAboutUs flex">
              {imageAbout.map((img) => (
                <div className="imageAbout" key={img.id}>
                  <img src={img.image} alt="Image About" />
                </div>
              ))}
              {/* <div className="imageAbout">
                <img src={image} alt="Image About" />
              </div>
              <div className="imageAbout">
                <img src={image} alt="Image About" />
              </div>
              <div className="imageAbout">
                <img src={image} alt="Image About" />
              </div> */}
            </div>
          </div>
          <div data-aos="fade-up-left" className="rightContentAboutUs flex">
            <div className="textContentAboutUs flex">
              <div className="fieldAboutUs">
                Menemukan tempat yang sehat dan indah adalah tujuan utama kami.
                Kami Menganggap kesuksesan kami untuk menawarkan kepada pengguna
                kami, dapat menemukan tempat destinasi terdekat dari lokasi anda
                berada sekarang
              </div>
              <div className="listExpe flex">
                <div className="cardExpe">
                  <span>3.0K+</span>
                  <p>Our explore</p>
                </div>
                <div className="cardExpe">
                  <span>1.0K+</span>
                  <p>Destination</p>
                </div>
                <div className="cardExpe">
                  <span>1+</span>
                  <p>Year Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default AboutComp;
