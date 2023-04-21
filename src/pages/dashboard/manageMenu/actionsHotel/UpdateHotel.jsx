import { useState } from "react";
import Sidebar from "../../../../components/sidebar/AdminSidebar";
import { AxiosInstanceUser } from "../../../../apis/Api";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import Swal from "sweetalert2";

const UpdateHotel = () => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate(`/dashboard-admin/hotel`);
  };
  const { id } = useParams();
  const initialValues = {
    name_hotel: "",
    telp_hotel: "",
    location_hotel: "",
    city_hotel: "",
    desc_hotel: "",
    website_hotel: "",
    price_hotel: "",
    image_hotel: "",
  };
  const [isLoading, setIsLoading] = useState(true);
  const [dataHotel, setDataHotel] = useState(initialValues);
  useEffect(() => {
    AxiosInstanceUser.get(`hotel/${id}`).then((res) => {
      setIsLoading(false);
      console.log(res.data.menu_hotel_by_pk);
      setDataHotel({
        name_hotel: res.data.menu_hotel_by_pk.name_hotel,
        telp_hotel: res.data.menu_hotel_by_pk.telp_hotel,
        location_hotel: res.data.menu_hotel_by_pk.location_hotel,
        city_hotel: res.data.menu_hotel_by_pk.city_hotel,
        desc_hotel: res.data.menu_hotel_by_pk.desc_hotel,
        website_hotel: res.data.menu_hotel_by_pk.website_hotel,
        price_hotel: res.data.menu_hotel_by_pk.price_hotel,
        image_hotel: res.data.menu_hotel_by_pk.image_hotel,
      });
    });
  }, [isLoading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataHotel({ ...dataHotel, [name]: value });
  };

  console.table(dataHotel);

  // Change data

  const handleChangeDataHotel = async (e) => {
    e.preventDefault();
    await AxiosInstanceUser.put(`/hotel/${id}`, dataHotel)
      .then(() => {
        navigate(-1);
        Swal.fire({
          title: `Data Hotel Berhasil Di Update`,
          icon: "success",
          showClass: { popup: "animate__animated animate__fadeInDown" },
          hideClass: { popup: "animate__animated animate__fadeOutUp" },
          customClass: {
            title: "titleSwal",
            popup: "popupSwal",
            icon: "iconSwal",
          },
        });
      })

      .catch((err) => {
        console.log(err.response.data);
        Swal.fire({
          title: `Data Hotel Gagal Di Update`,
          icon: "error",
          showClass: { popup: "animate__animated animate__fadeInDown" },
          hideClass: { popup: "animate__animated animate__fadeOutUp" },
          customClass: {
            title: "titleSwal",
            popup: "popupSwal",
            icon: "iconSwal",
          },
        });
      });
  };

  console.log(dataHotel);
  return (
    <Sidebar>
      <section className="ActionContainer">
        <div className="top flex">
          <h1>Edit Hotel</h1>
        </div>
        <form className="bottom flex radius-5">
          <div className="right flex">
            <div className="formInputContent flex">
              <label className="title">Nama Hotel</label>
              <input
                name="name_hotel"
                value={dataHotel.name_hotel}
                className="radius-2"
                type="text"
                placeholder="Nama Hotel..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Telepon Hotel</label>
              <input
                name="telp_hotel"
                value={dataHotel.telp_hotel}
                className="radius-2"
                type="number"
                placeholder="Telepon Hotel..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Alamat Hotel</label>
              <input
                name="location_hotel"
                value={dataHotel.location_hotel}
                className="radius-2"
                type="text"
                placeholder="Alamat Hotel..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Kota Hotel</label>
              <input
                name="city_hotel"
                value={dataHotel.city_hotel}
                className="radius-2"
                type="text"
                placeholder="Kota Hotel..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Link Website Hotel</label>
              <input
                name="website_hotel"
                value={dataHotel.website_hotel}
                className="radius-2"
                type="text"
                placeholder="Link Website..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Image Copy Address</label>
              <input
                name="image_hotel"
                value={dataHotel.image_hotel}
                className="radius-2"
                type="text"
                placeholder="Image Copy Address..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Harga Minimal Hotel</label>
              <input
                name="price_hotel"
                value={dataHotel.price_hotel}
                className="radius-2"
                type="text"
                placeholder="Harga Minimal Hotel..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputTextarea flex">
              <label className="title">Deskripsi / Tentang Hotel </label>
              <textarea
                name="desc_hotel"
                value={dataHotel.desc_hotel}
                className="radius-2"
                type="text"
                placeholder="Tuliskan Deskripsi Tentang Hotel"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="actionButton flex">
            <button className=" btn radius-2" onClick={backPage}>
              Kembali
            </button>
            <button className=" btn radius-2" onClick={handleChangeDataHotel}>
              Simpan
            </button>
          </div>
        </form>
      </section>
    </Sidebar>
  );
};

export default UpdateHotel;
