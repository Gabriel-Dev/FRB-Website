import axios from "axios";

export const api = axios.create({
    baseURL: "http://3.138.134.113/api/",
    timeout: 5000
})