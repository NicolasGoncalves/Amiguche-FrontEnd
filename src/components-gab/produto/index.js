export default function Produto() {
  return (
    <div className="produto">
      <img src="./produto-img" className="" alt="Amigurumio Girafa" />
      <h3 className="nome-produto">Amigurumi Girafa</h3>
      <div className="preco">R$ 29,99</div>

      <div class="btns-produto">
        <button className="btn-comprar">Comprar</button>
        <button className="btn-detalhes">Detalhes</button>
      </div>
    </div>
  );
}
