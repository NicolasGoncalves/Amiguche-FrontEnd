import React from "react";

import HeaderAdm from "../../components/headerAdm";
import { Link } from "react-router-dom";
import "./index.scss";

export default function ListaPedidos() {
  return (
    <main className="lista-pedidos">
      <HeaderAdm page="pedidos" />

      <section className="titulo">
        <div>
          <Link to="/adm">Voltar</Link>

          <h1>Lista de Pedidos</h1>
        </div>
      </section>

      <section className="painel">
        <table className="tabela-pedidos">
          <thead>
            <tr>
              <th className="id">ID</th> <hr/>
              <th className="cli">Cliente</th> <hr/>
              <th className="pro">Produto Encomendado</th> <hr/>
              <th className="val">Valor Total</th> <hr/>
              <th className="sta">Status</th> 
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="id">Teste</td> <hr/>
              <td className="cli">Teste</td> <hr/>
              <td className="pro">Teste</td> <hr/>
              <td className="val">Teste</td> <hr/>
              <td className="sta">Teste</td> 
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
