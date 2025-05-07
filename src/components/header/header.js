import React from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import SlideCart from "../SlideCart";

import "./header.scss";

export default function Header() {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <>
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
                        <FaShoppingCart
                            className="item-kart"
                            onClick={() => setCartOpen(true)}
                            style={{ cursor: "pointer" }}
                        />
                        <Link to="/login" className="item_login">Login</Link>
                    </ul>

                </nav>
            </header>

            <SlideCart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </>
    )
}
/* fazer a responsividade do bars */
