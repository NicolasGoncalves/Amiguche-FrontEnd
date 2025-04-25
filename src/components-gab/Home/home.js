import React from "react";

import "./home.css";

function Home(){
    return (
        <section id="home">

            <div id="banner">
                <img src="./public/logobear.png" alt="logo"/>
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
    )
}

export default Home;