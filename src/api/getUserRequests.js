export const getUserRequests = async (userId) => {
  try {
    const url = `http://localhost:3977/api/v1/user/${userId}/requests`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Error al obtener los pedidos del usuario ${userId}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
