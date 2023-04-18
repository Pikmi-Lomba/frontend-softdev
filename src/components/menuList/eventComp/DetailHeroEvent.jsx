import "./detailheroevent.scss";
import { MdLocationPin } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../../utils/loading";
import { AxiosIntanceLikeEvent } from "../../../apis/Api";

const DetailHeroEvent = () => {
  const [detailEvent, setDetailEvent] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [liked, setLiked] = useState();
  const [setset, setSetset] = useState({
    decision: liked,
  });

  const { id } = useParams();
  console.log(setset);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/events/${id}`).then((res) => {
      setDetailEvent(res.data.data.event);
      setisLoading(false);
    });
  }, [isLoading, id]);

  const openNewPage = () => {
    window.open("https://www.youtube.com/", "_blank");
  };

  const handleLike = async () => {
    await AxiosIntanceLikeEvent.post(`/${id}/like`)
      .then((res) => {
        if (res.data.data.decision === "like") {
          setSetset({
            decision: res.data.data.decision,
          });
          setLiked(true);
        } else if (res.data.data.decision === "unlike") {
          setLiked(false);
        }
        // setLiked(!liked);
        console.log(res.data.data.decision);
      })
      .catch((err) => console.log(err));
  };

  console.log("api", liked);

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
                <div className="imageEvent radius-3">
                  <img
                    src={detailEvent.image_events}
                    alt="image_event"
                    className="radius-3"
                  />
                </div>
                <div className="flex contentsEvent radius-2">
                  <div className="contentEvent">
                    <div className="kate radius">{detailEvent.kategoti}</div>
                    <div className="title">{detailEvent.nama_event}</div>
                    <div className="person">
                      Diselenggaran oleh: {detailEvent.nama_mitra}
                    </div>
                  </div>
                  <div className="rightContentsEvent">
                    <div className="iconMenus" onClick={handleLike}>
                      <FaHeart
                        className="icon likeButton"
                        style={{ color: liked ? "red" : "black" }}
                      />
                      {/* {liked ? "like" : "unlike"} */}
                    </div>
                    <div className="linkEvent">
                      <button onClick={openNewPage} className="btn radius-2">
                        Link Pendataran
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="infoDetailEvent flex">
            <div className="description">
              <div className="title">Deskripsi Event</div>
              <div className="content">{detailEvent.deskripsi}</div>
            </div>
            <div className="infoKet">
              <div className="infoLocation ">
                <div className="title">Lokasi Event</div>
                <div className="content flex">
                  <MdLocationPin className="icon2" />
                  <div className="name">
                    {`${detailEvent.alamat}, ${detailEvent.lokasi_kota}`}
                  </div>
                </div>
              </div>
              <div className="infoLocation ">
                <div className="title">acara mulai dari</div>
                <div className="contentDate flex">
                  <div className="name">
                    {`Tanggal Mulai: ${detailEvent.alamat}, ${detailEvent.lokasi_kota}`}
                  </div>
                  <div className="name">
                    {`Tanggal Akhir: ${detailEvent.alamat}, ${detailEvent.lokasi_kota}`}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default DetailHeroEvent;
