import Logo from "../logo/index.js";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import "./index.scss";

export default function HeaderAdm() {
  return (
    <section className="headerAdm">
      <Logo style={{ flexDirection: "row" }} imagem="75px" fonte="27px" />

      <div className="botoes">
        <Link className="link">
          <button className="btnArea">Gerenciamento de Produtos</button>
        </Link>

        <Link className="link">
          <button className="btnArea">Lista de Pedidos</button>
        </Link>
      </div>

      <div className="adm">
        <FaUserAlt className="icone"/>
        <h2>Admin</h2>
      </div>
    </section>
  );
}
