import axios from "axios";

export const api = axios.create({
    baseURL: "https://frbseguros.com.br",
    timeout: 5000
})