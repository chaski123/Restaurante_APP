import React from "react";
import Header from "../Components/Header";
import { useCart } from "../context/CartProvider";

const Carrito = () => {
  const { cart, setCart } = useCart();

  const limpiarCarrito = () => {
    setCart([]);
  };

  const total = Math.round(
    cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
  );

  return (
    <>
      <Header />
      {cart.length === 0 ? (
        <div class=" container alert alert-info mt-2" role="alert">
          El carrito esta vacio !!!
        </div>
      ) : (
        cart.map((item) => (
          <>
            <div key={item._id} className="cart-item">
              <div>
                <h4>{item.name}</h4>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
              </div>
              <div>
                <p>Total: ${item.quantity * item.price}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => setCart(cart.filter((p) => p !== item))}
                >
                  Eliminar
                </button>
              </div>
            </div>
            <div className="cart-container m-auto p-2">
              <div className="total">
                <p>Total: ${total}</p>
                <p>Fecha: {new Date().toLocaleDateString()}</p>
                <p>Cantidad de Productos: {cart.length}</p>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => limpiarCarrito()}
              >
                Limpiar Carrito
              </button>
            </div>
          </>
        ))
      )}
    </>
  );
};

export default Carrito;
