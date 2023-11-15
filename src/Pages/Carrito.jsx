import React, {useState} from "react";

const Carrito = () => {
    const [carrito, setCarrito] = useState([
      { nombre: "Producto 1", cantidad: 2, precio: 10 },
      { nombre: "Producto 2", cantidad: 1, precio: 20 },
      // Agrega más productos según sea necesario
    ]);
  
    const limpiarCarrito = () => {
      setCarrito([]);
    };
  
    const total = carrito.reduce(
      (acc, producto) => acc + producto.cantidad * producto.precio,
      0
    );
  
    return (
      <div className="cart-container m-auto p-2">
        <h2>Carrito de Compras</h2>
        {carrito.map((producto) => (
          <div key={producto.nombre} className="cart-item">
            <div>
              <h4>{producto.nombre}</h4>
              <p>Cantidad: {producto.cantidad}</p>
              <p>Precio: ${producto.precio}</p>
            </div>
            <div>
              <p>Total: ${producto.cantidad * producto.precio}</p>
              <button
                className="btn btn-danger"
                onClick={() => setCarrito(carrito.filter((p) => p !== producto))}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
        <div className="total">
          <p>Total: ${total}</p>
          <p>Fecha: {new Date().toLocaleDateString()}</p>
          <p>Cantidad de Productos: {carrito.length}</p>
        </div>
        <button className="btn btn-danger" onClick={limpiarCarrito}>
          Limpiar Carrito
        </button>
      </div>
    );
  };
  
  export default Carrito;