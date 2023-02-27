import "./detailhotel.scss";
import image from "../../../assets/image/animal1.jpg";
import { CgMenuGridO } from "react-icons/cg";
import hotel from "../../../assets/image/hotel1.png";
import { Link } from "react-router-dom";
// import "./new.css";

// Icon
import { MdLocationPin, MdCall, MdShare, MdFavorite } from "react-icons/md";
import Navbar from "../../../components/navbar/Navbar";

const DetailHotel = () => {
  return (
    <>
      <Navbar />
      <div className="detailHotel">
        <div className="topbar flex">
          <div className="leftContent">
            <h1 className="title">Hotel Bumi Wiyata</h1>
            <div className="location flex">
              <MdLocationPin className="icon" />
              <p className="locationContent">
                Jl. Margonda Raya No.281, Kemiri Muka, Kecamatan Beji, Kota
                Depok, Jawa Barat 16423
              </p>
            </div>
            <div className="telepon flex">
              <MdCall className="icon" />
              <p className="telpContent">0263 - 2953070</p>
            </div>
          </div>
          <div className="rightContent flex">
            <h1 className="title">
              <span>Mulai dari</span> Rp. 780.000/
              <span className="malam">malam</span>
            </h1>
            <div className="contentShare flex">
              <div className="locationDiv radius-4">
                <MdLocationPin className="icon" />
              </div>
              <div className="locationDiv radius-4">
                <MdFavorite className="icon" />
              </div>
              <div className="locationDiv radius-4">
                <MdShare className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="bodyPhoto">
          <div className="gridGallery">
            <div className="gridItem">
              <img src={image} alt="" />
            </div>
            <div className="gridItem">
              <img src={image} alt="" />
            </div>
            <div className="gridItem">
              <div className="getAllPhoto flex radius-2">
                <CgMenuGridO className="icon" />
                <Link to={`image`} className="Content">
                  Tampilkan semua foto
                </Link>
              </div>
              <img src={image} alt="" />
            </div>
            <div className="gridItem">
              <img src={image} alt="" />
            </div>
            <div className="gridItem">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="contentsDetail">
          <div className="overview">
            <h1 className="title">Overview</h1>
            <p className="content">
              Hotel Bumi Wiyata is the perfect choice for your business
              activity, gathering, wedding, outbound and family. With the
              concept of the greatest hotel for recreational meeting surrounding
              with traditional nature, various facilities and warm hospitality
              will makes all your event become a memorable one.
            </p>
          </div>
          <hr />
          <div className="fasilitas">
            <h1 className="title">Fasilitas</h1>
            <div className="content flex">
              <p>Free Wifi</p>
              <p>Free Wifi</p>
              <p>Free Wifi</p>
              <p>Free Wifi</p>
              <p>Free Wifi</p>
            </div>
          </div>
          <hr />
          <div className="price ">
            <h1 className="title">Harga Banding Booking Hotel</h1>
            <div className="content horizontal-content">
              <div className="cardPrice radius-2 flex">
                <img src={hotel} alt="hotelLogo.png" />
                <p className="priceHotel">Rp. 580,000</p>
              </div>
              <div className="cardPrice radius-2 flex">
                <img src={hotel} alt="hotelLogo.png" />
                <p className="priceHotel">Rp. 580,000</p>
              </div>
              <div className="cardPrice radius-2 flex">
                <img src={hotel} alt="hotelLogo.png" />
                <p className="priceHotel">Rp. 580,000</p>
              </div>
              <div className="cardPrice radius-2 flex">
                <img src={hotel} alt="hotelLogo.png" />
                <p className="priceHotel">Rp. 580,000</p>
              </div>
              <div className="cardPrice radius-2 flex">
                <img src={hotel} alt="hotelLogo.png" />
                <p className="priceHotel">Rp. 580,000</p>
              </div>
              <div className="cardPrice radius-2 flex">
                <img src={hotel} alt="hotelLogo.png" />
                <p className="priceHotel">Rp. 580,000</p>
              </div>
              <div className="cardPrice radius-2 flex">
                <img src={hotel} alt="hotelLogo.png" />
                <p className="priceHotel">Rp. 580,000</p>
              </div>
            </div>
          </div>
          {/* <div className="horizontal-content">

          </div> */}
          <hr />
          <div className="location">
            <h1 className="title">Lokasi</h1>
            <div className="maps"></div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default DetailHotel;
