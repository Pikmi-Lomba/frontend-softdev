import "./topbar.scss";

const TopBarDash = () => {
  return (
    <>
      <section className="topbarContainer">
        <div className="MenuAccount flex">
          <img
            alt="Mitra Logo"
            className="imageAccount"
            src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          ></img>
          <div className="nameAccount">PT. Marka Kreasi Perdasa</div>
        </div>
      </section>
    </>
  );
};

export default TopBarDash;
