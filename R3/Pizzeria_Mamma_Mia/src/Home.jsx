//Home.jsx
import Header from "./Header.jsx";
import CardPizza from "./CardPizza.jsx";
import { pizzas } from "./assets/js/pizzas.js";

export default function Home() {
  return (
    <div>
      <header className="header-area">
        <Header />
      </header>

      <main className="main-area container mt-5">
        <div className="row">
          {pizzas.map((pizza) => (
            <div
              className="col-12 col-md-4 mb-4 d-flex justify-content-center" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                img={pizza.img}
                ingredients={pizza.ingredients}
                price={pizza.price}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}