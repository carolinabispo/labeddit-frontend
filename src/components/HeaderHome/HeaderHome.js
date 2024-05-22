import React from "react";
import logo from "../../assets/logo-register.png"
import { Link } from "react-router-dom";
const HeaderHome = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo-labeddit" />
        <span className="entrarRegister">
          <Link to="/">
          <button>Logout</button>

          </Link>
        </span>
      </div>
    </>
  );
};

export default HeaderHome;
