export const updateFood = async (data, id) => {
    const {name, state, details, price, category, image} = data
    try {
      const url = `http://localhost:3977/api/v1/food/${id}`; // Utiliza el ID proporcionado en la URL
      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          state: state,
          details:details,
          price: price,
          category: category,
          image: image
        }),
    }
      const res = await fetch(url, params);
  
      if (!res.ok) {
        throw new Error(`Error al actualizar la comida id:  ${id}`);
      }
      const data = await res.json();
      return data;
    } catch (err) {
      throw err;
    }
  };