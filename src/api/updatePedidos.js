// import React, { useState, useEffect } from "react";

// const PedidoComponent = () => {
//   const [pedidos, setPedidos] = useState([]);
//   const [newStatus, setNewStatus] = useState("");

//   useEffect(() => {
//     fetch("/api/v1/getFood")
//       .then((response) => response.json())
//       .then((data) => setPedidos(data))
//       .catch((error) => console.error("Error fetching foods:", error));
//   }, []);

//   const handleUpdatePedidos = (id) => {
//     const url = `/api/v1/food/${id}`;
//     fetch(url, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ status: newStatus }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.msg);

//         fetch("/api/v1/foods")
//           .then((response) => response.json())
//           .then((updatedFoods) => setPedidos(updatedFoods))
//           .catch((error) =>
//             console.error("Error fetching updated foods:", error)
//           );
//       })
//       .catch((error) => console.error("Error updating food:", error));
//   };

//   return (
//     <div>
//       <h1>Lista de Pedidos</h1>
//       <ul>
//         {foods.map((food) => (
//           <li key={food._id}>
//             {food.name} - Estado: {food.status}
//             <button onClick={() => handleUpdateFood(food._id)}>
//               Actualizar Estado
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FoodComponent;
