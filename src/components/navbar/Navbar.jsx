import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import "./navbar.css";
import { NavLink } from "react-router-dom";

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
      </ul>
      <div className={nav ? "logo dark" : "logo"}>
        <h2>Logo</h2>
      </div>
      <div className="nav-icons">
        <button className="btn radius-3">Login </button>
      </div>
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
            <button className="btn radius-3">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
