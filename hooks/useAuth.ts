import { useEffect } from "react"
import { useRouter } from "next/router";
import {getCookie} from "cookies-next"
import jwt_decode from 'jwt-decode';

interface AuthInterface {
    roles ?: string[],
    redirectPath ?: URL,
    setError: any
}

export default function useAuth({roles, redirectPath, setError}:AuthInterface) {
    const router = useRouter()
    useEffect(()=>{
        try {
            const token : any = getCookie("Ptoken")
            const data : {
                id:number
                role:string,
            } | any = jwt_decode(token)
            if(!data?.id){
                throw "Login first"
            }
            let authorized = true
            if(data.role!=='ADMIN' &&  roles && roles?.length>0){
                for(const role of roles){
                    if(role !== data.role){
                        authorized = false
                    }
                }
            }
            if(!authorized){
                throw "Not authorized"
            }
        } catch (error:any) {
            if(redirectPath){
                router.push(redirectPath)
            }else{
                setError(error?.message)
            }

        }
    },[])
}
