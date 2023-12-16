import React, { useState, useEffect, useContext } from "react";
import { getUserRequests } from "../api/getUserRequests";
import { getRequestFetch } from "../api/getRequestFetch";
import { AuthContext } from "../context/AuthContext";
import Header from "../Components/Header";

// Falta trabajar la logica para actualizar el estado del pedido
// El pedido tiene que mostrar datos del usuario que realizo el pedido y la fecha del mismo

const PedidosComponent = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Si el usuario es un cliente, obtén solo sus pedidos
    if (user.role === "cliente") {
      getUserRequests(user._id)
        .then((data) => setRequests(data))
        .catch((error) => console.error("Error al obtener pedidos:", error));
    } else {
      // Si el usuario es un administrador, obtén todos los pedidos
      getRequestFetch()
        .then((data) => setRequests(data))
        .catch((error) =>
          console.error("Error al obtener todos los pedidos:", error)
        );
    }
  }, [user]);

  const renderPedidoDetails = () => {
    return (
      <>
        {requests.map((item) => (
          <div className="accordion-body bg-dark text-white" key={item._id}>
            <h3 className="fs-4">Detalles del Pedido Confirmado</h3>
            <p className="fs-5">Nombre: {item.usuario}</p>
            <p className="fs-5">Correo: {item.correo}</p>
            <p className="fs-5">Fecha: {item.fecha}</p>
            <p className="fs-5">
              Estado: {item.confirmado === false ? "pendiente" : "realizado"}
            </p>
            <p className="fs-5">Precio Final: ${item.precioFinal}</p>
            <p className="fs-5">
              Cantidad de Productos Comprados: {item.cantidadProductos}
            </p>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <Header />
      <div className="mt-5 text-center">
        {requests.length === 0 ? (
          <div className="alert alert-info m-5 p-4" role="alert">
            Usted no ha realizado ningun pedido en nuestro sitio
          </div>
        ) : (
          <>
            <h2>Historial de Pedidos</h2>
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
                    <span className="ms-2">{requests.length}</span>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  {renderPedidoDetails()}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PedidosComponent;
