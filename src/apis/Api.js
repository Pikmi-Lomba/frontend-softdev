import axios from "axios";
import Cookies from "js-cookie";

// export const AxiosInstance = axios.create({
//   baseURL: "https://63e7dba65f3e35d898e9c8a7.mockapi.io/event",
// });

export const AxiosInstance = axios.create({
  baseURL: "https://closing-troll-71.hasura.app/api/rest/event",
  headers: {
    "x-hasura-admin-secret":
      "EorC1RCySzBU9eCCFRvYylS447gvVoLuyS0ee0LeDFimj1lfE2g4cf7t36Zovn0f",
  },
});

export const getDataEvent = async () => {
  const response = await AxiosInstance.get("/");
  return response;
};

// export const loginAdmin = async () => {
//   const response = await AxiosInstance.post("/auth/login");
//   return response.data;
// };

export const AxiosLocal = axios.create({
  baseURL: "http://localhost:5000/api",
});

// export const getDataMitra = async () => {
//   const { token } = Cookies.get("token");

//   const response = await AxiosLocal.get("/mitra", {
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   });
//   return response.data.data.mitra;
// };
