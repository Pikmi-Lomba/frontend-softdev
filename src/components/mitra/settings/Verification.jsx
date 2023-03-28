import "./style.scss";
import { useState } from "react";
import TopbarSettings from "./TopbarSettings";
import Validation from "./validations";

const VerificationMitra = () => {
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});

  const imageUpload = (e) => {
    const data = e.target.files[0];
    setImage(data);
  };
  const [showPromo, setShowPromo] = useState(false);

  const initialValue = {
    no_npwp: "",
    nama_usaha: "",
    image_ktp: "",
    output_value: "",
  };

  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleValidation = (e) => {
  //   e.preventDefault();

  //   setErrors(Validation(formData));
  // };

  console.log(errors);

  console.table(formData);

  return (
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
          <form className="validasiForm flex" onSubmit={handleValidation}>
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
        <div className="uploadKtp flex">
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
        <button className="btn radius-2 verifikasiButton">
          Verifikasi Akun
        </button>
      </div>
    </TopbarSettings>
  );
};

export default VerificationMitra;
