import { useState } from "react";
import "./card.scss";
import { MdPeople, MdFestival } from "react-icons/md";
import { useEffect } from "react";
import { AxiosInstanceAdmin } from "../../apis/Api";
import Cookies from "js-cookie";

const CardDashboardAdmin = () => {
  const [dataCountMitra, setDataCountMitra] = useState();
  const [dataCountEvents, setDataCountEvents] = useState();

  useEffect(() => {
    AxiosInstanceAdmin.get(`/mitra/counts`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("tokenAdmin")}`,
      },
    }).then((res) => {
      console.log(res.data.data.count);
      setDataCountMitra(res.data.data.count);
    });
  });

  useEffect(() => {
    AxiosInstanceAdmin.get(`/events/counts`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("tokenAdmin")}`,
      },
    }).then((res) => {
      console.log(res.data.data.count);
      setDataCountEvents(res.data.data.count);
    });
  });

  return (
    <div className="cardDashboardAdmin flex">
      <div className="cards flex">
        <div className="card flex radius-3">
          <div className="radiusIcon flex">
            <MdPeople className="icon" />
          </div>
          <p className="titleCard">Total Mitra</p>
          <div className="valueCard">{dataCountMitra}</div>
        </div>
        <div className="card flex radius-3">
          <div className="radiusIcon2 flex">
            <MdFestival className="icon" />
          </div>
          <p className="titleCard">Total Events</p>
          <div className="valueCard">{dataCountEvents}</div>
        </div>
      </div>
    </div>
  );
};

export default CardDashboardAdmin;
