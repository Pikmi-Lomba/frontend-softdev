import "./detailtrip.scss";
import image from "../../../assets/image/animal4.jpg";
import { CgMenuGridO } from "react-icons/cg";
import hotel from "../../../assets/image/hotel1.png";
import { Link } from "react-router-dom";
// Icon
import { MdLocationPin, MdCall, MdShare, MdFavorite } from "react-icons/md";
import Navbar from "../../../components/navbar/Navbar";

const DetailTrip = () => {
  return (
    <>
      <Navbar />
      <div className="detailTrip">
        <div className="topContentMenu flex">
          <div className="leftTopbar">
            <div className="title">Taman Sakura Kebun Raya Cibodas</div>
            <div className="location flex">
              <MdLocationPin className="icon" size={20} />
              <p className="subtitle">
                Jl. Taman Cibodas, Sindangjaya, Kec. Cipanas, Kabupaten Cianjur,
                Jawa Barat 43253
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
          </div>
        </div>
        {/* <hr /> */}
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
        <div className="contentsDetail flex">
          <div className="leftContent">
            <div className="title">Taman Sakura Kebun Raya Cibodas</div>
            <div className="cardInfo flex">
              <div className="jamOperasi">
                <h3 className="subTitle">Jam Operasi</h3>
                <p className="content">Senin - Jumat: 08.00 - 16.00</p>
                <p className="content">
                  Sabtu - Minggu, Libur Nasional: 08.00 - 16.00
                </p>
              </div>
              <div className="ticket">
                <h3 className="subTitle">Harga Tiket</h3>
                <div className="content">Rp15.500-Rp25.500</div>
              </div>
            </div>
            <div className="cardContent">
              <p className="textDetail">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                qui laudantium soluta modi, debitis ducimus assumenda quaerat
                alias non minus consequatur beatae rem et obcaecati earum
                corporis explicabo vero. Sint eius, cupiditate quos dolore enim
                qui aperiam vero consequatur eos, dolorum alias voluptate?
                Eveniet laudantium nobis exercitationem accusamus, sequi quas.
              </p>
            </div>
          </div>
          <div className="rightContent">
            <button className="linkLoc radius-3">full view</button>
            <img src={image} alt="asd" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailTrip;
