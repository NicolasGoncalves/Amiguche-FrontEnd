import React from "react";

import { useState } from "react";

export default function GerenciaPedidos() {

    return (
        <section className="gerencia-pedidos">
            <h1>Lista de Pedidos</h1>
            <section className="panel">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Produto Encomendado</th>
                            <th>Valor total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* adicionar algoritmo para pegar as infos dos pedidos */}
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
        </section>
    )
}