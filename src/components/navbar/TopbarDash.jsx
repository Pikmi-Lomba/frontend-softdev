import { useEffect, useState } from "react";
import "./topbar.scss";
import { AxiosIntanceMitra } from "../../apis/Api";
import Cookies from "js-cookie";

const TopBarDash = () => {
  const token = Cookies.get("token");
  const role = Cookies.get("role");
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AxiosIntanceMitra.get("/profile", {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      setIsLoading(false);
      setData(res.data.data.mitra);
    });
  }, [isLoading]);

  useEffect(() => {
    if ((data.length === 0) & (role === "mitra")) {
      setValue("example@gmail.com");
    } else if ((data.length === 0) & (role === "admin")) {
      setValue("Admin@gmail.com");
    } else {
      setValue(data.email);
    }
  });

  return (
    <>
      <section className="topbarContainer">
        <div className="MenuAccount flex">
          <img
            alt="Mitra Logo"
            className="imageAccount"
            src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          />
          <div className="nameAccount">{value}</div>
        </div>
      </section>
    </>
  );
};

export default TopBarDash;
