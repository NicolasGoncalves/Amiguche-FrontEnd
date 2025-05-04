import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

import Header2 from "../../components/header2";
import "./index.scss";

export default function Login() {
  return (
    <main className="container-login">
      <Header2 link="/"/>

      <section className="login-form">
        <h1 className="login-title">Login</h1>

        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />

        <Link to="/" className="btn-Link">
          <button className="btn-Login">Login</button>
        </Link>
        <Link to="/cadastro">
          <button className="btn-Cadastro">Criar Conta</button>
        </Link>

        <div className="links">
          <button className="btn-links">
            <Link>
              <FaFacebookF className="icones" />
              <span>Facebook</span>
            </Link>
          </button>

          <button className="btn-links">
            <Link>
              <FaGoogle className="icones" />
              <span>Google</span>
            </Link>
          </button>
        </div>
      </section>
    </main>
  );
}
