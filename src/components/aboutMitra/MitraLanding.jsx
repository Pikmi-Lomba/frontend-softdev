import { Link } from "react-router-dom";
import "./mitra.scss";

const MitraLanding = () => {
  return (
    <div className="MitraComp">
      <div className="topbarInfo">
        <h1 className="title">Mitra TrivtinID</h1>
        <p className="subtitle">
          Kami Merencangan Tujuan Indah Setiap Akhir Pekan{" "}
        </p>
      </div>
      <div className="bottom flex">
        <div className="topInfo">
          <p className="title">Cara Daftar jadi Mitra TrivtinID </p>
          <div className="desc">
            Kini TrivtinID hadir sebagai pilihan terbaru dalam mencari `Event`
            terdekat dari lokasi anda saat ini. TrivtinId juga mempunyai
            beberapa fitur lain dalam kemudahan mencari tempat yang rekomen
            untuk dikunjungi. Menjadi Bagian keluarga TrivtinID akan mendapatkan
            kunjungan dari menu Event yang ditampilkan. Berikut Beberapa cara
            mendaftar menjadi Mitra TrivtinID
          </div>
        </div>
        <div className="daftarMitra">
          <p className="title">Tahapan dalam Daftar Mitra TrivtinID</p>
          <li className="first">
            <b>Siapkan Semua Prasyarat Pendaftaran{` `}</b>
            Sebelum melangkah menjadi bagian TrivtinID, pastikan Anda telah
            mengetahui presyarat dan menyiapkan dokumen yang dibutukan
          </li>
          <li className="second">
            <b>Isi Form Pendaftaran{` `}</b>
            setelah Anda Melakukan Registrasi, Anda diharuskan login terlebih
            dahulu. Kemudian Anda akan di minta untuk mengisi Data Diri dan
            verifikasi. Diharapkan Anda mengisi dengan benar sesuai dengan data
            diri Anda.
          </li>
          <li>
            <b>Menunggu Admin Verifikasi{` `}</b>
            Jika sudah benar dalam mengisi bagian verifikasi dengan benar klik
            verifikasi dan tunggu Admin memverifikasi Akun yang Anda Daftarkan
          </li>
        </div>
        <div className="dokumenPra">
          <div className="title">Prasyarat Menjadi Mitra TrivtinID</div>
          <div className="content">
            <div className="subtitle">Mitra</div>
            <div className="desc">
              <li>Warga Negara Indonesia</li>
              <li>Dapat mengikuti kebijakan dari TrivtinID</li>
              <li>Umur minimal 18 Tahun saat pendaftaran</li>
            </div>
          </div>
          <div className="content">
            <div className="subtitle">Dokumen</div>
            <div className="desc">
              <li>e-KTP Asli</li>
              <li>{`Nomor NPWM (Tidak Wajib)`}</li>
            </div>
          </div>
        </div>
        <div className="bottomInfo">
          {`*Cara diatas merupakan ketentukan dan prasyarat yang harus dipenuhi oleh Anda. Dan juga Pastikan ikuti semua tahapdan dan pastikan upload dengan jelas KTP. `}
        </div>
        <div className="redirectMitra">
          <Link to={`/register`} className="btn radius-3">
            Daftar Mitra Di Sini
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MitraLanding;
