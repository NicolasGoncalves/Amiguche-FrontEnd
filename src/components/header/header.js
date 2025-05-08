import React, {useEffect} from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import SlideCart from "../SlideCart";

import "./header.scss";

export default function Header() {
    const [cartOpen, setCartOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "sobremim", label: "Sobre" },
        { id: "novidades", label: "Novidades" },
        { id: "produtos", label: "Produtos" },
        { id: "contato", label: "Contato" },
    ];

    return (
        <>
            <header>
                <nav id="navbar">
                    <ul id="nav_list">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                className={`nav_item ${activeSection === item.id ? "active" : ""}`}
                            >
                                <a href={`#${item.id}`}>{item.label}</a>
                            </li>
                        ))}
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
