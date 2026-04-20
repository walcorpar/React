export default function CardPizza({desc, img, ingredients, name, price}) {
return (
  <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
    <img src={img} className="card-img-top" alt={desc} />
    <div className="card-body">
      <h5 className="card-title">Pizza {name}</h5>
      <p className="card-text">
         <strong>Ingredientes:</strong>
         <ul>
        {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
        ))}
        </ul>
      </p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item text-center h4">
        Precio: ${price.toLocaleString("es-CL")}
      </li>
    </ul>
    <div className="card-body d-flex justify-content-around">
      <button className="btn btn-dark btn-sm">Añadir 🛒</button>
    </div>
  </div>
);
}
