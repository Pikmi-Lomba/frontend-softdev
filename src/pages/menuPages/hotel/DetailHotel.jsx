import "./detailhotel.scss";
import image from "../../../assets/image/animal1.jpg";
import { CgMenuGridO } from "react-icons/cg";
import hotel from "../../../assets/image/hotel1.png";

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
        <div className="imageDetail">
          <img src={image} className="satu" />

          <div className="rightImages">
            <div className="rightImage flex">
              <img src={image} className="dua" />
              <img src={image} className="tiga" />
            </div>
            <div className="rightBottomImage">
              <img src={image} className="empat" />
              <div className="getAllPhoto flex radius-2">
                <CgMenuGridO className="icon" />
                <p className="Content">Tampilkan semua foto</p>
              </div>
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
          <div className="price">
            <h1 className="title">Harga Banding Booking Hotel</h1>
            <div className="content flex">
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
          <hr />
          <div className="location">
            <h1 className="title">Lokasi</h1>
            <div className="maps">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.118473088656!2d106.8272174143421!3d-6.378704864168379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec0869e31b4f%3A0xaa40278d69385917!2sHotel%20Bumi%20Wiyata!5e0!3m2!1sid!2sid!4v1676391249990!5m2!1sid!2sid"
                width="400"
                height="300"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default DetailHotel;
