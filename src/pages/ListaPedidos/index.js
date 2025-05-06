import React from 'react';

import HeaderAdm from "../../components/headerAdm"
import "./index.scss";

export default function ListaPedidos() {

    return (
        <main className="lista-pedidos">
            <HeaderAdm />
            <h1>Lista de Pedidos</h1>
            <section className="panel">
                <div className="tabela-container">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Cliente</th>
                                <th>Produto Encomendado</th>
                                <th>Valor Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#001</td>
                                <td>João Silva</td>
                                <td>Amigurumi Girafa</td>
                                <td>R$ 50,00</td>
                                <td><span className="status entregue">Entregue</span></td>
                            </tr>
                            <tr>
                                <td>#002</td>
                                <td>Maria Costa</td>
                                <td>Branca de neve + Papai Noel</td>
                                <td>R$ 110,00</td>
                                <td><span className="status pendente">Pendente</span></td>
                            </tr>
                            <tr>
                                <td>#002</td>
                                <td>Maria Costa</td>
                                <td>Branca de neve + Papai Noel</td>
                                <td>R$ 110,00</td>
                                <td><span className="status pendente">Pendente</span></td>
                            </tr>
                            <tr>
                                <td>#002</td>
                                <td>Maria Costa</td>
                                <td>Branca de neve + Papai Noel</td>
                                <td>R$ 110,00</td>
                                <td><span className="status pendente">Pendente</span></td>
                            </tr>
                            <tr>
                                <td>#002</td>
                                <td>Maria Costa</td>
                                <td>Branca de neve + Papai Noel</td>
                                <td>R$ 110,00</td>
                                <td><span className="status pendente">Pendente</span></td>
                            </tr>
                            <tr>
                                <td>#002</td>
                                <td>Maria Costa</td>
                                <td>Branca de neve + Papai Noel</td>
                                <td>R$ 110,00</td>
                                <td><span className="status pendente">Pendente</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}