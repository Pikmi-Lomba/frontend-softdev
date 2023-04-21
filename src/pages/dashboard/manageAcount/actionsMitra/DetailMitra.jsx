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

  const handleVerification = (e) => {
    e.preventDefault();
    const namaMitra = detailDataMitra.nama_mitra;

    const updateverify = {
      verify: dataVerification.verify,
    };

    Swal.fire({
      title: "Apakah Anda ingin mengubah status dari Mitra",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        title: "titleSwal",
        popup: "popupSwal",
        actions: "popupSwal",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosInstanceAdmin.put(`/${id}/mitra`, updateverify, {
          headers: {
            Authorization: "Bearer " + tokenAdmin,
          },
        });
        setisLoading(true);
        Swal.fire({
          title: `Verifikasi Data akun Mitra ${namaMitra} berhasil diubah`,
          icon: "success",
          customClass: {
            title: "titleSwal",
            popup: "popupSwal",
            icon: "iconSwal",
          },
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: `Verifikasi Data akun Mitra ${namaMitra} gagal diubah`,
          icon: "error",
          customClass: {
            title: "titleSwal",
            popup: "popupSwal",
            icon: "iconSwal",
          },
        });
      }
    });
  };

  return (
    <AdminSidebar>
      <div className="DetailMitraAdmin flex">
        <div className="cardDetailMitra">
          {detailDataMitra && (
            <div className="CardsDetailInformation">
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
                    <div className="nameData">Kategori</div>
                    <div className="nameData">
                      {detailDataMitra.npwp === null ? (
                        <p>Non - pemerintah</p>
                      ) : (
                        <p>Pemerintah </p>
                      )}
                    </div>
                  </div>
                  <div className="menu flex">
                    <div className="nameData">no NPWP</div>
                    <div className="nameData">
                      {detailDataMitra.npwp === null ? (
                        <p>-</p>
                      ) : (
                        <p>{detailDataMitra.npwp}</p>
                      )}
                    </div>
                  </div>
                  <div className="menu flex">
                    <div className="nameData">nama usaha</div>
                    <div className="nameData">
                      {detailDataMitra.nama_usaha === null ? (
                        <p>-</p>
                      ) : (
                        <p>{detailDataMitra.nama_usaha}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="CardKTP radius-4 ">
                <p className="title">Foto KTP:</p>
                <div className="image radius-4 ">
                  <img src={detailDataMitra.ktp_image} alt="ktp_image" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex verificationCard radius-2 ">
          <p className="title">Verifikasi Akun Mitra: </p>
          <div className="optionVefication flex">
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
          </div>
          <button className="btn radius-2" onClick={handleVerification}>
            verifikasi
          </button>
        </div>
      </div>
    </AdminSidebar>
  );
};

export default DetailMitraDash;
