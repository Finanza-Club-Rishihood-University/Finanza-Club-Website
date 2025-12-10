import axios from 'axios';

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:7777",
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;
