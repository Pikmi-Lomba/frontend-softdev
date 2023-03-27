import { useState } from "react";
import Sidebar from "../../../../components/sidebar/AdminSidebar";
import addImage from "../../../../assets/image/addimage.png";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

import "./action.scss";
import { AxiosLocal } from "../../../../apis/Api";

const CreateMitra = () => {
  const dataInput = {
    image_mitra: "",
    nama_mitra: "",
    lokasi_mitra: "",
    email_mitra: "",
    handphone_mitra: "",
    password_mitra: "",
    ktp_mitra: "",
  };
  const token = Cookies.get("token");
  const [image, setImage] = useState("");
  const [dataForm, setDataForm] = useState(dataInput);
  const [navigate, setNavigate] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  // Image Upload
  const imageUpload = (e) => {
    const data = e.target.files[0];
    setImage(data);
    setDataForm({ ...dataForm, image_mitra: data });
  };

  // onchange value input
  const FormInput = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  // Create New mitra Users
  const handleAddData = async (e) => {
    e.preventDefault();

    // const errors = validate(dataForm);
    // setIsSubmit(true);

    const dataMitra = new FormData();
    dataMitra.append("nama_mitra", dataForm.nama_mitra);
    dataMitra.append("alamat", dataForm.lokasi_mitra);
    dataMitra.append("email", dataForm.email_mitra);
    dataMitra.append("password", dataForm.password_mitra);
    dataMitra.append("telepon", dataForm.handphone_mitra);
    dataMitra.append("ktp_image", dataForm.image_mitra);

    // console.log(dataMitra);

    await AxiosLocal.post("/mitra", dataMitra, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        console.log(res);
        console.log("berhasil");
        setNavigate(true);
      })
      .catch((err) => {
        console.log(err);
      });

    // e.preventDefault();
    // if (Object.keys(errors).length === 0 && isSubmit) {
    //   await AxiosLocal.post("/mitra", dataMitra, {
    //     headers: {
    //       Authorization: "Bearer " + token,
    //     },
    //   })
    //     .then((res) => {
    //       console.log(res);
    //       console.log("berhasil");
    //       setNavigate(true);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } else {
    //   Object.values(errors).map((err) => alert(err));
    // }
  };

  // Validations for Required form
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.nama_mitra) {
      errors.name_mitra = "Username Harus Diisi!";
    }
    if (!values.lokasi_mitra) {
      errors.lokasi_mitra = "Location Harus Diisi!";
    }
    if (!values.image_mitra) {
      errors.image_mitra = "Image Harus Diisi!";
    }

    if (!values.email_mitra) {
      errors.email_mitra = "EmailHarus Diisi!";
    } else if (!regex.test(values.email_mitra)) {
      errors.email_mitra = "This is not a valid email format!";
    }
    if (!values.password_mitra) {
      errors.password_mitra = "Password Harus Diisi!";
    } else if (values.password_mitra.length < 4) {
      errors.password_mitra = "Password must be more than 4 characters";
    }
    // else if (values.password_mitra.length > 10) {
    //   errors.password_mitra = "Password cannot exceed more than 10 characters";
    // }
    if (!values.handphone_mitra) {
      errors.handphone_mitra = "nomor handphone Harus Diisi!";
    }

    return errors;
  };

  // Navigate Return to Manage Mitra Pages
  if (navigate) {
    return <Navigate to={`/dashboard-admin/mitra`} />;
  }

  return (
    <>
      <Sidebar>
        <div className="actionManageMitra">
          <div className="top flex">
            <h1 className="title">Tambah Data Mitra</h1>
          </div>
          <div className="bottoms">
            <div className="bottom flex radius-5">
              <div className="left">
                <div className="imageUpload flex">
                  <img
                    src={
                      image
                        ? URL.createObjectURL(image)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                    }}
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
                    required
                  />
                </div>
              </div>
              <div className="right flex">
                <div className="formInputContent flex">
                  <label className="title">nama Mitra</label>
                  <input
                    name="nama_mitra"
                    className="radius-2"
                    type="text"
                    placeholder="Nama Mitra..."
                    value={dataForm.nama_mitra}
                    onChange={(e) => FormInput(e)}
                    required
                  />
                </div>
                <div className="formInputContent flex">
                  <label className="title">Lokasi</label>
                  <input
                    name="lokasi_mitra"
                    className="radius-2"
                    type="text"
                    placeholder="Lokasi Mitra..."
                    value={dataForm.lokasi_mitra}
                    onChange={(e) => FormInput(e)}
                    required
                  />
                </div>
                <div className="formInputContent flex">
                  <label className="title">Email</label>
                  <input
                    name="email_mitra"
                    className="radius-2"
                    type="text"
                    placeholder="Email Mitra..."
                    value={dataForm.email_mitra}
                    onChange={(e) => FormInput(e)}
                    required
                  />
                </div>
                <div className="formInputContent flex">
                  <label className="title">No. Handphone</label>
                  <input
                    name="handphone_mitra"
                    className="radius-2"
                    type="number"
                    placeholder="Handphone..."
                    value={dataForm.handphone_mitra}
                    onChange={(e) => FormInput(e)}
                    required
                  />
                </div>
                <div className="formInputContent flex">
                  <label className="title">Password</label>
                  <input
                    name="password_mitra"
                    className="radius-2"
                    type="text"
                    placeholder="Password Mitra..."
                    value={dataForm.password_mitra}
                    onChange={(e) => FormInput(e)}
                    required
                  />
                </div>
              </div>
              <div className="actionButton flex">
                <button className=" btn radius-2">Kembali</button>
                <button className=" btn radius-2" onClick={handleAddData}>
                  Tambah Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default CreateMitra;
