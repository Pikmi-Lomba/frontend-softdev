import "./about.scss";
import { MenuFeature } from "../landing/MenuFeature";

const AboutComp = () => {
  return (
    <>
      <div className="aboutComp">
        <div className="topbarInfo">
          <h1 className="title">About Us</h1>
          <p className="subtitle">Lorem ipsum dolor sit amet.</p>
        </div>
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
    </>
  );
};

export default AboutComp;
