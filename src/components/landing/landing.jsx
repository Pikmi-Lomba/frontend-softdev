import "./landing.scss";
import { MenuFeature } from "./MenuFeature";
import exploreImg from "../../assets/image/back-landing.jpg";
import CardDestination from "../card/CardDestination";

const LandingComp = () => {
  return (
    <div className="landingComp">
      <div className="topWrapper flex">
        <div data-aos="fade-up-right" className="textAbout flex">
          <p className="title">Explore Tempat Destinasi </p>
          <p className="content">
            Pikirkan tentang berpergian kemana pun yang anda suka dan belajar
            tentang suatu dari yang baru kamu kunjungi. Bayangkan kegembiraan
            kamu saat berada di tempat baru...
          </p>
        </div>
        <div data-aos="fade-up-left" className="imgAbout">
          <img src={exploreImg} alt="explore" />
        </div>
      </div>

      <div className="FindDestination">
        <div data-aos="fade-down" className="topFindDestination flex">
          <p className="subTitle">JELAJAHI SEKARANG</p>
          <h2 className="title">Temukan Tempat Impian Kamu! </h2>
          <p className="subTitle2">Menemukan Destinasi Favorit Mu!</p>
        </div>
        <CardDestination />
      </div>

      <div className="featureWebsite">
        <h3 data-aos="fade-down" className="title">
          Beberapa Fitur untuk membantu <br />
          layanan perjalanan Anda!
        </h3>
        {MenuFeature.map((data, i) => (
          <div className="featureContent1 flex" key={i}>
            <img
              data-aos="fade-up-right"
              className="imageFeature"
              src={data.image}
              alt="feature"
            />
            <div data-aos="fade-up-left" className="contentFeature flex">
              <p className="titleFeature">{data.title}</p>
              <div className="line" />
              <p className="subFeature">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingComp;
