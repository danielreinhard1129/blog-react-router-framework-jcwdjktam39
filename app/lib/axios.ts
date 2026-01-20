import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://diversechicken-us.backendless.app",
});

export const axiosInstance2 = axios.create({
  baseURL: "http://localhost:8000",
});
