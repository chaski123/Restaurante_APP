export const updateFoods = async (id, data) => {
  try {
    const url = `http://localhost:3977/api/v1/food/${id}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, params);
    const request = await response.json();

    if (response.status !== 200) throw response;
    return request;
  } catch (err) {
    throw err;
  }
};
