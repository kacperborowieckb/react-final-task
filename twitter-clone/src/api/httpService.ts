import axios, { AxiosInstance } from "axios";

export const httpService: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})