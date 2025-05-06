import React from 'react';

import HeaderAdm from "../../components/headerAdm"
import { Link } from "react-router-dom";
import "./index.scss";

export default function ListaPedidos() {
    
    return(
        <main className="lista-pedidos">

            <HeaderAdm/>

            <h1>Lista de Pedidos</h1>
            <section className="panel">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Produto Encomendado</th>
                        <th>Valor Total</th>
                        <th>Status</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>Teste</td>
                            <td>Teste</td>
                            <td>Teste</td>
                            <td>Teste</td>
                            <td>Teste</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    )
}