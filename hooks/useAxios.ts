import axios from 'axios'
import { getCookie, setCookie, deleteCookie } from "cookies-next";

const getInstance = (token:any) => {
    const axiosApiInstance = axios.create()
    axiosApiInstance.interceptors.request.use(
        (config:any) => {
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

export default function useAxios(token?:any) {
    if(token){
        return getInstance(token)
    }else{
        // return getInstance("")
        return getInstance(getCookie("Ptoken"))
    }
}
