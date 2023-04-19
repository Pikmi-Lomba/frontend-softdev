import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import axios from "axios";
const CardMenuList = ({ nama, lokasi, gambar, id }) => {
  return (
    <>
      <div className="cardMenuList radius-2" key={id}>
        {/* <div className="iconMenu" onClick={handleLike}>
          <BsHeart className="icon" />
        </div> */}

        <div className="imageContent">
          <img className="radius-2" src={gambar} alt="image_menu_list" />
        </div>
        <div className="titleCardMenu">{nama}</div>
        <div className="LocationCardMenu">
          <div className="contentLocation flex">
            <div className="pusing flex">
              <MdLocationPin className="icon2" />
              <div className="place">{lokasi}</div>
            </div>
            {/* <div className="range">500 m</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMenuList;
