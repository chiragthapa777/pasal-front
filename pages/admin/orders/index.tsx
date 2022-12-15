import React,{createContext, useState, useEffect} from "react";
import AdminNav from "../../../components/admin/AdminNav";
import OrderList from "../../../components/admin/order/OrderList";
import Error from "../../../components/helper/Error";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import jwtDecode from "jwt-decode";
import { baseUrl } from "../../../api/apiUrl";
import OrderContext from "../../../contexts/OrderContext";


type Props = {};

export default function index({}: Props) {


	const [orders, setOrders]=useState<any>([])
	const [loading, setloading]=useState(false)
	const [error, seterror]=useState("")
	useAuth({roles:['ADMIN'], redirectPath:'/login',setError:seterror})

	if(error!==""){
		return <Error message={error} />
	}

	const fetchOrders = async () => {
		try {
			const token:any = localStorage.getItem("Ptoken")
			const axios = useAxios(token)
			const user:any = jwtDecode(token)
			setloading(true)
			if(!user?.vendorId){
				return seterror("You are not a vendor. If you are a vendor try login again")
			}
			const response = await axios.get(`${baseUrl}/order`)
			setloading(false)
			setOrders(response?.data?.data || [])
		} catch (error:any) {
			setloading(false)
			seterror(error?.response?.data?.data || "Something went wrong")
		}
	}

	useEffect(()=>{
		fetchOrders()
		return(()=>{
			console.log("Orders Unmounted")
		})
	},[])

	return (
		<OrderContext.Provider value={{orders, setOrders, error, seterror, loading, setloading}}>
			<AdminNav basePath={"orders"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Orders
				</h1>
				<OrderList />
			</div>
		</OrderContext.Provider>
	);
}
