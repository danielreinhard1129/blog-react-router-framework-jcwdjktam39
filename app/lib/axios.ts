import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://diversechicken-us.backendless.app",
});
