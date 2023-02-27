import "./footer.scss";
import {
  MdFastfood,
  MdTerrain,
  MdHotel,
  MdFestival,
  MdFlight,
  MdLocalGasStation,
  MdSchool,
  MdFacebook,
} from "react-icons/md";

import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiFillGoogleCircle,
} from "react-icons/ai";
const FooterComp = () => {
  return (
    <div className="FooterContainer">
      <div className="footer">
        {/* ===Logo=== */}
        <div className="imageLogo">
          <h1 className="logo">Logo</h1>
        </div>
        <div className="line"></div>
        {/* ===Menu Footer=== */}
        <div className="menuFooter">
          <div className="tentangKami">
            <p className="title">Explore</p>
            <ul>
              <div className="menuExplore flex">
                <MdFastfood className="icon" />
                <p className="name">Kuliner</p>
              </div>
              <div className="menuExplore flex">
                <MdTerrain className="icon" />
                <p className="name">Wisata</p>
              </div>
              <div className="menuExplore flex">
                <MdHotel className="icon" />
                <p className="name">Hotel</p>
              </div>
              <div className="menuExplore flex">
                <MdFestival className="icon" />
                <p className="name">Event</p>
              </div>
            </ul>
          </div>
          <div className="contact">
            <p className="title">Kontak</p>
            <ul>
              <div className="menuKontak flex">
                <MdFestival className="icon" />
                <p className="name">+62821 - 4182 - 0186</p>
              </div>
              <div className="menuKontak flex">
                <MdFestival className="icon" />
                <p className="name">+62821 - 4182 - 0186</p>
              </div>
            </ul>
          </div>
          <div className="sosial">
            <p className="title">Sosial</p>

            <div className="MenuSosial">
              <MdFacebook className="icon" size={36} />

              <AiFillTwitterCircle className="icon" size={36} />
              <AiOutlineInstagram className="icon" size={36} />
              <AiFillGoogleCircle className="icon" size={36} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
