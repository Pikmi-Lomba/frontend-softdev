import { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import {
  MdOutlineMailOutline,
  MdLockOutline,
  MdPersonOutline,
} from "react-icons/md";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

import "./style.scss";
import image from "../../assets/image/img-hero.jpg";

const LoginPage = () => {
  // Show Password
  const [showPassword, setShowPassword] = useState(false);
  const isShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="privateRoute flex">
        <div className="cardForm flex">
          <div className="formLogin flex">
            <div className="logoCompany">
              {/* <img src={image} alt="aaa.png" /> */}
            </div>
            <div className="contents flex">
              <h2 className="title">Masuk</h2>
              <p className="subtitle">Silahkan masuk untuk melanjutkan</p>
            </div>
            <form className="getUser">
              <div className="email flex ">
                <MdPersonOutline className="icon" />

                <input type="text" placeholder="Nama Lengkap" required />
              </div>
              <div className="email flex ">
                <MdOutlineMailOutline className="icon" />

                <input type="email" placeholder="Email" required />
              </div>
              <div className="password flex ">
                <MdLockOutline className="icon" />
                <div className="eye ">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Passoword"
                    className="inputPass "
                  />
                  <div className="eyeIcon" onClick={isShowPassword}>
                    {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                  </div>
                </div>
              </div>
              <button className="btn radius-2">Masuk Sekarang</button>
              <div className="link">
                Sudah Punya akun? <Link to={`/login`}>Masuk</Link>
              </div>
            </form>
          </div>
        </div>
        <div className="imageLog flex">
          <img src={image} alt="aa.pg" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
