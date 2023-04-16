import "./sidebar.scss";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import TopBarDash from "../navbar/TopbarDash";
import {
  MdPerson,
  MdPeople,
  MdLogout,
  MdFestival,
  MdFastfood,
  MdTerrain,
  MdHotel,
} from "react-icons/md";
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
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="logo">TrivtinID</div>
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
          <NavLink
            to={`/dashboard-admin/kuliner`}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <MdFastfood className="icon " />
            <p className="nameMenuSide">Menu Kuliner</p>
          </NavLink>
          <NavLink
            to={`/dashboard-admin/wisata`}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <MdTerrain className="icon " />
            <p className="nameMenuSide">Menu Wisata</p>
          </NavLink>
          <NavLink
            to={`/dashboard-admin/hotel`}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <MdHotel className="icon " />
            <p className="nameMenuSide">Menu Hotel</p>
          </NavLink>

          {/* <div>
            <button onClick={() => setIsOpen(!isOpen)} className="nameMenuSide">
              Menu
            </button>
            {isOpen && (
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            )}
          </div> */}
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
