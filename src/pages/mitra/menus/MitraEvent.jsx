import { Link } from "react-router-dom";
import MitraSidebar from "../../../components/sidebar/MitraSidebar";
import "./mitraevent.scss";
import { useEffect, useState } from "react";
import { AxiosIntanceMitra } from "../../../apis/Api";
import Cookies from "js-cookie";

const MitraEvent = () => {
  const [dataEvent, setDataEvent] = useState([]);
  const [page, setPage] = useState(1);
  const [canLoadMore, setCanLoadMore] = useState(true);

  useEffect(() => {
    const getMitraEvent = async () => {
      await AxiosIntanceMitra(`/get/events/page/${page}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
        .then((res) => {
          console.log(res.data);
          if (page <= 1) {
            setDataEvent(res.data.data.event);
          } else {
            setDataEvent((prevVal) => [...prevVal, ...res.data.data.event]);
          }
        })
        .catch((res) => {
          console.log(res);
          setCanLoadMore(false);
        });
    };

    getMitraEvent();
  }, [page]);

  const nextPage = () => {
    console.log(page);
    setPage((prevVal) => prevVal + 1);
  };

  return (
    <MitraSidebar>
      <div className="topMitraEvent flex">
        <h1 className="titlePage">Event Page</h1>
        <Link to={`/dashboard-mitra/events/create`} className="btn radius-2">
          Tambah Event
        </Link>
      </div>
      <div className="bottomMitraEvent">
        <div className="cardsMenu flex">
          {dataEvent.length ? (
            dataEvent.map((event) => (
              <Link key={event.id_event} to={`detail/${event.id_event}`}>
                <div className="cardMenu">
                  <div className="imageContent">
                    <img src={event.image_events} alt="" />
                  </div>
                  <div className="Tampung">
                    <div className="KatEvent radius">{event.kategori}</div>
                    <h1 className="titleCardMenu">{event.nama_event}</h1>
                    <p className="subTitleCardMenu">{event.alamat}</p>
                    <p className="descCardMenu">{event.deskripsi}</p>

                    <div className="register">{event.tanggal_mulai}</div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <h1>No Event Yet</h1>
          )}
        </div>
        {canLoadMore && (
          <div
            onClick={nextPage}
            className="px-4 py-2 bg-teal-500 w-fit text-white rounded-xl mx-auto cursor-pointer"
          >
            Load More...
          </div>
        )}
      </div>
    </MitraSidebar>
  );
};

export default MitraEvent;
