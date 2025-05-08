import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import "./index.scss";

export default function DetProduto({ isOpen, onClose, ...props }) {
  const [idProduto, setIdProduto] = useState(props.id);
  const [nome, setNome] = useState("Amigurumi");
  const [preco, setPreco] = useState("R$ 90,00");
  const [descricao, setDescricao] = useState("Descrição do produto");
  const [img, setImage] = useState(<h1>Foto do Amigurumi</h1>);

  async function buscarNome() {
    let url = "http://localhost:5000/produto/" + props.id;
    let resp = await axios.get(url);
    return resp.data.nome;
  }

  async function buscarVariante() {
    let url = "http://localhost:5000/variantes/produto/" + props.id;
    let resp = await axios.get(url);
    return resp.data[0];
  }

  async function buscarImagem() {
    let url = `http://localhost:5000/imagem/produto/${props.id}/variante/${buscarVariante().id_variantes}`;
    try {
      let resp = await axios.get(url);
      console.log("imagem: "+resp);
      // Se vier mais de uma imagem, pegue a primeira
      
      return resp.data[0]?.caminho;

    } catch (err) {
      console.error("Erro ao buscar imagem:", err);
      return null;
    }
  }

  async function alterarProduto() {
    let url = "http://localhost:5000/imagem/" + props.id;

  }

  useEffect(() => {
    const montar_prod = () => {
      if(props.id){

        if(props.id!=0) {
          setNome(buscarNome());
          setPreco(`R$ ${buscarVariante.preco}`);
          setDescricao(buscarVariante.descricao);
            setImage(<img src={buscarImagem()} alt="" />);
        }
      }
    };

    montar_prod();
  }, [props.id]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <section className="detalhes-produto">
          <div className="sec1">
            <div>
              <Link>
                <h2 onClick={onClose}>Voltar</h2>
              </Link>
              <h1>Detalhes do Produto</h1>
            </div>
            <hr />
          </div>

          <div className="sec2">
            <div className="sec2-img">
              <div>{img}</div>

              <input type="file">
                <img src="/images/UploadIcon.png" alt="" />
                Fazer Upload
              </input>
            </div>

            <div className="sec2-info">

              <div className="sec2-info-input">
                <label id="nome">Nome: </label>
                <input id="nome" type="text" value={nome}/>
              </div>

              <div className="sec2-info-input">
                <label id="preco">Preço: </label>
                <input id="preco" type="number" value={preco}/>
              </div>

              <div className="sec2-info-area">
                <label id="desc">Descrição: </label>
                <textarea id="desc" cols="30" rows="10" value={descricao}></textarea>
              </div>

            </div>
          </div>

          <div className="sec3">
            <button>Salvar</button>
            <button>Excluir</button>
          </div>
        </section>
      </div>
    </div>
  );
}
