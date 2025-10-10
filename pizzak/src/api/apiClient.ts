import axios from "axios";

<<<<<<< HEAD
export const BACKEND_URL = "http://localhost:8001/api"

const apiClient = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        "Content-Type": "application/json"
    },
});

export default apiClient;
=======
export const BACKEND_URL = "http://localhost:8001/api";

const apiClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
>>>>>>> 0b96ed2dd0cdb71729ec5347762aa5944d5c3aea
