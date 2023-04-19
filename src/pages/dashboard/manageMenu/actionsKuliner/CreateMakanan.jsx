import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../../../components/sidebar/AdminSidebar";
import { AxiosInstanceUser } from "../../../../apis/Api";
import Swal from "sweetalert2";

const CreateMakanan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const backPage = () => {
    navigate(`/dashboard-admin/kuliner/detail/${id}`);
  };

  // initial data form put data
  const initialValues = {
    nama_makanan: "",
    harga_makanan: "",
    gambar_makanan: "",
    id_resto: id,
  };

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // end initial data form put data

  const handleAddUser = async (e) => {
    e.preventDefault();

    await AxiosInstanceUser.post("/menusfood", formData)
      .then(() => {
        navigate(-1);
        Swal.fire({
          title: `Data Makanan Berhasil Di Tambahkan`,
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
          title: `Data Makanan Gagal Di Tambahkan`,
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
          <h1>Tambah Makanan</h1>
        </div>
        <form className="bottom flex radius-5">
          <div className="right flex">
            <div className="formInputContent flex">
              <label className="title">Nama Makanan</label>
              <input
                name="nama_makanan"
                className="radius-2"
                type="text"
                placeholder="Nama Makanan..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Harga Makanan</label>
              <input
                name="harga_makanan"
                className="radius-2"
                type="number"
                placeholder="Harga Makanan..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Image Copy Address</label>
              <input
                name="gambar_makanan"
                className="radius-2"
                type="text"
                placeholder="Image Copy Address Makanan..."
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="actionButton flex">
            <button className=" btn radius-2" onClick={backPage}>
              Kembali
            </button>
            <button className=" btn radius-2" onClick={handleAddUser}>
              Tambah Makanan
            </button>
          </div>
        </form>
      </section>
    </Sidebar>
  );
};

export default CreateMakanan;
