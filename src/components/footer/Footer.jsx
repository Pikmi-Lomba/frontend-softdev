import "./footer.scss";
import {
  MdFastfood,
  MdTerrain,
  MdHotel,
  MdFestival,
  MdFacebook,
  MdLocationOn,
  MdEmail,
} from "react-icons/md";

import { BsTelephoneFill } from "react-icons/bs";

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
        <div className="menuFooter flex">
          <div className="menus flex">
            <p className="title">Menu</p>
            <ul className="flex">
              <div className="menu flex">
                <p className="name">Home</p>
              </div>
              <div className="menu flex">
                <p className="name">About Us</p>
              </div>
              <div className="menu flex">
                <p className="name">Contact Us</p>
              </div>
            </ul>
          </div>
          <div className="tentangKami flex">
            <p className="title">Explore</p>
            <ul>
              <div className="menu flex">
                <MdFastfood className="icon" />
                <p className="name">Kuliner</p>
              </div>
              <div className="menu flex">
                <MdTerrain className="icon" />
                <p className="name">Wisata</p>
              </div>
              <div className="menu flex">
                <MdHotel className="icon" />
                <p className="name">Hotel</p>
              </div>
              <div className="menu flex">
                <MdFestival className="icon" />
                <p className="name">Event</p>
              </div>
            </ul>
          </div>
          <div className="contact flex">
            <p className="title">Kontak</p>
            <ul>
              <div className="menu flex">
                <BsTelephoneFill className="icon" />
                <p className="name">+62821-4182-0186</p>
              </div>
              <div className="menu flex">
                <MdEmail className="icon" />
                <p className="name">Travel@gmail.com</p>
              </div>
              <div className="menu flex">
                <MdLocationOn className="icon" />
                <p className="name">Depok, Jawa Barat, Indonesia</p>
              </div>
            </ul>
          </div>
          <div className="sosial flex">
            <p className="title">Follow Us</p>

            <div className="MenuSosial flex">
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
