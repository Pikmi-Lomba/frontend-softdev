import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../../components/sidebar/AdminSidebar";
import { AxiosInstanceUser } from "../../../../apis/Api";
import Swal from "sweetalert2";

const CreateTrip = () => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate(`/dashboard-admin/wisata`);
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

    await AxiosInstanceUser.post("/food", formData)
      .then(() => {
        navigate(-1);
        Swal.fire({
          title: `Data Wisata Berhasil Di Tambahkan`,
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

      .catch(() => {
        Swal.fire({
          title: `Data Wisata Gagal Di Tambahkan`,
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

  console.log("data", formData);

  return (
    <Sidebar>
      <section className="ActionContainer">
        <div className="top flex">
          <h1>Tambah Wisata</h1>
        </div>
        <form className="bottom flex radius-5">
          <div className="right flex">
            <div className="formInputContent flex">
              <label className="title">Nama Wisata</label>
              <input
                name="name_trip"
                className="radius-2"
                type="text"
                placeholder="Nama Wisata..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Telepon Wisata</label>
              <input
                name="telp_trip"
                className="radius-2"
                type="number"
                placeholder="Telepon Wisata..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Alamat Wisata</label>
              <input
                name="location_resto"
                className="radius-2"
                type="text"
                placeholder="Alamat Wisata..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Kota Wisata</label>
              <input
                name="city_resto"
                className="radius-2"
                type="text"
                placeholder="Kota Wisata..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Link Website Wisata</label>
              <input
                name="link_resto"
                className="radius-2"
                type="text"
                placeholder="Link Website..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Image Copy Address</label>
              <input
                name="image_resto"
                className="radius-2"
                type="text"
                placeholder="Image Copy Address..."
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="actionButton flex">
            <button className=" btn radius-2" onClick={backPage}>
              Kembali
            </button>
            <button className=" btn radius-2" onClick={handleAddUser}>
              Tambah Wisata
            </button>
          </div>
        </form>
      </section>
    </Sidebar>
  );
};

export default CreateTrip;
