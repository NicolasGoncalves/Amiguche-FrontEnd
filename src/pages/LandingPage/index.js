import "./index.scss";

import React from "react";
import Header from "../../components/header/header.js";
import Logo from "../../components/logo";


import { FaFacebook, FaInstagram } from "react-icons/fa";


export default function LandingPage() {
  return (
    <main className="landingPage">
      <Header />

      <section id="home">
        <div id="banner">
          <img src="./images/logobear.png" alt="logo" />
        </div>

        <div id="cta">
          <h1 className="title">Amiguche</h1>
          <h3 className="subtitle">
            Cada ponto, um pedacinho de <span>amor</span>.
          </h3>
        </div>

        <div className="circulo2"></div>
        <div className="circulo"></div>
      </section>

      <section className="sobremim">
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

        <div className="frame">
          <img src="./images/senhora.jpg" alt="Emília Paz" />
        </div>
      </section>

      <section></section>

      <section className="contato">
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

      <footer >
        <div className="novidades">
          <h2>Acompanhe as novidades</h2>
          <div>
            <FaFacebook className="icones"/>
            <FaInstagram className="icones"/>
          </div>
        </div>

        <div className="footer-contato">
          <h2>Entre em contato</h2>
        </div>

        <Logo imagem={"288px"} fonte={"48px"} style={{ marginBottom: "14em" }}/>

      </footer>

      
    </main>
  );
}
