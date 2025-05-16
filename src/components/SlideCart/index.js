import React, { useEffect, useState } from "react";
import "./index.scss";
import {
  getCart,
  removeFromCart,
  clearCart,
} from "../../services/carrinhoService.js";

export default function SlideCart({ isOpen, onClose }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setCart(getCart());
    }
  }, [isOpen]);

  const total = cart.reduce(
    (sum, item) => sum + item.preco * item.quantidade,
    0
  );

  function cartRemove(id) {
    removeFromCart(id);
    setCart(getCart());
  }

  function cartClear() {
    clearCart();
    setCart([]);
  }

  return (
    <div className={`slide-cart ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <div className="titulo">
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
          <h2>Seu Carrinho 🛒</h2>
        </div>
        <hr />
      </div>

      <div className="box-produtos">
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="produto">
              <img src={item.imagem} alt={item.nome}/>
              <div className="info">
                <h3>{item.nome}</h3>
                <p>Quantidade: {item.quantidade}</p>
                <p>Preço: R$ {item.preco}</p>
              </div>
              <div className="info-btn">
                <button
                  className="remover-btn"
                  onClick={() => cartRemove(item.id)}
                >
                  Remover
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <h3>Valor Total: R$ {total.toFixed(2)}</h3>

      {cart.length > 0 && (
        <div className="btn-container">
          <button className="checkout-btn">Finalizar Compra</button>
          <button className="clear-btn" onClick={cartClear}>
            Limpar Carrinho
          </button>
        </div>
      )}
    </div>
  );
}
