import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./header.scss";

export default function Header(){
    return (
        <header>
            <nav id="navbar">
                <ul id="nav_list">
                    <li className="nav_item active"><a href="#home">Home</a></li>
                    <li className="nav_item"><a href="#sobremim">Sobre</a></li>
                    <li className="nav_item"><a href="#novidades">Novidades</a></li>
                    <li className="nav_item"><a href="#produtos">Produtos</a></li>
                    <li className="nav_item"><a href="#contato">Contato</a></li>
                </ul>

                <ul id="nav_list2">
                    <FontAwesomeIcon icon={faCartShopping} id="cart-icon" />
                    <Link to="/login" className="item_login">Login</Link>
                </ul>

                
            </nav>
        </header>
    )
}
/* fazer a responsividade do bars 
instalar os icons npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
*/
