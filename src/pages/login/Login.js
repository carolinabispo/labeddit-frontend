import React from "react";
//  css
import "../login/Login.css";

// img
import LOGO from "../../assets/logo-login.png";
import statusbar from "../../assets/statusbar.png";
import { Link } from "react-router-dom";

const Login = () => {





  return (
    <div className="main">
      <div className="statusBar">
        <img src={statusbar} alt="barra status do celular" />
      </div>
      <div className="logo">
        <img src={LOGO} alt="logo do labeddit" />
        <p>O projeto de rede social da Labenu</p>
      </div>
      <div className="formContainer">
        <form>
          <div className="input-group">
            <input type="text" name="email" required />
            <label>Username</label>
          </div>
          <div class="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>
        </form>
      </div>
      <div className="bnt">
        <div id="login">
        <button >Continuar</button>
        </div>
        <div id="line">
        <span></span>
        </div>
        <div id="register">
          <Link to={"/register"}>
          <button>Crie uma conta!</button>
          </Link>
        

        </div>
      </div>
    </div>
  );
};

export default Login;
