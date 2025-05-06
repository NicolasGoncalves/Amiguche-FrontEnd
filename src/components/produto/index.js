import React from "react";
import { useState } from "react";
import "./index.scss";

export default function Produto() {
  const [imagem, setImagem] = useState("/images/senhora.jpg");
  return (
    <div className="c-produto">
      <div className="pos1">
        <img src={imagem} alt="" />
        <h2 className="titulo">Boneca 1</h2>
        <h2 className="preco">R$ 90,00</h2>
      </div>

      <div className="pos2">
        <button className="btn1">Comprar</button>
        <button className="btn2">Veja Mais</button>
      </div>
    </div>
  );
}
