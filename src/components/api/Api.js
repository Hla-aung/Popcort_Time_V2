import axios from "axios";

export const API_URL = axios.create({
    baseURL: `${import.meta.env.VITE_URL}`
})

export const Api_Key = import.meta.env.VITE_KEY

export const YTS_URL = axios.create({
    baseURL: "https://yts.mx/api/v2"
})