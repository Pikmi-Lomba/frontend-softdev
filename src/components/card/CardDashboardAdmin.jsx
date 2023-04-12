import "./card.scss";
import { MdPeople } from "react-icons/md";

const CardDashboardAdmin = () => {
  return (
    <div className="cardDashboardAdmin flex">
      <div className="cards flex">
        <div className="card flex radius-3">
          <div className="radiusIcon flex">
            <MdPeople className="icon" />
          </div>
          <p className="titleCard">Total Mitra</p>
          <div className="valueCard">20000</div>
        </div>
        <div className="card flex radius-3">
          <div className="radiusIcon flex">
            <MdPeople className="icon" />
          </div>
          <p className="titleCard">Total Events</p>
          <div className="valueCard">20000</div>
        </div>
        <div className="card flex radius-3">
          <div className="radiusIcon flex">
            <MdPeople className="icon" />
          </div>
          <p className="titleCard">Total Menu</p>
          <div className="valueCard">20000</div>
        </div>
        <div className="card flex radius-3">
          <div className="radiusIcon flex">
            <MdPeople className="icon" />
          </div>
          <p className="titleCard">Total Views</p>
          <div className="valueCard">20000</div>
        </div>
      </div>
    </div>
  );
};

export default CardDashboardAdmin;
