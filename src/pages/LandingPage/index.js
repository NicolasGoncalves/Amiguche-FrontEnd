import "./index.scss";
import axios from "axios";
import { useState, useEffect } from "react";

import React from "react";
import Header from "../../components/header/header.js";
import Logo from "../../components/logo";
import Produto from "../../components/produto";

import { FaFacebook, FaInstagram } from "react-icons/fa";


export default function LandingPage() {
  const [produtos, setProdutos] = useState([]);
  
  async function buscarProdutos() {
    try {
      let url = "http://localhost:5000/produto";
      let resp = await axios.get(url);
      setProdutos(resp.data);
    } catch (err) {
      console.error("Erro ao buscar produtos:", err);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <main className="landingPage">
      <Header />

      <section id="home" className="Sec1">
        <img src="./images/logobear.png" alt="" />
        <div className="Sec1-texto">
          <h1>Amiguche</h1>
          <h2>
            Cada ponto, um pedacinho de <span>amor</span>
          </h2>
        </div>
      </section>

      <section id="sobremim" className="sobremim">
        <div className="areaTexto">
          <h1 className="titleSection">Sobre mim</h1>
          <h2 className="texto">
            Olá! Meu nome é Emília Paz, tenho 62 anos e sou apaixonada por artes
            manuais desde a infância. Aprendi a arte do crochê aos 10 anos e,
            desde então, transformo linhas e agulhas em peças cheias de carinho
            e personalidade.
          </h2>
          <h2 className="texto">
            Ao longo dos anos, me aprofundei em diferentes técnicas, do bordado
            aos amigurumis — esses bonequinhos encantadores feitos à mão. Cada
            criação é única e feita com muito cuidado. Também aceito encomendas
            personalizadas, para que você possa ter ou presentear alguém com
            algo realmente especial.
          </h2>
        </div>

        <img src="./images/senhora.jpg" alt="Emília Paz" />
      </section>

      {/* Section pro produtos */}
      <section id="produtos" className="produtos">
        <h1 className="titulo">Produtos</h1>
        <div className="lista-produtos">
          {produtos.map((item) => (
            <Produto
              key={item.id_produto}
              id={item.id_produto}
            />
          ))}
        </div>
      </section>

      <section id="contato" className="contato">
        <h1 className="titulo">Contato</h1>

        <div className="bloco">
          <h2>Entre em contato 💬</h2>

          <form>
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Seu e-mail" required />
            <textarea placeholder="Digite seu pedido..." required></textarea>
            <button type="submit">Fazer Pedido</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="novidades">
          <h2>Acompanhe as novidades</h2>
          <div>
            <FaFacebook className="icones" />
            <FaInstagram className="icones" />
          </div>
        </div>

        <div className="footer-contato">
          <h2>Entre em contato</h2>
        </div>

        <Logo
          imagem={"288px"}
          fonte={"48px"}
          style={{ marginBottom: "14em" }}
        />
      </footer>
    </main>
  );
}
