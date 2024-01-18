import anelone from "./images/anelone.png";
import aneltwo from "./images/aneltwo.png";
import anelthree from "./images/anelthree.png";
export default function Itens() {
  return (
    <div className="alldiv">
      <div className="divanel">
        <img className="img2" src={aneltwo}></img>
        <div className="divdescription">
          <h2 className="subanel">
            ANEL DE VEDAÇÃO 6895 PARA RESPIRADOR 3800 - 3M
          </h2>
          <h3 className="price">R$ 7,90</h3>
          <button className="btnbuy">COMPRAR PRODUTO</button>
        </div>
      </div>
      <div className="divanel">
        <img className="img1" src={anelone}></img>
        <div className="divdescription">
          <h2 className="subanel">
            ANEL DE VEDAÇÃO PARA BACIA SANITÁRIA NOVA GERAÇÃO CENSI ÚNICO
          </h2>
          <h3 className="price">R$ 19,90</h3>
          <button className="btnbuy">COMPRAR PRODUTO</button>
        </div>
      </div>

      <div className="divanel">
        <img className="img3" src={anelthree}></img>
        <div className="divdescription">
          <h2 className="subanel">ANEL DE VEDAÇÃO ORING ENCAPSULADO</h2>
          <h3 className="price">R$ 2,99</h3>
          <button className="btnbuy">COMPRAR PRODUTO</button>
        </div>
      </div>
    </div>
  );
}