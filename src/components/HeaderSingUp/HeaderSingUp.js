import React from "react";
import logo from "../../assets/logo-register.png";
import "../HeaderSingUp/HeaderSingUp.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
const HeaderSingUp = () => {
  return (
    <>
      <div className="logo">
        <span className="return">
          <Link to={"/"}>
            <IoIosArrowRoundBack className="w-[35px] h-[35px] cursor-pointer text-[#4088CB]" />
          </Link>
        </span>
        <img src={logo} alt="logo labeddit" />
        <span className="entrarRegister">
          <Link to={"/home"}>
            <button>Entrar</button>
          </Link>
        </span>
      </div>
    </>
  );
};

export default HeaderSingUp;
