import React from "react";
import { Link } from "react-router-dom";

function Cadastro() {
    return (
        <div className='conatainer-cadastro'>
            <div className='logo-ami'>
                <img src = "./images/logo2.png" alt="Amiguche logo" className="img-logo" />
            </div>

            <Link to="/login" className='nav-item'>
                Voltar
            </Link>

            <div className="login-box">
                <h2 className="title">Cadastro</h2>
                <input
                    type="nomecompleto"
                    placeholder="Nome Completo"
                    className="input-linha"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="input-linha"
                />
                <input
                    type="senha"
                    placeholder="Senha"
                    className="input-linha"
                />
                <input
                    type="senha"
                    placeholder="Confirmar Senha"
                    className="input-linha"
                />
                <button className="btn-login">
                    Cadastrar-se
                </button>
            </div>
        </div>
    )
}

export default Cadastro;