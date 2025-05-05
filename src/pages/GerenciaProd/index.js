import React from "react";

import { useState } from "react";

export default function GerenciaProdutos() {
    const [nomeProduto, setNomeProduto] = useState("");
    const [precoProduto, setPrecoProduto] = useState("");
    const [descricaoProduto, setDescricaoProduto] = useState("");
    const [tipoProduto, setTipoProduto] = useState("");


    return (
        <section className="gerencia-produtos">
            
            <h1>Novo Produto</h1>
            <section className="panel">
                <div className="formulario">
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
                        <label>Tipo</label>
                        <select value={tipoProduto} onChange={(e) => setTipoProduto(e.target.value)}></select>
                    </div>
                    <div>
                        <button>Salvar</button>
                    </div>
                </div>
            </section>

            <h1>Produtos</h1>
            <section className="panel">
                <table>
                    <thead>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Preco</th>
                            <th>Descricao</th>
                            <th>Tipo</th>
                            <th>Arquivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* adicionar algoritmo para pegar as infos do produtos */}
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

    );
}