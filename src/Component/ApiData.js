
const ApiData = () => {
  const API = "https://reqres.in/api/users?page=1";
  return fetch(API)
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((e) => {
      console.log(e);
      throw new Error("Not get data....");
    });
};

export default ApiData;
