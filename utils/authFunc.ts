import jwt_decode from "jwt-decode";

export default function authFunc(router:any,token:any, redirectPath:string,roles:any[],setError:any){
    try {
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
        return true
    } catch (error:any) {
        if(redirectPath){
            router.push(redirectPath)
        }else{
            if(setError){
                setError(error?.message)
            }
        }
        return false
    }
}
