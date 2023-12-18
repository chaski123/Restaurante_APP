import React, { useState, useEffect, useContext } from "react";
import { getUserRequests } from "../api/getUserRequests";
import { getRequestFetch } from "../api/getRequestFetch";
import { AuthContext } from "../context/AuthContext";
import { updatePedidos } from "../api/updatePedidos";
import Swal from "sweetalert2";
import Header from "../Components/Header";

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

  const cantidadProductos = requests.reduce(
    (acc, item) => acc + item.cantidadProductos,
    0
  );

  const TotalRecaudado = requests.reduce(
    (acc, item) => acc + item.precioFinal,
    0
  );

  const handleUpdateState = async (pedidoId) => {
    try {
      // Obtener el estado actual del pedido
      const pedido = requests.find((item) => item._id === pedidoId);
      const newStatus = !pedido.confirmado; // Cambiar el estado actual

      // Actualizar el estado del pedido en el servidor
      await updatePedidos(pedidoId, newStatus);

      // Actualizar localmente la lista de pedidos con el pedido actualizado
      setRequests((prevRequests) =>
        prevRequests.map((item) =>
          item._id === pedidoId ? { ...item, confirmado: newStatus } : item
        )
      );
      Swal.fire({
        title: "Perfecto!",
        text: "Pedido actualizado con exito!!",
        icon: "success",
        confirmButtonText: "OK",
      });
      // console.log("Pedido actualizado:", updatedPedido);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Error al actualizar el pedido",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
  };

  // Esto es lo que ve el administrador
  const renderPedidoDetails = () => {
    return (
      <>
        {requests.map((item) => (
          <div className="accordion-body bg-dark text-white p-4" key={item._id}>
            <h3 className="fs-4">Detalles del Pedido</h3>
            <p className="fs-5">Nombre: {item.usuario}</p>
            <p className="fs-5">Correo: {item.correo}</p>
            <p className="fs-5">Fecha: {item.fecha}</p>
            <p className="fs-5">
              Estado:
              {item.confirmado === false ? (
                <span className="badge bg-warning">Pendiente</span>
              ) : (
                <span className="badge bg-success">Realizado</span>
              )}
            </p>
            <p className="fs-5">Precio Final: ${item.precioFinal}</p>
            <p className="fs-5">
              Cantidad de Productos Comprados: {item.cantidadProductos}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => handleUpdateState(item._id)}
            >
              Actualizar Pedido
            </button>
          </div>
        ))}
        <div className="bg-info p-4">
          <h5>Cantidad Pedidos Confirmados: {cantidadProductos}</h5>
          <h5 className="m-0">Total Ganado: ${TotalRecaudado.toFixed(2)}</h5>
        </div>
      </>
    );
  };

  return (
    <>
      <Header />
      <div className="mt-5 text-center">
        {requests.length === 0 && user.role === "cliente" ? (
          <div className="alert alert-info m-5 p-4" role="alert">
            Usted no ha realizado ningun pedido en nuestro sitio
          </div>
        ) : (
          <>
            <h2>
              {user.role === "cliente"
                ? "Historial de Tus Pedidos"
                : "Historial de Todos los Pedidos"}
            </h2>
            {user.role === "cliente" ? (
              requests.map((item) => (
                <div
                  className="container bg-dark text-white p-4 mb-4"
                  key={item._id}
                >
                  <h3 className="fs-4">Detalles del Pedido Confirmado</h3>
                  <p className="fs-5">Nombre: {item.usuario}</p>
                  <p className="fs-5">Correo: {item.correo}</p>
                  <p className="fs-5">
                    Cantidad Productos: {item.cantidadProductos}
                  </p>
                  <p className="fs-5">Precio: {item.precioFinal}</p>
                  <p className="fs-5">Fecha: {item.fecha}</p>
                </div>
              ))
            ) : (
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
            )}
          </>
        )}
      </div>
    </>
  );
};

export default PedidosComponent;

{
  /* */
}
