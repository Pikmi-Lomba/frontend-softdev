import "./eventComp.scss";
import image from "../../../assets/image/img-hero.jpg";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataEvent } from "../../../apis/Api";
import Loading from "../../../utils/loading";

const EventComp = () => {
  const [dataEvent, setDataEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limitData, setLimitData] = useState(2);

  useEffect(() => {
    getDataEvent() // axios.get(url fetch api)
      .then((res) => {
        console.log(res.data.event);
        setDataEvent(res.data.event.slice(0, limitData));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoading, limitData]);

  const LoadMore = () => {
    setLimitData(limitData + 2);
  };

  const MaksLoadMore = () => {};

  console.log("mama", dataEvent);

  return (
    <>
      {isLoading ? (
        Loading
      ) : (
        <section className="EventComp">
          <div className="contentMenu flex">
            <div className="infoMenu">
              <div className="subTitleMenu">Menu Event</div>
            </div>
            <div className="flex LocationCard radius-2">
              <MdLocationPin className="icon" />
              <input
                // onChange={(e) => handleSearch(e)}
                type="text"
                placeholder="Cari tempat tujuan"
              />
            </div>
          </div>
          <div className="cardsMenu flex">
            {dataEvent.map((data) => (
              <Link key={data.id} to={`detail/${data.id}`}>
                <div className="cardMenu">
                  <div className="imageContent">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="Tampung">
                    <div className="KatEvent radius">{data.kategory_event}</div>
                    <h1 className="titleCardMenu">
                      {data.name_event.substring(0, 40)}
                    </h1>
                    <p className="subTitleCardMenu">
                      {data.nama_mitra.substring(0, 40)}
                    </p>
                    <p className="descCardMenu">
                      {data.description_event.substring(0, 200)}
                    </p>

                    <div className="register">{data.registration_limit}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="loadMore ">
            {dataEvent.length < limitData ? (
              <button className="btn radius hidden" onClick={LoadMore}>
                Load More
              </button>
            ) : (
              <button className="btn radius " onClick={LoadMore}>
                Load More
              </button>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default EventComp;
