import React from "react";

function Contato() {
    return (
        <section id="contato">
            <h1 className="titleSection">Contato</h1>
            <section id="contato-container">
                <div className="circulo-contato"></div>
                <div className="circulo-contato2"></div>

                <div className="form-card">
                    <h2>Entre em contato💬</h2>
                    <form>
                        <input type="text" placeholder="Seu nome" required />
                        <input type="email" placeholder="Seu e-mail" required />
                        <textarea placeholder="Digite seu pedido..." required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </section>

        </section>
    )
}

export default Contato;