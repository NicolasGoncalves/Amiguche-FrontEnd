import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

import Header2 from "../../components/header2";
import {login} from "../../services/loginService.js";
import "./index.scss";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  function log(){
    if(email !== "" && senha !== ""){
      login(email, senha)
        .then(() => {
          console.log("Login bem-sucedido");
        })
        .catch((error) => {
          console.error("Erro ao fazer login:", error);
        });
    }
  }

  return (
    <main className="container-login">
      <Header2 link="/"/>

      <section className="login-form">
        <h1 className="login-title">Login</h1>

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" value={senha} onChange={(e)=>setSenha(e.target.value)}required />

        <Link to="/admin" className="btn-Link">
          <button className="btn-Login" onClick={log}>Login</button>
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
