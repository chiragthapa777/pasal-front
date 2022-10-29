import axios from 'axios'
import { getCookie } from 'cookies-next'

// Add a request interceptor
export const interceptor=()=>{
  const token = getCookie("Ptoken")
  console.log("interceptinggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg")
    axios.interceptors.request.use(
      (config:any) => {
        if (token) {
          config.headers['token'] = token
        }
        // config.headers['Content-Type'] = 'application/json';
        return config
      },
      error => {
        Promise.reject(error)
      }
    )
}