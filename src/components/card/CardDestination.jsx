import "./card.scss";
import { MdLocationPin } from "react-icons/md";
import { AxiosInstanceUser } from "../../apis/Api";
import { useState } from "react";
import { useEffect } from "react";

const CardDestination = () => {
  const [dataPopular, setDataPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sortedData = dataPopular.sort(
    (a, b) => b.rating_popular - a.rating_popular
  );
  const filteredData = sortedData.filter((item) => item.rating_popular === 100);

  useEffect(() => {
    AxiosInstanceUser.get(`/popular_trip`)
      .then((res) => {
        setDataPopular(res.data.popular_place);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoading]);

  return (
    <div className="cardDestination flex">
      {dataPopular.map((data, i) => (
        <div className="card" key={i}>
          <img src={data.image_popular} alt="favorit_destinasi.png" />
          <div className="contentDestination flex">
            <div className="subContentDestination">
              <div className="titleDestination">
                {data.name_popular.slice(0, 20)}
              </div>
              <div className="locationDestination flex">
                <MdLocationPin className="icon" />
                <p className="nameLocationDestination">
                  {data.location_popular}
                </p>
              </div>
            </div>
            <div className="rating">{data.rating_popular}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDestination;
