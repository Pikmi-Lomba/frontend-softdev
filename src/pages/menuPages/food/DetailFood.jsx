import "./detailfood.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdLocationPin, MdCall, MdShare, MdFavorite } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { AxiosInstanceUser } from "../../../apis/Api";

// Component
import Navbar from "../../../components/navbar/Navbar";
import CardMakanan from "../../../components/card/CardMakanan";
import Disqus from "../../../components/disqus/Disqus";

const DetailFood = () => {
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AxiosInstanceUser.get(`/food2/${id}`)
      .then((res) => {
        setDataDetail(res.data?.list_resto_by_pk);
        console.log(res.data?.list_resto_by_pk);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoading, id]);

  const openNewPage = () => {
    const link = dataDetail.link_resto;
    window.open(`${link}`, "_blank");
  };

  return (
    <>
      <Navbar />
      {dataDetail && (
        <div className="detailFood">
          <div className="topContentMenu4 flex">
            <div className="leftTopbar flex">
              <div className="title">{dataDetail?.name_resto}</div>
              <div className="location flex">
                <div className="menuIcon">
                  <MdLocationPin className="icon" />
                </div>
                <p className="subtitle">{`${dataDetail.location_resto}, ${dataDetail.city_resto}`}</p>
              </div>
              <div className="telepon flex">
                <div className="menuIcon">
                  <MdCall className="icon" />
                </div>
                <p className="telpContent">{dataDetail.telp_resto}</p>
              </div>
            </div>
            <div className="rightTopbar flex">
              {/* <div className="location radius-4">
              <MdLocationPin className="icon" />
            </div>
            <div className="location radius-4">
              <MdFavorite className="icon" />
            </div> */}
              <div className="location radius-4">
                <MdShare className="icon" />
              </div>
              <div onClick={openNewPage} className="location flex radius-4">
                <MdLocationPin className="icon" />
                <p className="subtitle2">Website</p>
              </div>
            </div>
          </div>
          {/* Image Grid  */}
          <div className="bodyPhoto">
            <div className="gridGallery">
              {dataDetail?.image_collection.map((img, i) => {
                return (
                  <div className="gridItem" key={i}>
                    <img src={img} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          {/* Menu Food */}
          <div className="Menu">
            <div className="topBar flex">
              <div className="title">Menu Makanan </div>
              {/* <Link to={`food_menu`} className="filterMenu radius btn">
                Lihat Detail
              </Link> */}
            </div>
            {dataDetail.menu_makanans.length === 0 ? (
              <p className="notFoundFoodList">Menu Makanan belum tersedia</p>
            ) : (
              <div className="cardsMenu flex">
                {dataDetail?.menu_makanans.map((data, i) => (
                  <CardMakanan data={data} key={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <Disqus />
    </>
  );
};

export default DetailFood;
