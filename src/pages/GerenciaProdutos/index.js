import React from 'react';
import Header2 from '../../components/header2'

import { useState } from 'react';


export default function GerenciaProdutos(){
    const [nomeProduto, setNomeProduto] = useState("")
    const [precoProduto, setPrecoProduto] = useState("")
    const [descricaoProduto, setDescricaoProduto] = useState("")


    return (
        <section className='gerencia-produtos'>
            
            <section className='panel'>
                <h1>Cadastro de Novo Produto</h1>
                <div className='formulario'>
                    <div>
                    <label>Nome</label>
                        <input type="text" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
                    </div>
                    <div>
                        <label>Preco</label>
                        <input type="text" value={precoProduto} onChange={(e) => setPrecoProduto(e.target.value)} />
                    </div>
                    <div>
                        <label>Descrição</label>
                        <input type="text" value={descricaoProduto} onChange={(e) => setDescricaoProduto(e.target.value)} />
                    </div>
                    <div>
                        <button>Salvar</button>
                    </div>
                </div>

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
            </section>
        </section>
    )
}