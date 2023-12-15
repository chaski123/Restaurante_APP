export const createRequest = async (orderData) => {
  try {
    const url = "http://localhost:3977/api/v1/requests";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    };

    const res = await fetch(url, options);
    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Error al crear el pedido: ${errorMessage}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
