import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
const CardMenuList = ({ data }) => {
  return (
    <>
      <div className="cardMenuList radius-2" key={data.id_resto}>
        {/* <div className="iconMenu">
            <BsHeart className="icon" />
         </div> */}
        <Link to={`detail/${data.id_resto}`}>
          <div className="imageContent">
            <img
              className="radius-2"
              src={data.image_resto}
              alt="image_resto"
            />
          </div>
          <div className="titleCardMenu">{data.name_resto}</div>
          <div className="LocationCardMenu">
            <div className="contentLocation flex">
              <div className="pusing flex">
                <MdLocationPin className="icon2" />
                <div className="place">{data.location_resto}</div>
              </div>
              {/* <div className="range">500 m</div> */}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardMenuList;
