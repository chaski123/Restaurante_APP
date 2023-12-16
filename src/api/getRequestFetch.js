export const getRequestFetch = async () => {
  try {
    const url = "http://localhost:3977/api/v1/request";
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) throw res;
    return data;
  } catch (err) {
    throw err;
  }
};
