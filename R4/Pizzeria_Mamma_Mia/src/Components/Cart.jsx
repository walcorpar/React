import { useState } from "react";
import { pizzaCart } from "../assets/js/pizzas.js";

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const Sumar = (id) => {
    const newCart = cart.map((p) => 
      p.id === id ? { ...p, count: p.count + 1 } : p
    );
    setCart(newCart);
  };

  const Restar = (id) => {
    const newCart = cart.map((p) => {
      if (p.id === id) {
        return { ...p, count: Math.max(0, p.count - 1) };
      }
      return p;
    });
    setCart(newCart);
  };

  const total = cart.reduce((acc, p) => acc + (p.price * p.count), 0);

  return (
    <div className="card mt-5 p-4 shadow">
      <div className="row">
        {/* Lado Izquierdo: Lista de Productos */}
        <div className="col-md-8 cart">
          <div className="title mb-3">
            <div className="row">
              <div className="col">
                <h4><b>Detalles del pedido</b></h4>
              </div>
            </div>
          </div>
          
          {cart.map((item) => (
            <div className="row border-top border-bottom" key={item.id}>
              <div className="row main align-items-center py-3">
                <div className="col-2">
                  <img className="img-fluid rounded" src={item.img} alt={item.name} />
                </div>
                <div className="col">
                  <div className="row text-muted text-capitalize">{item.name}</div>
                  <div className="row small">Precio unitario: ${item.price.toLocaleString("es-CL")}</div>
                </div>
                <div className="col text-center">
                  <b>${(item.price * item.count).toLocaleString("es-CL")}</b>
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                  <button className="btn btn-outline-danger btn-sm" onClick={() => Restar(item.id)}>-</button>
                  <span className="mx-3 fw-bold">{item.count}</span>
                  <button className="btn btn-outline-primary btn-sm" onClick={() => Sumar(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))} 
        </div>

        {/* Lado Derecho: Resumen y Pago */}
        <div className="col-md-4 summary bg-light p-3 rounded">
          <div><h5><b>Resumen</b></h5></div>
          <hr />
          <div className="row mt-2">
            <div className="col">Subtotal</div>
            <div className="col text-end">${total.toLocaleString("es-CL")}</div>
          </div>
          <div className="row mt-4 mb-4" style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}>
            <div className="col">TOTAL</div>
            <div className="col text-end h5"><b>${total.toLocaleString("es-CL")}</b></div>
          </div>
          <button className="btn btn-dark w-100 py-2">IR A PAGAR</button>
        </div>
        
      </div>
    </div>
  );
}