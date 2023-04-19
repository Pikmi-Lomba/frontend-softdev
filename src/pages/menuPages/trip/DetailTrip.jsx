import "./detailtrip.scss";
import Navbar from "../../../components/navbar/Navbar";
import Disqus from "../../../components/disqus/Disqus";
import { AxiosInstanceUser } from "../../../apis/Api";
import { CgMenuGridO } from "react-icons/cg";
import { useParams } from "react-router-dom";
// Icon
import { MdLocationPin, MdCall, MdShare, MdFavorite } from "react-icons/md";
import { useState, useEffect } from "react";

const DetailTrip = () => {
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AxiosInstanceUser.get(`/trip/${id}`)
      .then((res) => {
        console.log(res.data);
        setDataDetail(res.data?.menu_wisata_by_pk);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoading, id]);

  return (
    <>
      <Navbar />
      {dataDetail && (
        <div className="detailTrip">
          <div className="topContentMenu flex">
            <div className="leftTopbar">
              <div className="title">{dataDetail.name_trip}</div>
              <div className="location flex">
                <MdLocationPin className="icon" size={20} />
                <p className="subtitle">
                  {`${dataDetail.location_trip},${dataDetail.city_trip}`}
                </p>
              </div>
              <div className="telepon flex">
                <MdCall className="icon" />
                <p className="telpContent">{dataDetail.telp_trip}</p>
              </div>
            </div>
            <div className="rightTopbar flex">
              <div className="location radius-4">
                <MdLocationPin className="icon" />
              </div>
              <div className="location radius-4">
                <MdFavorite className="icon" />
              </div>
              <div className="location radius-4">
                <MdShare className="icon" />
              </div>
            </div>
          </div>
          {/* <hr /> */}
          <div className="bodyPhoto">
            <div className="gridGallery">
              {dataDetail.image_collection.map((img, i) => {
                return (
                  <div className="gridItem" key={i}>
                    <img src={img} alt="image_wisata" />
                  </div>
                );
              })}
            </div>
          </div>
          <hr />
          <div className="contentsDetail flex">
            <div className="leftContent flex">
              <div className="title">{dataDetail.name_trip}</div>
              <div className="cardInfo flex">
                <div className="jamOperasi">
                  <h3 className="subTitle">Jam Operasi</h3>
                  <p className="content">Senin - Jumat: 10.00 - 17.00</p>
                  <p className="content">
                    Sabtu - Minggu, Libur Nasional: 08.00 - 16.00
                  </p>
                </div>
                <div className="ticket">
                  <h3 className="subTitle">Harga Tiket</h3>
                  <div className="content">{dataDetail.price_trip}</div>
                </div>
              </div>
              <div className="cardContent">
                <p className="textDetail">{dataDetail.desc_trip}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Disqus />
    </>
  );
};

export default DetailTrip;
