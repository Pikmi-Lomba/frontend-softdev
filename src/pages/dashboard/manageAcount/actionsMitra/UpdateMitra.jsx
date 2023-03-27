import { useNavigate, useParams } from "react-router-dom";
import "./action.scss";
import { useEffect, useState } from "react";
import Sidebar from "../../../../components/sidebar/AdminSidebar";
import addImage from "../../../../assets/image/addimage.png";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { AxiosLocal } from "../../../../apis/Api";

const UpdateMitraDash = () => {
  const { id } = useParams();
  const token = Cookies.get("token");

  const dataInput = {
    nama_mitra: "",
    lokasi_mitra: "",
    email_mitra: "",
    handphone_mitra: "",
    password_mitra: "",
    image_mitra: "",
  };

  const [image, setImage] = useState("");
  const [dataForm, setDataForm] = useState(dataInput);
  const [navigate, setNavigate] = useState(false);
  const navigateReturn = useNavigate();

  //   get Detail Mitra by id
  useEffect(() => {
    AxiosLocal.get(`/mitra/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        setDataForm({
          nama_mitra: res.data.data.mitra.nama_mitra,
          email_mitra: res.data.data.mitra.email,
          lokasi_mitra: res.data.data.mitra.alamat,
          password_mitra: res.data.data.mitra.password,
          handphone_mitra: res.data.data.mitra.telepon,
          image_mitra: res.data.data.mitra.ktp_image,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, token]);
  //   end get id

  const imageUpload = (e) => {
    const data = e.target.files[0];
    setImage(data);
    setDataForm({ ...dataForm, image_mitra: data });
  };

  const FormInput = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleUpdateData = (e) => {
    const dataMitra = new FormData();
    dataMitra.append("nama_mitra", dataForm.nama_mitra);
    dataMitra.append("alamat", dataForm.lokasi_mitra);
    dataMitra.append("email", dataForm.email_mitra);
    dataMitra.append("password", dataForm.password_mitra);
    dataMitra.append("telepon", dataForm.handphone_mitra);
    dataMitra.append("ktp_image", dataForm.image_mitra);

    e.preventDefault();
    AxiosLocal.put(`/mitra/${id}`, dataMitra, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then(() => {
        setNavigate(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (navigate) {
    return <Navigate to={`/dashboard-admin/mitra`} />;
  }

  const backToManage = () => {
    navigateReturn(-1);
  };

  return (
    <>
      <Sidebar>
        <div className="actionManageMitra">
          <div className="top flex">
            <h1>Edit Data Mitra</h1>
          </div>
          <div className="bottoms">
            <div className="bottom flex radius-5">
              <div className="left">
                <div className="imageUpload flex">
                  <img
                    src={
                      image
                        ? URL.createObjectURL(image)
                        : dataForm.image_mitra ||
                          "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
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
                  />
                </div>
              </div>
              <div className="actionButton flex">
                <button className=" btn radius-2" onClick={backToManage}>
                  Kembali
                </button>
                <button className=" btn radius-2" onClick={handleUpdateData}>
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

export default UpdateMitraDash;
