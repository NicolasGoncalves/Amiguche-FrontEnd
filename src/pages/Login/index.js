import React from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logo from "../../components/logo";
import "./index.scss";

export default function Login() {
  return (
    <main className="container-login">
      <section className="login-header">
        <Link to="/" className="nav-item">
          Voltar
        </Link>
        <Logo imagem={"6em"} fonte={"25px"} style={{ color: "#4f2c14" }} />
      </section>

      <section className="login-form">
        <h1 className="login-title">Login</h1>

        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />

        <button className="btn-Login">Login</button>
        <button className="btn-Cadastro">Criar Conta</button>

        <div className="links">
          <button className="btn-links">
            <FaFacebookF className="icones"/>
            <span>Facebook</span>
          </button>

          <button className="btn-links">
            <FaGooglePlusG className="icones"/>
            <span>Google</span>
          </button>
        </div>
      </section>
    </main>
  );
}
