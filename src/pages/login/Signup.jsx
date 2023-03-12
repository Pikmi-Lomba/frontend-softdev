import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

// Icons
import {
  MdOutlineMailOutline,
  MdLockOutline,
  MdPersonOutline,
} from "react-icons/md";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

import "./style.scss";
import image from "../../assets/image/img-hero.jpg";
import { AxiosLocal } from "../../apis/Api";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  // Show Password
  const [showPassword, setShowPassword] = useState(false);
  const isShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submit = (e) => {
    e.preventDefault();

    AxiosLocal.post("/users/signup", {
      username: username,
      email: email,
      password: password,
    })
      .then((res) => {
        console.log(res);
        setNavigate(true);
      })
      .catch((err) => {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 400) {
          setErrMsg(err.response?.data?.message);
        } else if (err.response?.status === 401) {
          setErrMsg(err.response?.data?.message);
        } else {
          setErrMsg("Login Failed");
        }
      });
  };

  console.log(username, password, email);

  if (navigate) {
    return <Navigate to="/login" />;
  }

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
            <form className="getUser" onSubmit={submit}>
              <div className="email flex ">
                <MdPersonOutline className="icon" />

                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="email flex ">
                <MdOutlineMailOutline className="icon" />

                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="password flex ">
                <MdLockOutline className="icon" />
                <div className="eye ">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Passoword"
                    className="inputPass "
                    onChange={(e) => setPassword(e.target.value)}
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
