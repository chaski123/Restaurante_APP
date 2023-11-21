export const getFoodFetch = async () => {
  try {
    const url = 'http://localhost:3977/api/v1/foods';
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) throw res;
    return data
  } catch (err) {
    throw err;
  }
};
