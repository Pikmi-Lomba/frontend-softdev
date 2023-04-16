import "./hotelcomp.scss";
import { MdLocationPin } from "react-icons/md";
import { useEffect, useState } from "react";
import CardMenuList from "../../card/CardMenuList";
import NotFoundMenu from "../../../pages/notFound/NotFoundMenu";
import { AxiosInstanceUser } from "../../../apis/Api";
import { Link } from "react-router-dom";
import Loading from "../../../utils/loading";

const HotelComp = () => {
  const [dataHotel, setDataHotel] = useState([]);
  const [dataHotel2, setDataHotel2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState();
  const [limitData, setLimitData] = useState(8);

  useEffect(() => {
    AxiosInstanceUser.get(`/hotel`)
      .then((res) => {
        setDataHotel(res.data.menu_hotel.slice(0, limitData));
        setDataHotel2(res.data.menu_hotel);
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
      const searchData = dataHotel2.filter((item) =>
        item.city_hotel.toLowerCase().includes(getSearch)
      );
      setDataHotel(searchData);
    } else if (getSearch === "") {
      setDataHotel(dataHotel2.slice(0, limitData));
    }
    setIsLoading(false);
  };

  const LoadMore = () => {
    setLimitData(limitData + 4);
  };
  return (
    <>
      <section className="hotelComp">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="contentMenu flex">
              <div className="infoMenu">
                <div className="subTitleMenu">Menu Hotel</div>
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
            {dataHotel.length === 0 ? (
              <div className="gkdulu">
                <NotFoundMenu />
              </div>
            ) : (
              <div className="cardsMenu flex">
                {dataHotel.map((data, i) => (
                  <Link to={`detail/${data.id_hotel}`} key={i}>
                    <CardMenuList
                      nama={data.name_hotel}
                      id={data.id_hotel}
                      lokasi={data.location_hotel}
                      gambar={data.image_hotel}
                    />
                  </Link>
                ))}
              </div>
            )}
            {dataHotel.length === 0 ? (
              <p style={{ display: "none" }}>hidden</p>
            ) : (
              <div className="loadMore">
                {limitData <= dataHotel.length ? (
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

export default HotelComp;
