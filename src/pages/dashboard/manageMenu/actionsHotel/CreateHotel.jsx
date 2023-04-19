import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../../components/sidebar/AdminSidebar";
import { AxiosInstanceUser } from "../../../../apis/Api";
import Swal from "sweetalert2";

const CreateHotel = () => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate(`/dashboard-admin/hotel`);
  };

  // initial data form put data
  const initialValues = {
    name_hotel: "",
    telp_hotel: "",
    image_hotel: "",
    desc_hotel: "",
    website_hotel: "",
    city_hotel: "",
    location_hotel: "",
    price_hotel: "",
  };

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // end initial data form put data

  const handleAddUser = async (e) => {
    e.preventDefault();

    await AxiosInstanceUser.post("/hotel", formData)
      .then(() => {
        navigate(-1);
        Swal.fire({
          title: `Data Hotel Berhasil Di Tambahkan`,
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
        Swal.fire({
          title: `Data Hotel Gagal Di Tambahkan`,
          icon: "success",
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

  return (
    <Sidebar>
      <section className="ActionContainer">
        <div className="top flex">
          <h1>Tambah Hotel</h1>
        </div>
        <form className="bottom flex radius-5">
          <div className="right flex">
            <div className="formInputContent flex">
              <label className="title">Nama Hotel</label>
              <input
                name="name_hotel"
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
                className="radius-2"
                type="text"
                placeholder="Alamat Resto..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Kota Hotel</label>
              <input
                name="city_hotel"
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
                className="radius-2"
                type="text"
                placeholder="Image Copy Address..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Harga Mulai dari</label>
              <input
                name="price_hotel"
                className="radius-2"
                type="number"
                placeholder="Harga Mulai dari..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputTextarea flex">
              <label className="title">Deskripsi / Tentang Hotel </label>
              <textarea
                name="desc_hotel"
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
            <button className=" btn radius-2" onClick={handleAddUser}>
              Tambah Hotel
            </button>
          </div>
        </form>
      </section>
    </Sidebar>
  );
};

export default CreateHotel;
