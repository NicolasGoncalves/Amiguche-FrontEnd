import React from 'react';


export default function ListaPedidos() {
    
    return(
        <section className="lista-pedidos">
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
        </section>
    )
}