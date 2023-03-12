import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../../components/sidebar/Sidebar";
import addImage from "../../../../assets/image/addimage.png";
import image from "../../../../assets/image/img-hero.jpg";
import "./action.scss";
import { getDataMitra } from "../../../../apis/Api";

const CreateManageEvent = () => {
  const [image, setImage] = useState("");

  const imageUpload = (e) => {
    const data = e.target.files[0];
    setImage(data);
  };

  console.log("upload Image, ", image);

  // RETURN TO MANAGE MENU EVENT
  // const navigate = useNavigate();

  // const backPage = () => {
  //   navigate(`/dashboard-admin/event`);
  // };
  // END RETURN TO MANAGE MENU EVENT

  // initial data form put data
  // const initialValues = {
  //   nama_event: "",
  //   nama_mitra: "",
  //   event_organizer: "",
  //   alamat: "",
  //   mulai_event: "",
  //   akhir_event: "",
  //   link_pendaftaran: "",
  //   tanggal_pendaftaran: "",
  //   image_event: "",
  // };

  // const [formData, setFormData] = useState(initialValues);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // end initial data form put data

  // console.log({ ...formData });

  return (
    <Sidebar>
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
              />
            </div>
          </div>
          <div className="right flex">
            <div className="formInputContent flex">
              <label className="title">Nama Mitra</label>
              <input
                name="nama_mitra"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
              />
            </div>

            <div className="formInputContent flex">
              <label className="title">Lokasi Kota</label>
              <input
                name="nama_mitra"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
              />
            </div>

            <div className="formInputContent flex">
              <label className="title">Nama Mitra</label>
              <input
                name="nama_mitra"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
              />
            </div>

            <div className="formInputContent flex">
              <label className="title">Nama Mitra</label>
              <input
                name="nama_mitra"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Nama Mitra</label>
              <input
                name="nama_mitra"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
              />
            </div>

            <div className="formInputContent flex">
              <label className="title">Nama Mitra</label>
              <input
                name="nama_mitra"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Nama Mitra</label>
              <input
                name="nama_mitra"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
              />
            </div>

            <div className="formInputContent flex">
              <label className="title">Nama Mitra</label>
              <input
                name="nama_mitra"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
              />
            </div>

            <div className="formInputTextarea flex">
              <label className="title">Deskripsi Event: </label>
              <textarea
                className="radius-2"
                type="text"
                placeholder="apakah kamu ingin bermain dengan nana?"
              />
            </div>
          </div>
          <div className="actionButton flex">
            <button className=" btn radius-2">Kembali</button>
            <button className=" btn radius-2">Tambah Event</button>
          </div>
        </form>
      </section>
    </Sidebar>
  );
};

export default CreateManageEvent;
