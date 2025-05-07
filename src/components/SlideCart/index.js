import React from "react";
import "./index.scss";

export default function SlideCart({ isOpen, onClose }) {
    return (
        <div className={`slide-cart ${isOpen ? "open" : ""}`}>
            <button className="close-btn" onClick={onClose}>✖</button>
            <h2>Seu Carrinho</h2>
            <ul>
                {/* Itens do carrinho aqui */}
            </ul>
            <button className="checkout-btn">Finalizar Compra</button>
        </div>
    );
}