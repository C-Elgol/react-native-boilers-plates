// app/services/api.ts
import axios from "axios";

const API_URL = "http://10.55.213.105:8000/api";

const api = axios.create({
  baseURL: API_URL,
  timeout: 8000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Automatically attach Authorization token (if exists)
api.interceptors.request.use(async (config) => {
  // You can plug secure storage here
  return config;
});

export default api;
