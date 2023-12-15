import React, { useContext, useState, useEffect } from "react";
import Header from "../Components/Header";
import { MdDelete, MdRemoveShoppingCart } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { useCart } from "../context/CartProvider";
import { AuthContext } from "../context/AuthContext";
import { createRequest } from "../api/createRequest";
import { getUserRequests } from "../api/getUserRequests";

const Carrito = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const { cart, setCart } = useCart();

  const cleanCart = () => {
    setCart([]);
  };

  const total = Math.round(
    cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
  );

  const cantidadTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Funcion para manejar la compra del carrito
  const HandleCheckOut = async () => {
    const { name, email } = user;
    const idUser = user._id;
    const date = new Date().toISOString();
    const compra = true;

    try {
      if (compra === true) {
        const orderData = {
          usuario: name,
          correo: email,
          fecha: date,
          confirmado: false,
          precioFinal: total,
          cantidadProductos: cantidadTotal,
          idUser: idUser,
        };

        await createRequest(orderData);
        setCart([]);
      } else {
        console.log("La compra no se pudo realizar");
      }
    } catch (err) {
      console.log("Error al crear el pedido:", err);
    }
  };

  useEffect(() => {
    getUserRequests(user._id)
      .then((data) => setRequests(data))
      .catch((error) => console.error("Error al obtener pedidos:", error));
  }, []);

  // const clearRequst = () => {
  //   setRequests([]);
  // };

  return (
    <>
      <Header />
      <h2 className="container text-center mt-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <div className=" container alert alert-info mt-2" role="alert">
          El carrito está vacío !!!
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item._id} className="cart-item">
              <div className="container mt-5 bg-dark text-white p-2">
                <h4 className="fs-4">{item.name}</h4>
                <p className="fs-4">Cantidad: {item.quantity}</p>
                <p className="fs-4">Precio: ${item.price}</p>
              </div>
              <div className="container bg-dark text-white p-2">
                <p className="fs-5">
                  Total: ${Math.round(item.quantity * item.price)}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => setCart(cart.filter((p) => p !== item))}
                >
                  <MdDelete className="fs-5 me-1 mb-1" />
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <div className="container bg-dark text-white p-3 p-2 mt-4 mb-5">
            <div className="total">
              <p className="fs-3">Precio Final: ${total}</p>
              <p className="fs-4">Fecha: {new Date().toLocaleDateString()}</p>
              <p className="fs-4">Cantidad de Productos: {cantidadTotal}</p>
            </div>
            <button className="btn btn-danger" onClick={() => cleanCart()}>
              <MdRemoveShoppingCart className="fs-5 me-1 mb-1" />
              Limpiar Carrito
            </button>
            <button
              className="btn btn-primary ms-2"
              onClick={() => HandleCheckOut()}
            >
              <FaMoneyCheckAlt className="fs-5 me-1 mb-1" />
              Comprar
            </button>
          </div>
        </>
      )}

      <div className="accordion m-5">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Pedidos Realizados
              {requests.length > 0 && (
                <span className="ms-2">{requests.length}</span>
              )}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            {requests.map((item) => (
              <div className="accordion-body" key={requests._id}>
                <h3>Detalles del Pedido Confirmado</h3>
                <p>Usuario: {item.usuario}</p>
                <p>Correo: {item.correo}</p>
                <p>Fecha: {item.fecha}</p>
                <p>Precio Final: ${item.precioFinal}</p>
                <p>
                  Cantidad de Productos Comprados:
                  {item.cantidadProductos}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrito;
