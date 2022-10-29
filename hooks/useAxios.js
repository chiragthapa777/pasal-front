import axios from 'axios'
import { getCookie, setCookie, deleteCookie } from "cookies-next";

const getInstance = (token) => {
    const axiosApiInstance = axios.create()
    axiosApiInstance.interceptors.request.use(
        (config) => {
            if (token ) {
                config.headers.common = {
                    token: `${token}`
                }
            }
            return config
        },
        (error) => {
            Promise.reject(error)
        }
    )
    return axiosApiInstance
}

export default function useAxios(token) {
    console.log()
    return getInstance(token)
}