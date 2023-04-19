import "./detailhotel.scss";
import Navbar from "../../../components/navbar/Navbar";
import Disqus from "../../../components/disqus/Disqus";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AxiosInstanceUser } from "../../../apis/Api";

// Icon
import { MdLocationPin, MdCall, MdShare, MdFavorite } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";

const DetailHotel = () => {
  const [dataDetail, setDataDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    AxiosInstanceUser.get(`/hotel/${id}`)
      .then((res) => {
        console.log(res.data?.menu_hotel_by_pk);
        setDataDetail(res.data?.menu_hotel_by_pk);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoading, id]);

  console.log("data detail hotel", dataDetail);
  return (
    <>
      <Navbar />
      {dataDetail && (
        <div className="detailHotel">
          <div className="topbar flex">
            <div className="leftContent">
              <h1 className="title">{dataDetail.name_hotel}</h1>
              <div className="location flex">
                <MdLocationPin className="icon" />
                <p className="locationContent">{`${dataDetail.location_hotel}, ${dataDetail.city_hotel}`}</p>
              </div>
              <div className="telepon flex">
                <MdCall className="icon" />
                <p className="telpContent">{dataDetail.telp_hotel}</p>
              </div>
            </div>
            <div className="rightContent flex">
              <h1 className="title">
                <span>Mulai dari</span> {`Rp. ${dataDetail.price_hotel}`}
                <span className="malam">malam</span>
              </h1>
              <div className="contentShare flex">
                <div className="locationDiv radius-4">
                  <MdLocationPin className="icon" />
                </div>
                <div className="locationDiv radius-4">
                  <MdFavorite className="icon" />
                </div>
                <div className="locationDiv radius-4">
                  <MdShare className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="bodyPhoto">
            <div className="gridGallery">
              {dataDetail?.image_collection.map((image, i) => {
                return (
                  <div className="gridItem" key={i}>
                    <img src={image} alt="image_hotel" />
                  </div>
                );
              })}
            </div>
          </div>
          <hr />
          <div className="contentsDetail">
            <div className="overview">
              <h1 className="title">Deskripsi</h1>
              <p className="content">{dataDetail.desc_hotel}</p>
            </div>
            <hr />
            <div className="fasilitas">
              <h1 className="title">Fasilitas</h1>
              <div className="content flex">
                {dataDetail.fasilitas.map((data, i) => {
                  return (
                    <div key={i}>
                      <p>{data}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <hr />
            <div className="price ">
              <h1 className="title">Harga Banding Booking Hotel</h1>
              <div className="content horizontal-content">
                <div className="cardPrice radius-2 flex">
                  <img src={hotel} alt="hotelLogo.png" />
                  <p className="priceHotel">Rp. 580,000</p>
                </div>
                <div className="cardPrice radius-2 flex">
                  <img src={hotel} alt="hotelLogo.png" />
                  <p className="priceHotel">Rp. 580,000</p>
                </div>
                <div className="cardPrice radius-2 flex">
                  <img src={hotel} alt="hotelLogo.png" />
                  <p className="priceHotel">Rp. 580,000</p>
                </div>
                <div className="cardPrice radius-2 flex">
                  <img src={hotel} alt="hotelLogo.png" />
                  <p className="priceHotel">Rp. 580,000</p>
                </div>
                <div className="cardPrice radius-2 flex">
                  <img src={hotel} alt="hotelLogo.png" />
                  <p className="priceHotel">Rp. 580,000</p>
                </div>
                <div className="cardPrice radius-2 flex">
                  <img src={hotel} alt="hotelLogo.png" />
                  <p className="priceHotel">Rp. 580,000</p>
                </div>
                <div className="cardPrice radius-2 flex">
                  <img src={hotel} alt="hotelLogo.png" />
                  <p className="priceHotel">Rp. 580,000</p>
                </div>
              </div>
            </div> */}
            {/* <div className="horizontal-content">

          </div> */}
            {/* <hr /> */}
            {/* <div className="location">
              <h1 className="title">Lokasi</h1>
              <div className="maps"></div>
            </div> */}
            <hr />
          </div>
        </div>
      )}
      <Disqus />
    </>
  );
};

export default DetailHotel;
