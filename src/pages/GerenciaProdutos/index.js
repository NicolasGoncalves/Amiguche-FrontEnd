import React from 'react';
import HeaderAdm from '../../components/headerAdm'
import './index.scss'

import { useState } from 'react';


export default function GerenciaProdutos() {
    return (
        <main className='gerencia-produtos'>
            <HeaderAdm page="produtos"/>

            <h1>Produtos</h1>
            <section className="panel">
                <div className="tabela-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome do Produto</th>
                                <th>Preço</th>
                                <th>Descrição do Produto</th>
                                <th>Imagem (jpg, png)</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Amigurumi Girafa</td>
                                <td>R$ 50,00</td>
                                <td>Amigurumi Girafa, feito com fio de algodão</td>
                                <td>
                                    AmigurumiGirafa.png
                                </td>
                                <td>
                                    <button className="btn-editar">Editar</button>
                                    <button className="btn-excluir">Excluir</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>


    )
}