import { useState } from "react";
import Sidebar from "../../../../components/sidebar/AdminSidebar";
import { AxiosInstanceUser } from "../../../../apis/Api";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import Swal from "sweetalert2";

const UpdateKuliner = () => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate(`/dashboard-admin/kuliner`);
  };
  const { id } = useParams();
  const initialValues = {
    name_resto: "",
    telp_resto: "",
    location_resto: "",
    city_resto: "",
    link_resto: "",
    image_resto: "",
  };
  const [isLoading, setIsLoading] = useState(true);
  const [dataKuliner, setDataKuliner] = useState(initialValues);
  useEffect(() => {
    AxiosInstanceUser.get(`food/${id}`).then((res) => {
      setIsLoading(false);
      setDataKuliner({
        name_resto: res.data.list_resto_by_pk.name_resto,
        telp_resto: res.data.list_resto_by_pk.telp_resto,
        location_resto: res.data.list_resto_by_pk.location_resto,
        city_resto: res.data.list_resto_by_pk.city_resto,
        link_resto: res.data.list_resto_by_pk.link_resto,
        image_resto: res.data.list_resto_by_pk.image_resto,
      });
    });
  }, [isLoading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataKuliner({ ...dataKuliner, [name]: value });
  };

  // Change data

  const handleChangeDataKuliner = async (e) => {
    e.preventDefault();
    await AxiosInstanceUser.put(`/food/${id}`, dataKuliner)
      .then(() => {
        navigate(-1);
        Swal.fire({
          title: `Data Resto Berhasil Di Update`,
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
          title: `Data Resto Gagal Di Update`,
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

  console.log(dataKuliner);
  return (
    <Sidebar>
      <section className="ActionContainer">
        <div className="top flex">
          <h1>Edit Kuliner</h1>
        </div>
        <form className="bottom flex radius-5">
          <div className="right flex">
            <div className="formInputContent flex">
              <label className="title">Nama Resto</label>
              <input
                name="name_resto"
                value={dataKuliner.name_resto}
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
                value={dataKuliner.telp_resto}
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
                value={dataKuliner.location_resto}
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
                value={dataKuliner.city_resto}
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
                value={dataKuliner.link_resto}
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
                value={dataKuliner.image_resto}
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
            <button className=" btn radius-2" onClick={handleChangeDataKuliner}>
              Simpan
            </button>
          </div>
        </form>
      </section>
    </Sidebar>
  );
};

export default UpdateKuliner;
