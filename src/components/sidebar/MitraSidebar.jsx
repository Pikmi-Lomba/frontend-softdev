import "./sidebar.scss";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import TopBarDash from "../navbar/TopbarDash";
import { MdPerson, MdPeople, MdLogout, MdFestival } from "react-icons/md";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { Auth } from "../../utils/Auth";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const MitraSidebar = ({ children }) => {
  const [navigate, setNavigate] = useState(false);

  const handleLogout = () => {
    Auth.signOut();
    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="flex">
      <div className="Toggle">
        <HiOutlineMenuAlt4 className="icon" />
      </div>
      <section className="sidebarMenu flex">
        <div className="topSidebar">
          <div className="logo">Logo</div>
          <hr className="garis" />
        </div>
        <div className="menuSidebar flex">
          <NavLink to={`/dashboard-mitra/`} className="MenuSide flex">
            <BsGrid3X3GapFill className="icon " />
            <p className="nameMenuSide">Home</p>
          </NavLink>
          <hr className="garis" />
          <NavLink to={`/dashboard-mitra/events`} className="MenuSide flex">
            <MdFestival className="icon " />
            <p className="nameMenuSide">Events</p>
          </NavLink>
        </div>
        <div className="bottomSidebar ">
          <NavLink
            to={`/dashboard-mitra/settings`}
            className="LogoutMitra flex"
          >
            <MdLogout className="icon " />
            <p className="nameMenuSide">Settings</p>
          </NavLink>
          <div className="LogoutMitra flex" onClick={handleLogout}>
            <MdLogout className="icon " />
            <p className="nameMenuSide">Logout</p>
          </div>
        </div>
      </section>
      <div className="RightDash">
        <TopBarDash />
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

export default MitraSidebar;
