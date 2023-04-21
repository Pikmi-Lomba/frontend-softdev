import { useState } from "react";
import { AxiosInstanceUser } from "../../../../apis/Api";
import { useEffect } from "react";
import Swal from "sweetalert2";

const UpdateMakanan = ({ isVisible, onClose, setLoading, id }) => {
  const initialValues = {
    nama_makanan: "",
    gambar_makanan: "",
    harga_makanan: "",
  };
  const [isLoading, setIsLoading] = useState(true);
  const [dataMakanan, setDataMakanan] = useState(initialValues);

  useEffect(() => {
    AxiosInstanceUser.get(`/menusfood/${id}`).then((res) => {
      setIsLoading(false);
      setDataMakanan({
        nama_makanan: res.data.menu_makanan_by_pk.nama_makanan,
        gambar_makanan: res.data.menu_makanan_by_pk.gambar_makanan,
        harga_makanan: res.data.menu_makanan_by_pk.harga_makanan,
      });
      console.log(res.data.menu_makanan_by_pk);
    });
  }, [isLoading, id, setLoading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataMakanan({ ...dataMakanan, [name]: value });
  };

  // Change data

  const handleChangeDataMakanan = async (e) => {
    e.preventDefault();
    await AxiosInstanceUser.put(`/menusfood/${id}`, dataMakanan)
      .then(() => {
        setLoading(true);
        onClose(true);
        Swal.fire({
          title: `Data Makanan Berhasil Di Update`,
          icon: "success",
          showClass: { popup: "animate__animated animate__fadeInDown" },
          hideClass: { popup: "animate__animated animate__fadeOutUp" },
          customClass: {
            title: "titleSwal",
            popup: "popupSwal",
            icon: "iconSwal",
          },
        });
      })

      .catch((err) => {
        console.log(err.response.data);
        Swal.fire({
          title: `Data Makanan Gagal Di Update`,
          icon: "error",
          showClass: { popup: "animate__animated animate__fadeInDown" },
          hideClass: { popup: "animate__animated animate__fadeOutUp" },
          customClass: {
            title: "titleSwal",
            popup: "popupSwal",
            icon: "iconSwal",
          },
        });
      });
  };

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  console.log(dataMakanan);
  return (
    <section
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center "
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[454px] flex flex-col bg-white p-5 radius-4 gap-3">
        <div className="title text-lg font-semibold">Edit Makanan</div>
        {dataMakanan.id_makanan}
        <div className="formInputContent flex">
          <label className="title">Nama Makanan</label>
          <input
            name="nama_makanan"
            value={dataMakanan.nama_makanan}
            className="radius-2"
            type="text"
            placeholder="Nama Makanan.."
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="formInputContent flex">
          <label className="title">Harga Makanan</label>
          <input
            name="harga_makanan"
            value={dataMakanan.harga_makanan}
            className="radius-2"
            type="text"
            placeholder="Harga Makanan..."
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="formInputContent flex">
          <label className="title">Image Copy Address</label>
          <input
            name="gambar_makanan"
            value={dataMakanan.gambar_makanan}
            className="radius-2"
            type="text"
            placeholder="Image Copy Address..."
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="actionButton flex gap-3 mt-2">
          <button
            className="btn radius-2"
            onClick={() => {
              onClose();
            }}
          >
            Kembali
          </button>
          <button className="btn radius-2" onClick={handleChangeDataMakanan}>
            Simpan
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpdateMakanan;
