import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7020/Documento",
});

export default api;