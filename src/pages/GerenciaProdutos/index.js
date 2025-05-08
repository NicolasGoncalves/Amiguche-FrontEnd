import React from "react";
import DetProduto from "../../components/detProduto";
import HeaderAdm from "../../components/headerAdm";
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.scss";

import { useState, useEffect } from "react";

export default function GerenciaProdutos() {
  const [isOpen, setIsOpen] = useState(false);
  const [produtos, setProdutos] = useState([]);

  async function buscarProdutos() {
    let url = "http://localhost:5000/produto";
    let resp = await axios.get(url);
    return resp.data;
  }

  async function buscarNome(id) {
    let url = "http://localhost:5000/produto/" + id;
    let resp = await axios.get(url);
    return resp.data.nome;
  }

  async function buscarVariante(id) {
    try {
      const url = `http://localhost:5000/variantes/produto/${id}`;
      const resp = await axios.get(url);
      return resp.data[0] || null;
    } catch (err) {
      console.error("Erro ao buscar variante:", err);
      return null;
    }
  }
  

  async function buscarImagem(id) {
    try {
      const variante = await buscarVariante(id);
      const url = `http://localhost:5000/imagem/produto/${id}/variante/${variante.id_variantes}`;
      const resp = await axios.get(url);
      return resp.data[0]?.caminho;
    } catch (err) {
      console.error("Erro ao buscar imagem:", err);
      return null;
    }
  }

  async function montarProdutos() {
    const produtosBase = await buscarProdutos();
  
    const lista = await Promise.all(
      produtosBase.map(async (produto) => {
        const variante = await buscarVariante(produto.id);
        const imagem = await buscarImagem(produto.id);
  
        return {
          nome: produto.nome,
          preco: variante?.preco ?? "N/A",
          descricao: variante?.descricao ?? "Sem descrição",
          imagem: imagem ?? "",
        };
      })
    );
  
    return lista;
  }
  

  useEffect(() => {
    async function carregar() {
      const lista = await montarProdutos();
      setProdutos(lista);
    }
    carregar();
  }, []);

  return (
    <main className="gerencia-produtos">
      <HeaderAdm page="produtos" />
      <DetProduto isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <section className="titulo">
        <div>
          <Link to="/admin">Voltar</Link>
          <h1>Produtos</h1>
          <button 
          onClick={() => setIsOpen(true)} className="btn-cadastro">Novo Produto</button>
        </div>
      </section>

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
              {produtos.map((item) => (
                <tr>
                  <td>{item.nome}</td>
                  <td>R$ {item.preco}</td>
                  <td>{item.descricao}</td>
                  <td>
                    <img src={item.imagem} alt="AmigurumiGirafa.png" />
                  </td>
                  <td>
                    <button
                      onClick={() => setIsOpen(true)}
                      className="btn-editar"
                    >
                      Editar
                    </button>
                    <button className="btn-excluir">Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
