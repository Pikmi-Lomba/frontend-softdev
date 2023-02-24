import "./about.scss";
import image from "../../assets/image/img-hero.jpg";

const About = () => {
  return (
    <>
      <div className="aboutComp flex">
        <div className="textAbout flex">
          <h1 className="title">Explore Tempat Destinasi </h1>
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="imgAbout">
          <img src={image} alt="gambar" />
        </div>
      </div>
    </>
  );
};

export default About;
