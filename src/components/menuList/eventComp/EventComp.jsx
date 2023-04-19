// import "./foodComp.scss";
import { MdLocationPin } from "react-icons/md";
import { useEffect } from "react";
import { useState } from "react";
import CardMenuList from "../../card/CardMenuList";
import NotFoundMenu from "../../../pages/notFound/NotFoundMenu";
import { Link } from "react-router-dom";
import Loading from "../../../utils/loading";

import axios from "axios";

const EventComp = () => {
  const [dataEvent, setDataEvent] = useState([]);
  const [dataEvent2, setDataEvent2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limitData, setLimitData] = useState(8);
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/events`)
      .then((res) => {
        setDataEvent(res.data.data.event.slice(0, limitData));
        setDataEvent2(res.data.data.event.slice(0, limitData));
        setIsLoading(false);
      })
      .catch((err) => {
        alert("terjadi kesalahan dalam memproses data");
      });
  }, [isLoading, limitData]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const searchAPI = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/search/events?kota=${query}`
        );
        setDataEvent(response.data.data.event.slice(0, limitData));
        setErrorMessage("");
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setDataEvent([]);
          setErrorMessage("Pencarian Tidak ditemukan");
        } else {
          setErrorMessage("ada masalah, coba beberapa saat lagi");
        }
      }
    };

    if (query) {
      searchAPI();
    } else {
      setDataEvent(dataEvent2);
      setErrorMessage("");
    }
  }, [query, dataEvent2, limitData]);

  const LoadMore = () => {
    setLimitData(limitData + 4);
  };

  return (
    <>
      <section className="foodComp">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="contentMenu flex">
              <div className="infoMenu">
                <div className="subTitleMenu">Menu Event</div>
              </div>
              <div className="flex LocationCard radius-2">
                <MdLocationPin className="icon" />
                <input
                  value={query}
                  onChange={handleChange}
                  type="text"
                  placeholder="Cari tempat tujuan"
                />
              </div>
            </div>
            {errorMessage && (
              <div className="gkdulu">
                <NotFoundMenu />
              </div>
            )}

            <div className="cardsMenu flex">
              {dataEvent.map((data, i) => (
                <Link to={`detail/${data.id_event}`} key={i}>
                  <CardMenuList
                    nama={data.nama_event}
                    id={data.id_event}
                    lokasi={data.alamat}
                    gambar={data.image_events}
                  />
                </Link>
              ))}
            </div>

            {dataEvent.length === 0 ? (
              <p style={{ display: "none" }}>hidden</p>
            ) : (
              <div className="loadMore">
                {limitData <= dataEvent.length ? (
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

export default EventComp;
