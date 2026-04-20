//Pizza.jsx
//Home.jsx
import { useState, useEffect } from "react";
import Header from "../Header.jsx";
import CardPizza from "../CardPizza.jsx";

export default function Pizzas() {
  const [pizzas, setPizzas] = useState([]); // 1. Estado inicial vacío

  const consultarApi = async () => {
      const url = "http://localhost:5000/api/pizzas/p001";
      const response = await fetch(url);
      const data = await response.json();
      setPizzas(data); // 3. Llenamos el estado con los datos reales
  };

  useEffect(() => {
    consultarApi();
  }, []);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div>
      <header className="header-area">
        <Header />
      </header>

      <main className="main-area container mt-5">
        <div className="row">
            <div
              className="col-12 col-md-4 mb-4 d-flex justify-content-center" key={pizza.id}>
              <CardPizza
                desc={pizza.desc}
                name={pizza.name}
                img={pizza.img}
                ingredients={pizza.ingredients}
                price={pizza.price}
              />
            </div>

        </div>
      </main>
    </div>
  );
}