import "../register/Register.css";
import HeaderSingUp from "../../components/HeaderSingUp/HeaderSingUp";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <HeaderSingUp />
      <div className="title">
        <p>Olá, boas vindas ao LabEddit ;)</p>
      </div>
      <div className="container-form">
        <form className="form-register">
          <div className="input-container">
            <input type="text" name="name" required />
            <label>Apelido</label>
          </div>

          <div className="input-container">
            <input type="text" name="email" required />
            <label>Email</label>
          </div>
          <div className="input-container">
            <input type="password" name="password" required />
            <label>Senha</label>
          </div>
        </form>
      </div>
      <div className="terms">
              <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
              <span>
                <input type='checkbox' id="checkbox" />
                <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
              </span>
            </div>
            <div className="bnt-register">
             <Link to={"/home"}>
             <button>Cadastrar</button>

             </Link>
            </div>
    </div>
  );
};

export default Register;
