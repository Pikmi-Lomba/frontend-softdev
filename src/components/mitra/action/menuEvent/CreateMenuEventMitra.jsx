import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MitraSidebar from "../../../sidebar/MitraSidebar";
import addImage from "../../../../assets/image/addimage.png";
import { ConfirmModal } from "../../../ConfirmModal/ConfirmModal";
import { AxiosIntanceMitra } from "../../../../apis/Api";
import Cookies from "js-cookie";

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
    nama_event: "",
    kategori: "",
    link_pendaftaran: "",
    deskripsi: "",
    lokasi_kota: "",
    alamat: "",
    tanggal_mulai: "",
    tanggal_akhir: "",

    // nama_mitra: "",
    // tanggal_pendaftaran_event: "",
  };

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // end initial data form put data
  // Modal
  const [isModalOpen, setisModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    desc: "",
    okText: "",
  });

  useEffect(() => {
    const getDataMitra = async () => {
      await AxiosIntanceMitra("/verification  ", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
        .then(({ data }) => {
          return data;
        })
        .catch((err) => {
          const { data, status } = err.response;
          setisModalOpen(true);
          setModalData({
            title: data.status,
            desc: data.message,
            okText: "Oke",
            resStatus: status,
          });
        });
    };

    getDataMitra();
  }, []);

  console.log(Object.keys(formData));

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();

    for (let formInputData of Object.keys(formData)) {
      if (!formData[formInputData]) {
        setisModalOpen(true);
        setModalData({
          title: "Data Kurang",
          desc: "Tolong Masukkan data dengan lengkap",
          okText: "Oke",
          resStatus: 400,
          redirect: false,
        });
      } else if (!image) {
        setisModalOpen(true);
        setModalData({
          title: "Gambar kosong",
          desc: "Tolong Masukkan Gambar Event",
          okText: "Oke",
          resStatus: 400,
          redirect: false,
        });
      }
    }

    form.append("nama_event", formData.nama_event);
    form.append("kategori", formData.kategori);
    form.append("link_pendaftaran", formData.link_pendaftaran);
    form.append("deskripsi", formData.deskripsi);
    form.append("lokasi_kota", formData.lokasi_kota);
    form.append("alamat", formData.alamat);
    form.append("tanggal_mulai", formData.tanggal_mulai);
    form.append("tanggal_akhir", formData.tanggal_akhir);
    form.append("image_event", image);

    await AxiosIntanceMitra.post("/add/events", form, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
      .then((res) => {
        console.log(res);
        setisModalOpen(true);
        setModalData({
          title: res.data.status,
          desc: res.data.message,
          okText: "Oke",
          resStatus: res.status,
          redirect: false,
        });
        navigate("/dashboard-mitra/events");
      })
      .catch(({response: res}) => {
        console.log(res);
        setisModalOpen(true);
        setModalData({
          title: res.data.status,
          desc: res.data.message,
          okText: "Oke",
          resStatus: res.status,
          redirect: false,
        });
      });
  };

  return (
    <MitraSidebar>
      <section className="ActionContainer">
        <div className="top flex">
          <h1>Tambah Event</h1>
        </div>
        <form onSubmit={onSubmit} className="bottom flex radius-5">
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
            {/* <div className="formInputContent flex">
              <label className="title">Nama Mitra</label>
              <input
                name="nama_mitra"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
                onChange={(e) => handleChange(e)}
              />
            </div> */}
          </div>
          <div className="right flex">
            <div className="formInputContent flex">
              <label className="title">Nama Event</label>
              <input
                name="nama_event"
                className="radius-2"
                type="text"
                placeholder="Nama Event..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Lokasi Kota</label>
              <input
                name="lokasi_kota"
                className="radius-2"
                type="text"
                placeholder="Nama Lokasi..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Kategori Event</label>
              <input
                name="kategori"
                className="radius-2"
                type="text"
                placeholder="Nama Kategori..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Alamat Event</label>
              <input
                name="alamat"
                className="radius-2"
                type="text"
                placeholder="Alamat..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Link pendaftaran</label>
              <input
                name="link_pendaftaran"
                className="radius-2"
                type="text"
                placeholder="Link Daftar..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* <div className="formInputContent flex">
              <label className="title">Tanggal pendaftaran</label>
              <input
                name="tanggal_pendaftaran_event"
                className="radius-2"
                type="text"
                placeholder="Nama Mitra..."
                onChange={(e) => handleChange(e)}
              />
            </div> */}
            <div className="formInputContent flex">
              <label className="title">Mulai Event</label>
              <input
                name="tanggal_mulai"
                className="radius-2"
                type="date"
                placeholder="Mulai Event..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="title">Akhir Event</label>
              <input
                name="tanggal_akhir"
                className="radius-2"
                type="date"
                placeholder="Akhit Event..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputTextarea flex">
              <label className="title">Deskripsi Event: </label>
              <textarea
                name="deskripsi"
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
            <button type="submit" className=" btn radius-2">
              Tambah Event
            </button>
          </div>
        </form>
      </section>
      <ConfirmModal
        isOpen={isModalOpen}
        title={modalData.title}
        desc={modalData.desc}
        okText={modalData.okText}
        onOk={() =>
          modalData.resStatus === 401
            ? navigate("/login")
            : modalData.redirect
            ? navigate("/dashboard-mitra/settings/")
            : setisModalOpen(false)
        }
        onCancel={() =>
          modalData.resStatus === 401
            ? navigate("/login")
            : modalData.redirect
            ? navigate("/dashboard-mitra/settings/")
            : setisModalOpen(false)
        }
      />
    </MitraSidebar>
  );
};

export default CreateMenuEventMitra;
