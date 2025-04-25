import React from "react";
import "./sobremim.css";

function Sobremim(){
    return (
        <section id="sobremim">
            <div className="sobremim">
                <h1 className="titleSection">Sobre mim</h1>
                <h2 className="texto">
                    Olá! Meu nome é Emília Paz, tenho 62 anos e sou apaixonada por artes manuais desde a infância.
                    Aprendi a arte do crochê aos 10 anos e, desde então, transformo linhas e agulhas em peças cheias de carinho e personalidade. Ao longo dos anos, me aprofundei em diferentes técnicas,
                    do bordado aos amigurumis — esses bonequinhos encantadores feitos à mão.
                    Cada criação é única e feita com muito cuidado. Também aceito encomendas personalizadas, para que você possa ter ou presentear alguém com algo realmente especial.
                </h2>
            </div>

            <div className="frame">
                <img src="public/senhora.jpg" alt="Emília Paz"/>
            </div>
        </section>
    )
}

export default Sobremim;