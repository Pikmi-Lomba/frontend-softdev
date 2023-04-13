import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://closing-troll-71.hasura.app/api/rest/event",
  headers: {
    "x-hasura-admin-secret":
      "EorC1RCySzBU9eCCFRvYylS447gvVoLuyS0ee0LeDFimj1lfE2g4cf7t36Zovn0f",
  },
});

export const AxiosInstanceUser = axios.create({
  baseURL: "https://travtinid.hasura.app/api/rest",
  headers: {
    "x-hasura-admin-secret":
      "q7ydPVM2fvmU3SHhO86bQ86JgMjo6R8pmM7I5r6yip4ymhl17HN6dW31suMYPsbd",
  },
});

export const getDataEvent = async () => {
  const response = await AxiosInstance.get("/");
  return response;
};

export const AxiosLocal = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const AxiosIntanceMitra = axios.create({
  baseURL: "http://localhost:5000/api/mitra",
});

export const AxiosInstanceAdmin = axios.create({
  baseURL: "http://localhost:5000/api/admin",
});
