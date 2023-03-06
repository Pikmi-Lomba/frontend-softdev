import "./sidebar.scss";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import TopBarDash from "../navbar/TopbarDash";
import { MdPerson, MdPeople, MdLogout } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="Toggle">
        <HiOutlineMenuAlt4 className="icon" />
      </div>
      <section className="sidebarMenu flex">
        <div className="logo">Logo</div>
        <hr className="garis" />
        <div className="menuSidebar flex">
          <NavLink to={`/dashboard-admin/`} className="MenuSide flex">
            <AiOutlineClose className="icon " />
            <p className="nameMenuSide">Dashboard</p>
          </NavLink>
          <div className="titleDash">
            <p className="titleMenuDash">Pengguna</p>
          </div>
          <hr className="garis" />
          <NavLink to={`/dashboard-admin/user`} className="MenuSide flex">
            <MdPerson className="icon " />
            <p className="nameMenuSide">Pengguna</p>
          </NavLink>
          <NavLink to={`/dashboard-admin/mitra`} className="MenuSide flex">
            <MdPeople className="icon " />
            <p className="nameMenuSide">Mitra</p>
          </NavLink>
          <div className="titleDash">
            <p className="titleMenuDash">Menu Utama</p>
          </div>
          <hr className="garis" />
          <NavLink to={`/dashboard-admin/event`} className="MenuSide flex ">
            <AiOutlineClose className="icon " />
            <p className="nameMenuSide">Menu Event</p>
          </NavLink>
        </div>
        <NavLink to={`/login`} className="logout flex">
          <MdLogout className="icon " />
          <p className="nameMenuSide">Logout</p>
        </NavLink>
      </section>
      <div className="RightDash">
        <TopBarDash />
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
