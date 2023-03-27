import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MitraSidebar from "../../../sidebar/MitraSidebar";
import addImage from "../../../../assets/image/addimage.png";

const CreateMenuEventMitra = () => {
  const [image, setImage] = useState("");

  const imageUpload = (e) => {
    const data = e.target.files[0];
    setImage(data);
  };

  console.log("upload Image, ", image);

  // RETURN TO MANAGE MENU EVENT
  const navigate = useNavigate();

  const backPage = () => {
    navigate(`/dashboard-mitra/events`);
  };
  // END RETURN TO MANAGE MENU EVENT

  // initial data form put data
  const initialValues = {
    nama_mitra: "",
    nama_event: "",
    lokasi_event: "",
    kategori_event: "",
    alamat_event: "",
    link_event: "",
    tanggal_pendaftaran_event: "",
    mulai_event: "",
    akhir_event: "",
    deskripsi_event: "",
  };

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // end initial data form put data

  console.log(formData);

  return (
    <MitraSidebar>
      <section className="ActionContainer">
        <div className="top flex">
          <h1>Tambah Event</h1>
        </div>
        <form className="bottom flex radius-5">
          <div className="left flex">
            <div className="imageUpload flex">
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                style={{ width: "130px", height: "130px", borderRadius: "50%" }}
                className="viewImage"
                alt=""
              />

              <label htmlFor="file" className="toolAddImage">
                <img src={addImage} alt="edit" />
              </label>
              <input
                type="file"
                id="file"
                onChange={imageUpload}
                accept="image/*"
                style={{ display: "none" }}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Nama Mitra</label>
              <input
                name="nama_mitra"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="right flex">
            <div className="formInputContent flex">
              <label className="title">Nama Event</label>
              <input
                name="nama_event"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Lokasi Kota</label>
              <input
                name="lokasi_event"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Kategori Event</label>
              <input
                name="kategori_event"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Alamat Event</label>
              <input
                name="alamat_event"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Link pendaftaran</label>
              <input
                name="link_event"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Tanggal pendaftaran</label>
              <input
                name="tanggal_pendaftaran_event"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Mulai Event</label>
              <input
                name="mulai_event"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Akhir Event</label>
              <input
                name="akhir_event"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputTextarea flex">
              <label className="title">Deskripsi Event: </label>
              <textarea
                name="deskripsi_event"
                className="radius-2"
                type="text"
                placeholder="Tuliskan deskripsi tentang event?"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="actionButton flex">
            <button className=" btn radius-2" onClick={backPage}>
              Kembali
            </button>
            <button className=" btn radius-2">Tambah Event</button>
          </div>
        </form>
      </section>
    </MitraSidebar>
  );
};

export default CreateMenuEventMitra;
