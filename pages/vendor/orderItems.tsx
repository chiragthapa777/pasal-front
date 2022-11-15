import React,{useEffect, useState} from "react";
import Error from "../../components/helper/Error";
import OrderItemList from "../../components/vendor/orderItem/OrderItemList";
import VendorNav from "../../components/vendor/VendorNav";
import useAxios from "../../hooks/useAxios";
import jwt_decode from "jwt-decode"
import { baseUrl } from "../../api/apiUrl";

type Props = {};

export default function orderItems({}: Props) {
	const [orderitems, setorderitems] = useState<any[]>([])
	const [loading, setLoading] = useState(false)
	const [error, seterror] = useState("")

	const fetchOrderItems = async () =>{
		try {
			setLoading(true)
			const token:any = localStorage.getItem("Ptoken")
			const axios = useAxios(token)
			const user:any = jwt_decode(token)
			if(!user?.vendorId){
				return seterror("Cannot find the vendor")
			}
			const response = await axios.get(`${baseUrl}/order/items?vendorId=${user.vendorId}`)
			setorderitems(response?.data?.data || [])
			setLoading(false)
		} catch (error:any) {
			setLoading(false)
			seterror(error?.response?.data?.data || "Something went wrong")
		}
	}

	useEffect(() => {
		fetchOrderItems()
	}, [])

	if(error!==""){
		return(
			<Error message={error}/>
		)
	}
	
	return (
		<>
			<VendorNav basePath={"orderItem"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Order Items
				</h1>
				<OrderItemList loading={loading} orderItems={orderitems} seterror={seterror} setorderitems={setorderitems} />
			</div>
		</>
	);
}
