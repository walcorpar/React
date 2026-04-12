// 1. Recibimos setVista como Propiedad
export default function Navbar({ setVista }) {
  const total = 25000;
  const token = false; // Cambia a true para probar el otro estado

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container">
        {/* Es buena práctica que el logo también te lleve al inicio */}
        <a className="navbar-brand" href="#" onClick={() => setVista('home')}>
          🍕 Pizzería Mamma Mia!
        </a>
        <div className="navbar-nav me-auto">
          {/* 2. Agregamos el onClick a cada botón con su vista correspondiente */}
          <button 
            className="btn btn-sm btn-outline-light me-2" 
            onClick={() => setVista('home')}
          >
            Home
          </button>
          
          {token ? (
            <>
              <button className="btn btn-sm btn-outline-light me-2">
                Profile
              </button>
              <button className="btn btn-sm btn-outline-light me-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <button 
                className="btn btn-sm btn-outline-light me-2" 
                onClick={() => setVista('login')}
              >
                Login
              </button>
              <button 
                className="btn btn-sm btn-outline-light me-2" 
                onClick={() => setVista('register')}
              >
                Register
              </button>
            </>
          )}
        </div>
        <div className="navbar-nav ms-auto">
          {/* Conectamos el botón del carrito */}
          <button 
            className="btn btn-outline-info" 
            onClick={() => setVista('cart')}
          >
            🛒 Total: ${total.toLocaleString("es-CL")}
          </button>
        </div>
      </div>
    </nav>
  );
}