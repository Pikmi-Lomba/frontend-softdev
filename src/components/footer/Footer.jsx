import "./footer.scss";

const FooterComp = () => {
  return (
    <footer>
      <div className="FooterContainer">
        <div className="footer">
          {/* ===Logo=== */}
          <div className="imageLogo">
            <h1 className="logo">Logo</h1>
          </div>
          {/* ===Menu Footer=== */}
          <div className="menuFooter">
            <div className="tentangKami">
              <p>Tentang Kami</p>
              <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
            <div className="contact">
              <p>Cotact</p>
              <ul>
                <li>XXX Webiste</li>
                <li>XXX Phone</li>
              </ul>
            </div>
            <div className="sosial">
              <p>Sosial</p>
              <ul>
                <li>Ho</li>
                <li>Ho</li>
                <li>Ho</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
