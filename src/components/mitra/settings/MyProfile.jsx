import TopbarSettings from "./TopbarSettings";
import "./style.scss";
import { useState } from "react";

const ProfileMitra = () => {
  const initialValue = {
    nama_mitra: "",
    email_mitra: "",
    no_telp_mitra: "",
    alamat_mitra: "",
    // Personal Data
    nama_personal: "",
    email_Personal: "",
    no_telp_personal: "",
    alamat_personal: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  console.table(formData);
  return (
    <TopbarSettings>
      <section className="myPersonal flex">
        <div className="mitraForm flex">
          <div className="titleuntukMitra">Mitra</div>
          <div className="formInputContent flex">
            <label className="titleForm">Nama Mitra</label>
            <input
              name="nama_mitra"
              className="radius-2"
              type="text"
              placeholder="Nama Mitra..."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formInputContent flex">
            <label className="titleForm">Email Mitra</label>
            <input
              name="email_mitra"
              className="radius-2"
              type="email"
              placeholder="Email Mitra..."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formInputContent flex">
            <label className="titleForm">No. Telepon</label>
            <input
              name="no_telp_mitra"
              className="radius-2"
              type="number"
              placeholder="No. Telepon..."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formInputContent flex">
            <label className="titleForm">Alamat Mitra</label>
            <input
              name="alamat_mitra"
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
              type="text"
              placeholder="isi nama anda..."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formInputContent flex">
            <label className="titleForm">Email</label>
            <input
              name="email_personal"
              className="radius-2"
              type="email"
              placeholder="isi email anda..."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formInputContent flex">
            <label className="titleForm">No. Telepon</label>
            <input
              name="no_telp_personal"
              className="radius-2"
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
              type="text"
              placeholder="isi alamat anda..."
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <button className="btn radius-2">Simpan Perubahan</button>
      </section>
    </TopbarSettings>
  );
};

export default ProfileMitra;
