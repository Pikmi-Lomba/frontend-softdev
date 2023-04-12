import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosInstanceAdmin } from "../../../../apis/Api";
import AdminSidebar from "../../../../components/sidebar/AdminSidebar";
import "./detail.scss";
import Swal from "sweetalert2";

const DetailMitraDash = () => {
  const [detailDataMitra, setDetailDataMitra] = useState([]);
  const [dataVerification, setDataVerification] = useState({
    verify: "",
  });

  const [isLoading, setisLoading] = useState(true);

  const { id } = useParams();
  const tokenAdmin = Cookies.get("tokenAdmin");

  useEffect(() => {
    AxiosInstanceAdmin.get(`/${id}/mitra`, {
      headers: {
        Authorization: "Bearer " + tokenAdmin,
      },
    }).then((res) => {
      setDetailDataMitra(res.data.data.mitra);
      setisLoading(false);
    });
  }, [isLoading, tokenAdmin]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataVerification({ ...dataVerification, [name]: value });
  };

  const handleVerification = async (e) => {
    e.preventDefault();
    const namaMitra = detailDataMitra.nama_mitra;

    const updateverify = {
      verify: dataVerification.verify,
    };
    await AxiosInstanceAdmin.put(`/${id}/mitra`, updateverify, {
      headers: {
        Authorization: "Bearer " + tokenAdmin,
      },
    })
      .then(() => {
        setisLoading(false);
        Swal.fire({
          text: `Verifikasi Data akun Mitra ${namaMitra} berhasil diubah`,
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch(() => {
        Swal.fire({
          text: `Verifikasi Data akun Mitra ${namaMitra} berhasil diubah`,
          icon: "error",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      });
  };

  return (
    <AdminSidebar>
      <div className="DetailMitraAdmin flex">
        {detailDataMitra && (
          <div className="CardDetailInformation radius-4 flex">
            <div className="topDetailInformation flex">
              <div className={`menu verify ${detailDataMitra.verify}`}>
                {detailDataMitra.verify}
              </div>
              <div className="imageMitra">
                <img
                  src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  alt="kosong"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="contentMitra flex">
                <div className="title">{detailDataMitra.nama_mitra}</div>
                <div className="menu">{detailDataMitra.alamat}</div>
              </div>
            </div>
            <div className="line"></div>
            <div className="bottomDetailInformation flex">
              <div className="menu flex">
                <div className="nameData">Email</div>
                <div className="nameData">{detailDataMitra.email}</div>
              </div>
              <div className="menu flex">
                <div className="nameData">Telepon</div>
                <div className="nameData">{detailDataMitra.telepon}</div>
              </div>
              <div className="menu flex">
                <div className="nameData">no NPWP</div>
                <div className="nameData">{detailDataMitra.npwp}</div>
              </div>
              <div className="menu flex">
                <div className="nameData">nama usaha</div>
                <div className="nameData">{detailDataMitra.nama_usaha}</div>
              </div>
            </div>
          </div>
        )}
        <div className="flex VerificationOption radius-2 ">
          <input
            className=""
            name="verify"
            onChange={(e) => handleChange(e)}
            type="radio"
            value="agree"
          />
          <label className="pr-10">Setuju</label>
          <input
            className=""
            name="verify"
            onChange={(e) => handleChange(e)}
            type="radio"
            value="disagree"
          />
          <label>Tidak setuju</label>
          <button onClick={handleVerification}>submit verification</button>
        </div>
      </div>
    </AdminSidebar>
  );
};

export default DetailMitraDash;
