import { useState } from "react";
import "./style.css";

function App() {
  const [basket, setBasket] = useState(false);
  const [detail, setDetail] = useState(false);

  const handleBasket = () => {
    setBasket(true);
  };
  const handleDelete = () => {
    setBasket(false);
  };
  const handleDetail = () => {
    setDetail(!detail);
  
  };

  return (
    <div>
      <div className="card">
        <div className="image">
          <img
            src="https://static.cdn.oskelly.ru/product/224820/item-c0e022c0-6b4c-4b71-92b7-c88649dcbaaf.webp"
            alt=""
          />
        </div>
        <div className="other">
          <div className="title">
            {" "}
            <p>Adidas Yeezy</p>
            <p>120$</p>
          </div>
          <div className="rodBlock">
            <div className="button">
              <button onClick={handleDetail}>Детали</button>
            </div>
            <div className={detail ? "adddetail" : "deletedetail"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur sequi et, eligendi rerum debitis corrupti doloremque!
            </div>
          </div>
        </div>
        <div className="blockdown">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            sapiente incidunt
          </p>
          <div className="button2">
            <button onClick={handleBasket}>
              {basket ? "Уже в корзине" : "Добавить в корзину"}
            </button>
          </div>
          <div onClick={handleDelete} className={basket ? "add" : "delete"}>
            <a href="#">Удалить из корзины</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
