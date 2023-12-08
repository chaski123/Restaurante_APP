export const updateUserStatus = async (userId, newStatus) => {
  try {
    const response = await fetch(
      `http://localhost:3977/api/v1/users/${userId}/status`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newStatus }),
      }
    );

    if (response.ok) {
      const updatedUser = await response.json();
      return updatedUser;
    } else {
      console.error("Error al actualizar el estado del usuario");
    }
  } catch (error) {
    console.error("Error de red:", error);
  }
};
