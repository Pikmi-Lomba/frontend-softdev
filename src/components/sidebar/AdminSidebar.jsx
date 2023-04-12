import "./sidebar.scss";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import TopBarDash from "../navbar/TopbarDash";
import { MdPerson, MdPeople, MdLogout, MdFestival } from "react-icons/md";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { Auth, AuthAdmin } from "../../utils/Auth";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import NotifToastify from "../modal/notifToastify";

const AdminSidebar = ({ children }) => {
  const activeLink = "activeSidebar MenuSide flex";
  const normalLink = "MenuSide flex";
  const [navigate, setNavigate] = useState(false);

  const handleLogout = () => {
    AuthAdmin.signOut();
    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to="/login/admin" />;
  }
  return (
    <div className="flex">
      <div className="Toggle">
        <HiOutlineMenuAlt4 className="icon" />
      </div>
      <section className="sidebarMenu flex">
        {/* TOP SIDEBAR => LOGO Company */}
        <div className="topSidebar">
          <div className="logo">Logo</div>
          <hr className="garis" />
        </div>
        {/* Middle SIDEBAR => MENUS in DASHBOARD */}
        <div className="menuSidebar flex">
          <NavLink
            to={`/dashboard-admin/`}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <BsGrid3X3GapFill className="icon " />
            <p className="nameMenuSide">Dashboard</p>
          </NavLink>
          <div className="titleDash">
            <p className="titleMenuDash">Pengguna</p>
          </div>
          <hr className="garis" />
          <NavLink
            to={`/dashboard-admin/user`}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <MdPerson className="icon " />
            <p className="nameMenuSide">Pengguna</p>
          </NavLink>
          <NavLink
            to={`/dashboard-admin/mitra`}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <MdPeople className="icon " />
            <p className="nameMenuSide">Mitra</p>
          </NavLink>
          <div className="titleDash">
            <p className="titleMenuDash">Menu Utama</p>
          </div>
          <hr className="garis" />
          <NavLink
            to={`/dashboard-admin/event`}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <MdFestival className="icon " />
            <p className="nameMenuSide">Menu Event</p>
          </NavLink>
        </div>
        {/* BOTTOM SIDEBAR =>  */}
        <div className="bottomSidebar">
          <div className="logout flex" onClick={handleLogout}>
            <MdLogout className="icon " />
            <p className="nameMenuSide">Logout</p>
          </div>
        </div>
      </section>
      <div className="RightDash">
        <TopBarDash />
        {/* <NotifToastify /> */}
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

export default AdminSidebar;
