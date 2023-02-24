import "./sidebar.scss";
const Sidebar = () => {
  return (
    <>
      <section className="sidebarMenu flex">
        <div className="logo">Logo</div>
        <div className="menuSidebar">
          <li>Dashboard</li>
          <li>Pengguna</li>
          <li>Mitra</li>
          <li>Event</li>
        </div>
        <button className="btn logout">Logout</button>
      </section>
    </>
  );
};

export default Sidebar;
