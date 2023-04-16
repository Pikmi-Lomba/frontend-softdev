import "./tripcomp.scss";
import { MdLocationPin } from "react-icons/md";
import { useState, useEffect } from "react";
import { AxiosInstanceUser } from "../../../apis/Api";
import CardMenuList from "../../card/CardMenuList";
import NotFoundMenu from "../../../pages/notFound/NotFoundMenu";
import { Link } from "react-router-dom";
import Loading from "../../../utils/loading";

const TripComp = () => {
  const [dataTrip, setDatatrip] = useState([]);
  const [dataTrip2, setDatatrip2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState();
  const [limitData, setLimitData] = useState(8);

  useEffect(() => {
    AxiosInstanceUser.get(`/trip`)
      .then((res) => {
        console.log(res.data.menu_wisata);
        setDatatrip(res.data.menu_wisata.slice(0, limitData));
        setDatatrip2(res.data.menu_wisata);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoading, limitData]);

  const handleSearch = (e) => {
    const getSearch = e.target.value;
    setQuery(getSearch);
    if (getSearch !== "") {
      const searchData = dataTrip2.filter((item) =>
        item.city_trip.toLowerCase().includes(getSearch)
      );
      setDatatrip(searchData);
    } else if (getSearch === "") {
      setDatatrip(dataTrip2.slice(0, limitData));
    }
    setIsLoading(false);
  };

  const LoadMore = () => {
    setLimitData(limitData + 4);
  };

  return (
    <>
      <section className="tripComp2">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="contentMenu flex">
              <div className="infoMenu">
                <div className="subTitleMenu">Menu Wisata</div>
              </div>
              <div className="flex LocationCard radius-2">
                <MdLocationPin className="icon" />
                <input
                  value={query}
                  onChange={(e) => handleSearch(e)}
                  type="text"
                  placeholder="Cari tempat tujuan"
                />
              </div>
            </div>
            {dataTrip.length === 0 ? (
              <div className="gkdulu">
                <NotFoundMenu />
              </div>
            ) : (
              <div className="cardsMenu flex">
                {dataTrip.map((data, i) => (
                  <Link to={`detail/${data.id_trip}`} key={i}>
                    <CardMenuList
                      nama={data.name_trip}
                      id={data.id_trip}
                      lokasi={data.location_trip}
                      gambar={data.image_trip}
                    />
                  </Link>
                ))}
              </div>
            )}
            {dataTrip.length === 0 ? (
              <p style={{ display: "none" }}>hidden</p>
            ) : (
              <div className="loadMore">
                {limitData <= dataTrip.length ? (
                  <button className="btn radius" onClick={LoadMore}>
                    Memuat lagi
                  </button>
                ) : (
                  <button style={{ display: "none" }}>halo</button>
                )}
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default TripComp;
