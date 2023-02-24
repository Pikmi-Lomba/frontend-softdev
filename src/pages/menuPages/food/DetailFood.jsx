import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import "./detailfood.scss";
import { MdLocationPin, MdCall, MdShare, MdFavorite } from "react-icons/md";
import image from "../../../assets/image/animal1.jpg";
import { CgMenuGridO } from "react-icons/cg";

const DetailFood = () => {
  const { id } = useParams();
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
            <div className="location">
              <MdLocationPin className="icon" />
            </div>
            <div className="location">
              <MdLocationPin className="icon" />
            </div>
            <div className="location">
              <MdLocationPin className="icon" />
            </div>
            <div className="location flex">
              <p className="subtitle2">Website</p>
              <MdLocationPin className="icon" />
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
      </div>
    </>
  );
};

export default DetailFood;
