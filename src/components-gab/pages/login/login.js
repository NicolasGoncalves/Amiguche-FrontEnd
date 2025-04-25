import React from 'react';
import {FaGooglePlusG} from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
/*import './login.css';*/

function Login() {
    return (
        <div className="container-login">
      {/* Círculos decorativos */}
      <div className="circulo-login"></div>
      <div className="circulo-login2"></div>

      {/* Logo canto superior direito */}
      <div className="logo-ami">
        <img src="" alt="Amiguche logo" className="img-logo" />
        <span className="logo">amiguche</span>
      </div>

      {/* Botão Voltar */}
      <button className="nav-item">
        Voltar
      </button>

      {/* Caixa de login */}
      <div className="login-box">
        <h2 className="title">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="input-linha"
        />
        <input
          type="password"
          placeholder="Senha"
          className="input-linha"
        />
        <button className="btn-login">
          Login
        </button>
        <button className="btn-cadastrar">
          Criar conta
        </button>
        <div className="btns-redessociais">
          <button className="btn-redes">
            <FaFacebookF />
            <span className="text-sm">Facebook</span>
          </button>
          <button className="btn-redes">
            <FaGooglePlusG />
            <span className="text-sm">Google</span>
          </button>
        </div>
      </div>
    </div>
    )
}

export default Login;