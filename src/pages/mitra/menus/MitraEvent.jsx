import { Link } from "react-router-dom";
import MitraSidebar from "../../../components/sidebar/MitraSidebar";
import "./mitraevent.scss";

const MitraEvent = () => {
  return (
    <MitraSidebar>
      <div className="topMitraEvent flex">
        <h1 className="titlePage">Mitra Page</h1>
        <Link to={`/dashboard-mitra/events/create`} className="btn radius-2">
          Tambah Event
        </Link>
      </div>
      <div className="bottomMitraEvent">
        <div className="cardsMenu flex">
          {/* <Link key={data.id} to={`detail/${data.id}`}> */}
          <div className="cardMenu">
            <div className="imageContent">
              <img
                src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                alt=""
              />
            </div>
            <div className="Tampung">
              <div className="KatEvent radius">Music</div>
              <h1 className="titleCardMenu">YOASOBI, Atarashii Gakko!</h1>
              <p className="subTitleCardMenu">oleh: manusia nolep</p>
              <p className="descCardMenu">
                The official Twitter account for music company 88rising
                announced last month that pop duo YOASOBI and girl music group
                Atarashii Gakko! will perform at the Head in the Clouds music
                festival in Jakarta in December.
              </p>

              <div className="register">Tgl Daftar: 28 Januari 2023</div>
            </div>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </MitraSidebar>
  );
};

export default MitraEvent;
