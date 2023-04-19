import "./style.scss";
import { useEffect, useState } from "react";
import TopbarSettings from "./TopbarSettings";
import Validation from "./validations";
import { AxiosIntanceMitra } from "../../../apis/Api";
import { Auth } from "../../../utils/Auth";
import Cookies from "js-cookie";
import { ConfirmModal } from "../../ConfirmModal/ConfirmModal";
import { useNavigate } from "react-router-dom";

const initialValue = {
  npwp: "",
  nama_usaha: "",
  image_ktp: "",
  output_value: "",
};

const VerificationMitra = () => {
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});
  const [showPromo, setShowPromo] = useState(false);
  const [formData, setFormData] = useState(initialValue);

  const navigate = useNavigate();

  // Modal
  const [isModalOpen, setisModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    desc: "",
    okText: "",
  });

  useEffect(() => {
    const getDataMitra = async () => {
      await AxiosIntanceMitra("/profile", {
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
            redirect: true,
          });
        });
    };

    const getDataVerif = async () => {
      await AxiosIntanceMitra("/verification", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }).then((res) => {
        const { data, status } = res;

        console.log(data);
        if (data.message === "data anda di tolak") {
          setisModalOpen(true);
          setModalData({
            title: data.status,
            desc: data.message,
            okText: "Oke",
            resStatus: status,
            redirect: false,
          });
        } else if (data.message !== "Belum ada verifikasi") {
          setisModalOpen(true);
          setModalData({
            title: data.status,
            desc: data.message,
            okText: "Oke",
            resStatus: status,
            redirect: true,
          });
        }
      });
    };

    getDataVerif();
    getDataMitra();
  }, []);

  const imageUpload = (e) => {
    const data = e.target.files[0];
    setImage(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleValidation = (e) => {
  //   e.preventDefault();

  //   setErrors(Validation(formData));
  // };

  const submitHandler = () => {
    const form = new FormData();
    if (showPromo) {
      form.append("npwp", formData.npwp);
      form.append("nama_usaha", formData.nama_usaha);
      form.append("ktp", image);
    } else {
      form.append("ktp", image);
    }

    AxiosIntanceMitra.post("/verification", form, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
      .then(({ data, status }) => {
        console.log(data);
        setisModalOpen(true);
        setModalData({
          title: data.status,
          desc: data.message,
          okText: "Oke",
          resStatus: status,
          redirect: true,
        });
      })
      .catch(({ data, status }) => {
        console.log(data);
        setisModalOpen(true);
        setModalData({
          title: 'Data Di update',
          desc: 'Mohon menunggu Proses Verifikasi ulang',
          okText: "Oke",
          resStatus: status,
          redirect: true,
        });
      });
  };

  console.log(errors);

  console.table(formData);

  return (
    <>
      <TopbarSettings>
        <div className="VerificationComponents">
          <div className="flex VerificationOption">
            <input
              className=""
              name="output_value"
              // onChange={(e) => handleChange(e)}
              type="radio"
              value="pemerintah"
              onClick={() => setShowPromo(true)}
            />
            <label className="pr-10">Pemerintah</label>
            <input
              className=""
              name="output_value"
              // onChange={(e) => handleChange(e)}
              type="radio"
              value="nonpemerintah"
              onClick={() => setShowPromo(false)}
            />
            <label>non Pemerintah</label>
          </div>
          {showPromo ? (
            <form className="validasiForm flex">
              <div className="formInputContent flex">
                <label className="titleForm">NPWP</label>
                <input
                  name="npwp"
                  className="radius-2"
                  type="number"
                  placeholder="Masukan nomor npwp..."
                  onChange={(e) => handleChange(e)}
                />
                {errors.npwp && <p>{errors.npwp}</p>}
              </div>
              <div className="formInputContent flex">
                <label className="titleForm">Nama Usaha</label>
                <p className="sub">*nama usaha yang terdaftar dalam npwp</p>
                <input
                  name="nama_usaha"
                  className="radius-2"
                  type="text"
                  placeholder="Masukan nama usaha..."
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <button>submit</button>
            </form>
          ) : null}
          <div className="uploadKtp flex" onSubmit={submitHandler}>
            <div className="topUploadKtp">
              <h4 className="title">Unggah KTP Anda</h4>
              <p className="subTitle">
                Pastikan KTP Anda masih berlaku dan jelas, tanpa keruskan fisik
              </p>
            </div>
            <div className="imageKtpUpload flex">
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                style={{ width: "90%", height: "200px", borderRadius: "8px" }}
                className="viewImage"
                alt=""
              />

              <div className="flex contentUploadKTP">
                <p>Upload Foto KTP Anda untuk verifikasi Akun</p>
                <label htmlFor="file" className="toolAddImage btn radius-2">
                  Unggah
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={imageUpload}
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>

              {/* <button htmlFor="file" className="btn ">
            Upload KTP{" "}
          </button> */}
            </div>
          </div>
          <button
            className="btn radius-2 verifikasiButton"
            onClick={submitHandler}
          >
            Verifikasi Akun
          </button>
        </div>
      </TopbarSettings>
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
    </>
  );
};

export default VerificationMitra;
