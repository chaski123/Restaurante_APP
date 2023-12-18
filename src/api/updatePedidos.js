export const updatePedidos = async (pedidoId, newStatus) => {
  try {
    const response = await fetch(
      `http://localhost:3977/api/v1/requests/${pedidoId}/status`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ confirmado: newStatus }),
      }
    );

    if (response.ok) {
      const updatedPedido = await response.json();
      return updatedPedido;
    } else {
      console.error("Error al actualizar el estado del pedido!!");
    }
  } catch (error) {
    console.error("Error de red:", error);
  }
};
