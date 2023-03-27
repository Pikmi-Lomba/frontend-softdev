import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import MitraSidebar from "../../sidebar/MitraSidebar";

const TopbarSettings = ({ children }) => {
  const activeLink = "activeTopbar menu";
  const normalLink = "menu";
  return (
    <>
      <MitraSidebar>
        <section className="settingsMitra flex">
          <h1 className="title">Settings</h1>
          <div className="topbarSettings flex">
            <NavLink
              to={`/dashboard-mitra/settings/`}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              My Profile
            </NavLink>
            <NavLink
              to={`/dashboard-mitra/settings/password`}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Password
            </NavLink>
            <NavLink
              to={`/dashboard-mitra/settings/verification`}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Verifikasi
            </NavLink>
          </div>
          <div>{children}</div>
        </section>
      </MitraSidebar>
    </>
  );
};

export default TopbarSettings;
