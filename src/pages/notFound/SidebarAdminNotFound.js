import AdminSidebar from "../../components/sidebar/AdminSidebar";
import "./style.scss";

const SidebarAdminNotFound = () => {
  return (
    <>
      <AdminSidebar>
        <div className="emptyList-wrap">
          <img src="/assets/images/13525-empty.gif" alt="empty" />
          <p>Halaman Belum Tersedia! Silahkan Kembali</p>
        </div>
      </AdminSidebar>
    </>
  );
};

export default SidebarAdminNotFound;
