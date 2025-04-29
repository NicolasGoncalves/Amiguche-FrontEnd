import React from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
//import './login.css';

export default function Login() {
  return (
    <div className="container-login">

      {/* Logo canto superior direito */}
      <div className="logo-ami">
        <img src="./images/logo2.png" alt="Amiguche logo" className="img-logo" />
      </div>

      {/* Botão Voltar */}
      <Link to="/" className="nav-item">Voltar</Link>

      {/* Caixa de login */}
      <div className="login-box">
        <h2 className="title">Login</h2>
        <input type="email" placeholder="Email" className="input-linha" />
        <input type="password" placeholder="Senha" className="input-linha" />
        <button className="btn-login">Login</button>

        <Link to="/cadastro" className="btn-cadastrar">Criar conta</Link>

        <div className="btns-redessociais">
          <button className="btn-redes">
            <FaFacebookF />
            <span className="text-sm">Facebook</span>
          </button>

          <button className="btn-redes">
            <FaGooglePlusG />
            <span className="text-sm">Google</span>
          </button>
        </div>

      </div>
    </div>
  );
}
