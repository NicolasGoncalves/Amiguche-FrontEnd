import React, { useEffect } from "react";
import { useState } from "react";
import DetProduto from "../detProduto";
import "./index.scss";

import axios from "axios";

export default function Produto(props) {
  const [nome, setNome] = useState("Amigurumi");
  const [imagem, setImagem] = useState("./images/Boneca-girafa.png");
  const [preco, setPreco] = useState("R$ 90,00");
  const [isOpen, setIsOpen] = useState(false);

  async function buscarNome() {
    let url = "http://localhost:5000/produto/" + props.id;
    let resp = await axios.get(url);
    return resp.data.nome;
  }

  async function buscarVariante() {
    let url = "http://localhost:5000/variantes/produto/" + props.id;
    let resp = await axios.get(url);
    console.log(`R$ ${parseFloat(resp.data[0].preco)}`);
    return resp.data[0];
  }

  async function buscarImagem() {
    let url = `http://localhost:5000/imagem/produto/${props.id}/variante/${
      buscarVariante().id_variantes
    }`;
    try {
      let resp = await axios.get(url);
      // Se vier mais de uma imagem, pegue a primeira
      return resp.data[0]?.caminho;
    } catch (err) {
      console.error("Erro ao buscar imagem:", err);
      return null;
    }
  }
  useEffect(() => {
    if (props.id) {
      setNome(buscarNome());
      setPreco(`R$ ${parseFloat(buscarVariante.preco)}`);
      if(buscarImagem()==null) 
        setImagem(buscarImagem());
    }
  }, [props.id]);

  return (
    <div className="c-produto">
      {/* <DetProduto isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
      <div className="pos1">
        <img src={imagem} alt="imagem do produto" />
        <h2 className="titulo">{nome}</h2>
        <h2 className="preco">{preco}</h2>
      </div>

      <div className="pos2">
        <button className="btn1">Comprar</button>
        <button className="btn2">Veja Mais</button>
      </div>
    </div>
  );
}
