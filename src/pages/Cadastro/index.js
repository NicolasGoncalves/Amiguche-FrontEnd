import React from "react";
import Header2 from "../../components/header2";
import { Link } from "react-router-dom";

import "./index.scss";

function Cadastro() {
  return (
    <main className="conatainer-cadastro">
      <Header2 link="/login" />

      <section className="login-box">
        <h2 className="title">Cadastro</h2>
        <input
          type="nomecompleto"
          placeholder="Nome Completo"
          className="input-linha"
          required
        />
        <input type="email" placeholder="Email" className="input-linha" required/>
        <input type="senha" placeholder="Senha" className="input-linha" />
        <input
          type="senha"
          placeholder="Confirmar Senha"
          className="input-linha"
          required
        />
        <button className="btn-Login">
            <Link>Cadastrar-se</Link> 
        </button>
      </section>
    </main>
  );
}

export default Cadastro;
