import "./sidebar.scss";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import TopBarDash from "../navbar/TopbarDash";

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
          <div className="MenuSide flex">
            <AiOutlineClose className="icon " />
            <p className="nameMenuSide">Dashboard</p>
          </div>
          <div className="titleDash">
            <p className="titleMenuDash">Pengguna</p>
          </div>
          <hr className="garis" />
          <div className="MenuSide flex">
            <AiOutlineClose className="icon " />
            <p className="nameMenuSide">Pengguna</p>
          </div>
          <div className="MenuSide flex">
            <AiOutlineClose className="icon " />
            <p className="nameMenuSide">Mitra</p>
          </div>
          <div className="titleDash">
            <p className="titleMenuDash">Menu Utama</p>
          </div>
          <hr className="garis" />
          <div className="MenuSide flex">
            <AiOutlineClose className="icon " />
            <p className="nameMenuSide">Menu Event</p>
          </div>
        </div>
        <div className="logout flex">
          <AiOutlineClose className="icon " />
          <p className="nameMenuSide">Logout</p>
        </div>
      </section>
      <div className="RightDash">
        <TopBarDash />
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
