import { useState } from "react";
import Sidebar from "../../../../components/sidebar/AdminSidebar";
import { AxiosInstanceUser } from "../../../../apis/Api";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import Swal from "sweetalert2";

const UpdateTrip = () => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate(`/dashboard-admin/wisata`);
  };
  const { id } = useParams();
  const initialValues = {
    name_trip: "",
    telp_trip: "",
    location_trip: "",
    city_trip: "",
    desc_trip: "",
    price_trip: "",
    image_trip: "",
  };
  const [isLoading, setIsLoading] = useState(true);
  const [dataTrip, setDataTrip] = useState(initialValues);
  useEffect(() => {
    AxiosInstanceUser.get(`trip/${id}`).then((res) => {
      setIsLoading(false);
      console.log(res.data.menu_wisata_by_pk);
      setDataTrip({
        name_trip: res.data.menu_wisata_by_pk.name_trip,
        telp_trip: res.data.menu_wisata_by_pk.telp_trip,
        location_trip: res.data.menu_wisata_by_pk.location_trip,
        city_trip: res.data.menu_wisata_by_pk.city_trip,
        desc_trip: res.data.menu_wisata_by_pk.desc_trip,
        price_trip: res.data.menu_wisata_by_pk.price_trip,
        image_trip: res.data.menu_wisata_by_pk.image_trip,
      });
    });
  }, [isLoading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataTrip({ ...dataTrip, [name]: value });
  };

  console.table(dataTrip);

  // Change data

  const handleChangeDataTrip = async (e) => {
    e.preventDefault();
    await AxiosInstanceUser.put(`/trip/${id}`, dataTrip)
      .then(() => {
        navigate(-1);
        Swal.fire({
          title: `Data Wisata Berhasil Di Update`,
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
          title: `Data Wisata Gagal Di Update`,
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

  console.log(dataTrip);
  return (
    <Sidebar>
      <section className="ActionContainer">
        <div className="top flex">
          <h1>Edit Wisata</h1>
        </div>
        <form className="bottom flex radius-5">
          <div className="right flex">
            <div className="formInputContent flex">
              <label className="title">Nama Wisata</label>
              <input
                name="name_trip"
                value={dataTrip.name_trip}
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
                value={dataTrip.telp_trip}
                className="radius-2"
                type="number"
                placeholder="Telepon Wisata..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Alamat Wisata</label>
              <input
                name="location_trip"
                value={dataTrip.location_trip}
                className="radius-2"
                type="text"
                placeholder="Alamat Wisata..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Kota Wisata</label>
              <input
                name="city_trip"
                value={dataTrip.city_trip}
                className="radius-2"
                type="text"
                placeholder="Kota Wisata..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Image Copy Address</label>
              <input
                name="image_trip"
                value={dataTrip.image_trip}
                className="radius-2"
                type="text"
                placeholder="Image Copy Address..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Harga Minimal Wisata</label>
              <input
                name="price_trip"
                value={dataTrip.price_trip}
                className="radius-2"
                type="text"
                placeholder="Harga Minimal Wisata..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputTextarea flex">
              <label className="title">Deskripsi / Tentang Wisata </label>
              <textarea
                name="desc_trip"
                value={dataTrip.desc_trip}
                className="radius-2"
                type="text"
                placeholder="Tuliskan Deskripsi Tentang Wisata"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="actionButton flex">
            <button className=" btn radius-2" onClick={backPage}>
              Kembali
            </button>
            <button className=" btn radius-2" onClick={handleChangeDataTrip}>
              Simpan
            </button>
          </div>
        </form>
      </section>
    </Sidebar>
  );
};

export default UpdateTrip;
