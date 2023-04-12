import "./detailheroevent.scss";
import { MdLocationPin } from "react-icons/md";
// Import Swiper React components
import image from "../../../assets/image/img-hero.jpg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AxiosInstance } from "../../../apis/Api";
import Loading from "../../../utils/loading";

const DetailHeroEvent = () => {
  const [detailEvent, setDetailEvent] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    AxiosInstance(`/${id}`).then((res) => {
      setDetailEvent(res.data.event_by_pk);
      setisLoading(false);
    });
  }, [isLoading]);

  console.log(detailEvent);
  return (
    <>
      {isLoading ? (
        Loading
      ) : (
        <>
          <section className="detailHeroEvent radius-5">
            <div className="setContainer container">
              <div className="homeCardContainer flex ">
                {/* Image */}
                <div className="imageEvent">
                  <img src={detailEvent.image} alt="" className="radius-3" />
                </div>
                <div className="flex contentsEvent radius-2">
                  <div className="contentEvent">
                    <div className="kate radius">
                      {detailEvent.kategory_event}
                    </div>
                    <div className="title">{detailEvent.name_event}</div>
                    <div className="person">
                      Diselenggaran oleh: {detailEvent.nama_mitra}
                    </div>
                  </div>
                  <div className="linkEvent">
                    <button className="btn radius-2">Link Pendataran</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="infoDetailEvent flex">
            <div className="cardsInfo">
              <div className="importantInfo flex">
                <div className="infoEvent radius-2 flex">
                  <h3 className="title">Terbuka Hingga </h3>
                  <p className="content">{detailEvent.registration_limit}</p>
                </div>
                <div className="infoEvent radius-2 flex">
                  <h3 className="title">Jadwal Pelaksanaan</h3>
                  <p className="content">Mulai: {detailEvent.start_date}</p>
                  {/* <p className="content">selesai: {detailEvent.finish_date}</p> */}
                </div>
                <div className="infoEvent radius-2 flex">
                  <h3 className="title">Lokasi</h3>
                  <p className="content">
                    <MdLocationPin className="icon" />
                    {detailEvent.address_event}
                  </p>
                </div>
              </div>
              <div className="infodesc flex">
                {/* Title */}
                <div className="descEvent">
                  <p className="title">Deskripsi</p>
                  <div className="line"></div>
                  <p className="content">{detailEvent.description_event}</p>
                </div>
                {/* <div className="MapLocationEvent">
                  <button className="linkLoc radius-3">full view</button>
                  <img src={image} alt="asd" />
                </div> */}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default DetailHeroEvent;
