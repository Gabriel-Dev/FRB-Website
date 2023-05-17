import axios from "axios";

export const api = axios.create({
    baseURL: "baseUrl",
    timeout: 5000
})