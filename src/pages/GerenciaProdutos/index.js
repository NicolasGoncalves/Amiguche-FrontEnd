import React from 'react';
import HeaderAdm from '../../components/headerAdm'


export default function GerenciaProdutos(){
    return (
        <main className='gerencia-produtos'>
            <HeaderAdm page="produtos"/>

                <h1>Produtos</h1>
                <section className='panel'>
                    <table>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Preço</th>
                            <th>Descrição do Produto</th>
                            <th>Imagem (jpg, png)</th>
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