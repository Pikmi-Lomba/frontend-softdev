import "./foodComp.scss";
import { MdLocationPin } from "react-icons/md";
import { useEffect } from "react";
import { useState } from "react";
import { AxiosInstanceUser } from "../../../apis/Api";
import CardMenuList from "../../card/CardMenuList";
import NotFoundMenu from "../../../pages/notFound/NotFoundMenu";

const FoodComp = () => {
  const [dataKuliner, setDataKuliner] = useState([]);
  const [dataKuliner2, setDataKuliner2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState();
  const [limitData, setLimitData] = useState(8);

  useEffect(() => {
    AxiosInstanceUser.get(`/food`)
      .then((res) => {
        console.log("ini data", res.data.list_resto);
        setDataKuliner(res.data.list_resto.slice(0, limitData));
        setDataKuliner2(res.data.list_resto);
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
      const searchData = dataKuliner2.filter((item) =>
        item.city_resto.toLowerCase().includes(getSearch)
      );
      setDataKuliner(searchData);
    } else if (getSearch === "") {
      setDataKuliner(dataKuliner2.slice(0, limitData));
    }
    setIsLoading(false);
  };

  const LoadMore = () => {
    setLimitData(limitData + 4);
  };

  return (
    <>
      <section className="foodComp">
        {isLoading ? (
          <div>Halaman ini Sedang memuat...</div>
        ) : (
          <>
            <div className="contentMenu flex">
              <div className="infoMenu">
                <div className="subTitleMenu">Menu Kuliner</div>
              </div>
              <div className="flex LocationCard radius-2">
                <MdLocationPin className="icon" />
                <input
                  onChange={(e) => handleSearch(e)}
                  type="text"
                  placeholder="Cari tempat tujuan"
                />
              </div>
            </div>
            {dataKuliner.length === 0 ? (
              <div className="gkdulu">
                <NotFoundMenu />
              </div>
            ) : (
              <div className="cardsMenu flex">
                {dataKuliner.map((data, i) => (
                  <CardMenuList data={data} key={i} />
                ))}
              </div>
            )}
            {dataKuliner.length === 0 ? (
              <p style={{ display: "none" }}>hidden</p>
            ) : (
              <div className="loadMore">
                {limitData <= dataKuliner.length ? (
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

export default FoodComp;
