import React, { useState, useEffect } from "react";

const PedidosComponent = () => {
  const [foods, setFoods] = useState([]);
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    fetch("/api/v1/getFood")
      .then((response) => response.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error("Error fetching foods:", error));
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
    <div>
      <h1>Lista de Pedidos</h1>
      <ul>
        {foods.map((food) => (
          <li key={food._id}>
            {food.name} - Estado: {food.status}
            <button onClick={() => handleUpdateFood(food._id)}>
              Actualizar Estado
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PedidosComponent;
