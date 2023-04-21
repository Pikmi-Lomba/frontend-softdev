import Cookies from "js-cookie";
import { AxiosIntanceMitra } from "../../../apis/Api";
import TopbarSettings from "./TopbarSettings";
import "./style.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SuccessModal } from "../../ConfirmModal/SuccessModal";

const ProfileMitra = () => {
  const initialValue = {
    nama_mitra: "",
    email: "",
    telepon: "",
    alamat: "",
    // Personal Data
    nama_personal: "",
    email_personal: "",
    telepon_personal: "",
    alamat_personal: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getDataMitra = async () => {
      await AxiosIntanceMitra("/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }).then((e) => {
        const { mitra } = e.data.data;

        const dataState = {
          nama_mitra: mitra.nama_mitra,
          email: mitra.email,
          telepon: mitra.telepon,
          alamat: mitra.alamat,
          // Personal Data
          nama_personal: mitra.nama_personal,
          email_personal: mitra.email_personal,
          telepon_personal: mitra.telepon_personal,
          alamat_personal: mitra.alamat_personal,
        };

        setFormData(dataState);
      });
    };
    getDataMitra();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const submitHandler = async (e) => {
    e.preventDefault();

    await AxiosIntanceMitra.post("/profile/add", formData, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
      .then(() => {
        setIsModalOpen(true);
        setTimeout(() => {
          setIsModalOpen(false);
        }, 3000);
      })
      .catch(async (e) => {
        await AxiosIntanceMitra.put("/profile/update", formData, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }).then(() => {
          setIsModalOpen(true);
          setTimeout(() => {
            setIsModalOpen(false);
          }, 3000);
        });
      });

    console.log(formData);
  };

  console.table(formData);
  return (
    <TopbarSettings>
      <SuccessModal
        buttonText="Ok"
        title="Profile Berhasil Di Update"
        isOpen={isModalOpen}
        onClickButton={() => {}}
      />
      <form onSubmit={submitHandler} className="myPersonal flex">
        <div className="mitraForm flex">
          <div className="titleuntukMitra">Mitra</div>
          <div className="formInputContent flex">
            <label className="titleForm">Nama Mitra</label>
            <input
              name="nama_mitra"
              value={formData.nama_mitra}
              className="radius-2"
              type="text"
              placeholder="Nama Mitra..."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formInputContent flex">
            <label className="titleForm">Email Mitra</label>
            <input
              name="email"
              value={formData.email}
              className="radius-2"
              type="email"
              placeholder="Email Mitra..."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formInputContent flex">
            <label className="titleForm">No. Telepon</label>
            <input
              name="telepon"
              value={formData.telepon}
              className="radius-2"
              type="number"
              placeholder="No. Telepon..."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formInputContent flex">
            <label className="titleForm">Alamat Mitra</label>
            <input
              value={formData.alamat}
              name="alamat"
              className="radius-2"
              type="text"
              placeholder="Alamat Mitra..."
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="personalForm flex">
          <div className="titleuntukMitra">Personal</div>
          <div className="formInputContent flex">
            <label className="titleForm">Nama</label>
            <input
              name="nama_personal"
              className="radius-2"
              value={formData.nama_personal}
              type="text"
              placeholder="isi nama anda..."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formInputContent flex">
            <label className="titleForm">Email</label>
            <input
              name="email_personal"
              value={formData.email_personal}
              className="radius-2"
              type="email"
              placeholder="isi email anda..."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formInputContent flex">
            <label className="titleForm">No. Telepon</label>
            <input
              name="telepon_personal"
              className="radius-2"
              value={formData.telepon_personal}
              type="number"
              placeholder="isi no. telp anda..."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formInputContent flex">
            <label className="titleForm">Alamat</label>
            <input
              name="alamat_personal"
              className="radius-2"
              value={formData.alamat_personal}
              type="text"
              placeholder="isi alamat anda..."
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <button type="submit" className="btn radius-2">
          Simpan Perubahan
        </button>
      </form>
    </TopbarSettings>
  );
};

export default ProfileMitra;
