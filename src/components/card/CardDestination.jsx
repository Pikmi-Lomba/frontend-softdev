import "./card.scss";

import image from "../../assets/image/img-hero.jpg";
import { MdLocationPin } from "react-icons/md";

const CardDestination = () => {
  const berhitung = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="cardDestination flex">
      {berhitung.map((data) => (
        <div className="card" key={data}>
          <img src={image} alt="favorit_destinasi.png" />
          <div className="contentDestination flex">
            <div className="subContentDestination">
              <div className="titleDestination">Komodo Island</div>
              <div className="locationDestination flex">
                <MdLocationPin className="icon" />
                <p className="nameLocationDestination">Indonesia</p>
              </div>
            </div>
            <div className="rating">4.7</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDestination;
