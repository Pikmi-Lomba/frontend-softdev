import "./style.scss";
import { useState } from "react";
import TopbarSettings from "./TopbarSettings";

const VerificationMitra = () => {
  const [image, setImage] = useState("");

  const imageUpload = (e) => {
    const data = e.target.files[0];
    setImage(data);
  };
  const [showPromo, setShowPromo] = useState(false);

  return (
    <TopbarSettings>
      <div className="VerificationComponents">
        <div className="flex VerificationOption">
          <input
            className=""
            name="output_value"
            // onChange={handleChange}
            type="radio"
            value="normal"
            onClick={() => setShowPromo(true)}
          />
          <label className="pr-10">Pemerintah</label>
          <input
            className=""
            name="output_value"
            // onChange={handleChange}
            type="radio"
            value="promo"
            onClick={() => setShowPromo(false)}
          />
          <label>non Pemerintah</label>
        </div>
        {showPromo ? (
          <section className="validasiForm flex">
            <div className="formInputContent flex">
              <label className="titleForm">NPWP</label>
              <input
                name="no_npwp"
                className="radius-2"
                type="number"
                placeholder="Masukan nomor npwp..."
                // onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formInputContent flex">
              <label className="titleForm">Nama Usaha</label>
              <p className="sub">*nama usaha yang terdaftar dalam npwp</p>
              <input
                name="email_mitra"
                className="radius-2"
                type="email"
                placeholder="Masukan nama usaha..."
                // onChange={(e) => handleChange(e)}
              />
            </div>
          </section>
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
