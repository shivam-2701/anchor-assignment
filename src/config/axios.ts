import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL_DEPLOYEMENT!,
  headers: { "Content-Type": "application/json" },
});

export default instance;
