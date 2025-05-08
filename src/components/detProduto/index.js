import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function DetProduto({ isOpen, onClose, ...props }) {
  const [img, setImage] = useState(<h1>Foto do Amigurumi</h1>);

  useEffect(() => {
    if (props.img !== undefined) setImage(<img src={props.img} alt="" />);
  }, [props.img]);

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

              <button>
                <img src="/images/UploadIcon.png" alt="" />
                Fazer Upload
              </button>
            </div>

            <div className="sec2-info">
              <div className="sec2-info-input">
                <label id="nome">Nome: </label>
                <input id="nome" type="text" />
              </div>

              <div className="sec2-info-input">
                <label id="preco">Preço: </label>
                <input id="preco" type="number" />
              </div>
              <div className="sec2-info-area">
                <label id="desc">Descrição: </label>
                <textarea id="desc" cols="30" rows="10"></textarea>
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
