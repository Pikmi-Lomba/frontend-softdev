import "./foodComp.scss";
import image from "../../../assets/image/img-hero.jpg";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const FoodComp = () => {
  const berhitung = [
    {
      nama: "marcell",
      id: 1,
    },
    {
      nama: "marcell",
      id: 2,
    },
    {
      nama: "marcell",
      id: 3,
    },
    {
      nama: "marcell",
      id: 4,
    },
    {
      nama: "marcell",
      id: 5,
    },
  ];
  return (
    <>
      <section className="foodComp">
        <h1 className="title">Pencarian Kuliner di Daerah, Depok</h1>
        <div className="contentMenu flex">
          <div className="infoMenu">
            <div className="subTitleMenu">Menu Kuliner</div>
            <p className="numberPlaces">24 Tempat</p>
          </div>
          {/* <div className="filterMenu">
            <button className="btn">Sort</button>
          </div> */}
          <div className="filterMenu">
            <select className="btn2 radius-2">
              <option value="all" selected>
                Sort
              </option>
              <option value="nama">Nama</option>
              <option value="terpopuler">Terpopuler</option>
              <option value="jarak">Jarak</option>
            </select>
          </div>
        </div>
        <div className="cardsMenu flex">
          {berhitung.map((data) => (
            <div className="cardMenu" key={data}>
              <GiCommercialAirplane className="icon" />
              <Link to={`detail/${data.id}`}>
                <div className="imageContent">
                  <img className="radius-2" src={image} alt="" />
                </div>
                <div className="titleCardMenu">The Harvest Cakes Depok</div>
                <div className="LocationCardMenu">
                  <div className="contentLocation flex">
                    <div className="pusing flex">
                      <MdLocationPin className="icon2" />

                      <div className="place">Jl. Margonda Raya No. 295</div>
                    </div>

                    <div className="range">500 m</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="loadMore">
          <button className="btn radius">Load More</button>
        </div>
      </section>
    </>
  );
};

export default FoodComp;
