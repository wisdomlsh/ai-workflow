import axios, { type AxiosResponse } from "axios";


const service = axios.create({
    baseURL: '/',
    withCredentials: true,
});

service.interceptors.request.use((config: any) => {

    return config;
});

service.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        console.log(response)
        if (response.status === 200) return response;
        if (response?.data?.code === 0) {
            throw new Error(response.status.toString());
        }

        throw new Error(response.status.toString());
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default service;
