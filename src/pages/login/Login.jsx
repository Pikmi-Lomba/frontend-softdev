import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

// Icons
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

import "./style.scss";
import image from "../../assets/image/img-hero.jpg";
import { AxiosInstanceAdmin, AxiosIntanceMitra, AxiosLocal } from "../../apis/Api";
import { useRef } from "react";
import { AxiosIntanceMitra } from "../../apis/Api";

const LoginPage = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [navigate, setNavigate] = useState(false);

  console.log("ini aladah role:", role);

  // Show Password
  const [showPassword, setShowPassword] = useState(false);
  const isShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submit = async (e) => {
    e.preventDefault();
    AxiosIntanceMitra.post("/login", {
      email: email,
      password: password,
    })
      .then((res) => {
        Cookies.set("token", res.data.data.accessToken);
        setNavigate(true);
        setEmail("");
        setPassword("");
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
      const { role } = response.data.data;

      Cookies.set("token", response.data.data.accessToken);
      Cookies.set("role", role);
      if (role === "admin") {
        window.location.href = "/dashboard-admin";
      } else if (role === "mitra") {
        window.location.href = "/dashboard-mitra";
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  if (navigate) {
    return <Navigate to="/dashboard-mitra" />;
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
                <MdOutlineMailOutline className="icon" />

                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
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
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <div className="eyeIcon" onClick={isShowPassword}>
                    {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                  </div>
                </div>
              </div>
              {errMsg && <div>{errMsg}</div>}
              <button className="btn radius-2">Masuk Sekarang</button>
              <div className="link">
                Belum Punya akun? <Link to={`/register`}>Daftar</Link>
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
