import React, { useEffect } from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import SlideCart from "../SlideCart";
import axios from "axios";

import "./header.scss";

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [role, setRole] = useState("");
  const [client, setClient] = useState("");

  useEffect(() => {
      loged();

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

  // console.log("role "+ role);

  async function loged() {
    let user = localStorage.getItem("user");
    user=JSON.parse(user);
    if (user){
      setRole(user.role);
    } 

    if (user.role === "client") {
      let id = localStorage.getItem("client").id;
      let url = "http://localhost:5000/cliente/"+id;
      let resp=await axios.get(url);
      setClient(resp.data.nome.chatAt(0).toUpperCase());
    }
  }

  return (
    <>
      <header>
        <nav id="navbar">
          <ul id="nav_list">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`nav_item ${
                  activeSection === item.id ? "active" : ""
                }`}
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

            {role === "user" ? (
              <Link to="/admin" className="item_login">
                Admin
              </Link>
            ) : role === "client" ? (
              <Link to="/" className="item_login">
                {client}
              </Link>
            ) : role === "" ? (
              <Link to="/login" className="item_login">
                Login
              </Link>
            ) : null}
          </ul>
        </nav>
      </header>

      <SlideCart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
/* fazer a responsividade do bars */
