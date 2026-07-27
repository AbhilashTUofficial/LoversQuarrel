import axios from "axios";
import dotenv from "dotenv";

// dotenv.config();

export const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  return config;
});
