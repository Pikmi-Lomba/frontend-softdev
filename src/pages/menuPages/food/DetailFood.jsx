import { Link, useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import "./detailfood.scss";
import { MdLocationPin, MdCall, MdShare, MdFavorite } from "react-icons/md";
import image from "../../../assets/image/animal1.jpg";
import { CgMenuGridO } from "react-icons/cg";

const DetailFood = () => {
  const { id } = useParams();
  const berhitung = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <Navbar />
      <div className="detailFood">
        <div className="topbar flex">
          <div className="leftTopbar">
            <div className="title">The Harvest Cake Depok</div>
            <div className="location flex">
              <MdLocationPin className="icon" />
              <p className="subtitle">
                Margonda Raya No.56, RT.3/RW.11, Depok, Kec. Pancoran Mas, Kota
                Depok, Jawa Barat 16431
              </p>
            </div>
            <div className="telepon flex">
              <MdCall className="icon" />
              <p className="telpContent">0263 - 2953070</p>
            </div>
          </div>
          <div className="rightTopbar flex">
            <div className="location radius-4">
              <MdLocationPin className="icon" />
            </div>
            <div className="location radius-4">
              <MdFavorite className="icon" />
            </div>
            <div className="location radius-4">
              <MdShare className="icon" />
            </div>
            <div className="location flex radius-4">
              <MdLocationPin className="icon" />
              <p className="subtitle2">Website</p>
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
                <Link to={`image`} className="Content">
                  Tampilkan semua foto
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="Menu">
          <div className="topBar flex">
            <div className="title">Menu Kuliner </div>
            <Link to={`food_menu`} className="filterMenu radius btn">
              Lihat Detail
            </Link>
          </div>
          <div className="cardsMenu flex">
            {berhitung.map((data) => (
              <div className="cardMenu ">
                <img className="image radius-3" src={image} alt=""></img>
                <p className="nameCard">Chocolate Tiramisu</p>
                <p className="priceMenu">Harga Mulai Dari Rp. 215.000</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailFood;
