import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../../components/sidebar/AdminSidebar";
import { AxiosInstanceUser } from "../../../../apis/Api";
import Swal from "sweetalert2";

const CreateKuliner = () => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate(`/dashboard-admin/kuliner`);
  };

  // initial data form put data
  const initialValues = {
    name_resto: "",
    telp_resto: "",
    image_resto: "",
    link_resto: "",
    city_resto: "",
    location_resto: "",
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
          title: `Data Resto Berhasil Di Tambahkan`,
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
          title: `Data Resto Gagal Di Tambahkan`,
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
          <h1>Tambah Kuliner</h1>
        </div>
        <form className="bottom flex radius-5">
          <div className="right flex">
            <div className="formInputContent flex">
              <label className="title">Nama Resto</label>
              <input
                name="name_resto"
                className="radius-2"
                type="text"
                placeholder="Nama Resto..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Telepon Resto</label>
              <input
                name="telp_resto"
                className="radius-2"
                type="number"
                placeholder="Telepon Resto..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Alamat Resto</label>
              <input
                name="location_resto"
                className="radius-2"
                type="text"
                placeholder="Alamat Resto..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Kota Resto</label>
              <input
                name="city_resto"
                className="radius-2"
                type="text"
                placeholder="Kota Resto..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Link Website Resto</label>
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
              Tambah Kuliner
            </button>
          </div>
        </form>
      </section>
    </Sidebar>
  );
};

export default CreateKuliner;

// const dataKuliner = new FormData();
// dataKuliner.append("name_resto", formData.name_resto);
// dataKuliner.append("telp_resto", formData.telp_resto);
// dataKuliner.append("location_resto", formData.location_resto);
// dataKuliner.append("city_resto", formData.city_resto);
// dataKuliner.append("link_resto", formData.link_resto);
// dataKuliner.append("image_resto", formData.image_resto);
