import React, { useState, useEffect } from "react";
import { getFoodFetch } from "../api/getFoodFetch";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Falta trabajar la logica para actualizar el estado del pedido
// El pedido tiene que mostrar datos del usuario que realizo el pedido y la fecha del mismo

const PedidosComponent = () => {
  const [foods, setFoods] = useState([]);
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    getFoodFetch()
      .then((data) => setFoods(data))
      .catch((error) => console.log(error));
  }, []);

  const handleUpdateFood = (id) => {
    fetch(`/api/v1/updateFood/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.msg);

        fetch("/api/v1/getFood")
          .then((response) => response.json())
          .then((updatedFoods) => setFoods(updatedFoods))
          .catch((error) =>
            console.error("Error fetching updated foods:", error)
          );
      })
      .catch((error) => console.error("Error updating food:", error));
  };

  return (
    <>
      <Header />
      <div className="container p-3 mb-5">
        <h1>Lista de Pedidos</h1>
        <ul>
          {foods.map((food) => (
            <li className="mb-2" key={food._id}>
              {food.name} - Estado: {food.status}
              <button
                className="btn btn-success"
                onClick={() => handleUpdateFood(food._id)}
              >
                Actualizar Estado
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default PedidosComponent;
