export const deleteFood = async (id) => {
    try {
      const url = `http://localhost:3977/api/v1/food/${id}`; // Utiliza el ID proporcionado en la URL
      const options = {
        method: 'DELETE',
      };
  
      const res = await fetch(url, options);
  
      if (!res.ok) {
        throw new Error(`Error al eliminar la comida id:  ${id}`);
      }
  
      const data = await res.json();
      return data;
    } catch (err) {
      throw err;
    }
  };