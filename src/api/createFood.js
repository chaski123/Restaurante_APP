export const createFood = async (formData) => {
  try {
    const url = "http://localhost:3977/api/v1/food";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error("Error al crear la comida");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
