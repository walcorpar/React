export default function CardPizza() {
  
  let CardPizza_Menu = [
    {
      name: "Napolitana",
      price: 5950,
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      img: "https://cdn.papajohns.cl/thumbnails/pizzas/napolitana1_1691158458_medium.jpg"
    },
    {
      name: "The Works",
      price: 6950,
      ingredients: ["mozzarella","salchicha italiana","pepperoni","jamón","cebolla","pimiento verde","aceitunas negras","champiñón"],
      img: "https://cdn.papajohns.cl/thumbnails/pizzas/theworks1_1691159751_medium.jpg"
    },
    {
      name: "Pepperoni",
      price: 6950,
      ingredients: ["mozzarella", "pepperoni", "orégano"],
      img: "https://cdn.papajohns.cl/thumbnails/pizzas/superpepperoni__1691158022_medium.jpg"
    }
  ];

return (
    <div className="d-flex justify-content-around mt-5"> 
      {/* Usamos .map para iterar sobre el arreglo */}
      {CardPizza_Menu.map((pizza, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <img src={pizza.img} className="card-img-top" alt={pizza.name} />
          <div className="card-body">
            <h5 className="card-title">Pizza {pizza.name}</h5>
            <p className="card-text">
              <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center h4">
              Precio: ${pizza.price.toLocaleString("es-CL")}
            </li>
          </ul>
          <div className="card-body d-flex justify-content-around">
            <button className="btn btn-dark btn-sm">Añadir 🛒</button>
          </div>
        </div>
      ))}
    </div>
  );
}
