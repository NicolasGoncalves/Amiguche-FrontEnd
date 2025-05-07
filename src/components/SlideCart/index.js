import React from "react";
import "./index.scss";

export default function SlideCart({ isOpen, onClose }) {
    return (
        <div className={`slide-cart ${isOpen ? "open" : ""}`}>
            <button className="close-btn" onClick={onClose}>✖</button>
            <h2>Seu Carrinho 🛒</h2>
            <hr></hr>

            <div className="box-produtos">
                {/*box para cada produto adicionado*/}
                <h3>Produto 1</h3>
            </div>

            <h3>Valor Total: </h3>

            <div className="btn-container">
                <button className="checkout-btn">Finalizar Compra</button>
            </div>
            
        </div>
    );
}