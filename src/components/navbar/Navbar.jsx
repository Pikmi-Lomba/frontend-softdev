import React, { useState } from "react";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import "./navbar.css";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <ul className="nav-menu">
        <NavLink to="/" smooth={true} duration={500}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/about-page" smooth={true} duration={500}>
          <li>About Us</li>
        </NavLink>
        <NavLink to="/contact-page" smooth={true} duration={500}>
          <li>Contact Us</li>
        </NavLink>
        <NavLink to="/mitra-page" smooth={true} duration={500}>
          <li>Mitra</li>
        </NavLink>
      </ul>
      <div className={nav ? "logo dark" : "logo"}>
        <h2>TravtinID</h2>
      </div>
      {/* <div className="nav-icons">
        <Link to={`/login`} className="btn radius-3">
          Login{" "}
        </Link>
      </div> */}
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <NavLink to="/" smooth={true} duration={500}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/about-page" smooth={true} duration={500}>
            <li>About Us</li>
          </NavLink>
          <NavLink to="/contact-page" smooth={true} duration={500}>
            <li>Contact Us</li>
          </NavLink>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <Link to={`/login`} className="btn radius-3">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
