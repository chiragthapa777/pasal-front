import React, {useContext, useState, useEffect} from "react";
import OrderDetail from "../../helper/OrderDetail";
import {toast} from "react-toastify";
import useAxios from "../../../hooks/useAxios";
import {getCookie} from "cookies-next";
import {baseUrl} from "../../../api/apiUrl";
import OrderContext from "../../../contexts/OrderContext";
import PaymentModal from "./PaymentModel";
import jwtDecode from "jwt-decode";

export default function OrderModal({order}: any) {
	const { setOrders, loading:orderListLoading, orders } = useContext(OrderContext);
	const [open, setopen] = useState(false)
	const [status, setStatus] = useState<string>(order.status)
	const [loading, setLoading] = useState<boolean>(false);
	const [detail, setDetail] = useState<{order:any,error:string,loading:boolean}>({
		order:order,
		loading:false,
		error:''
	});
	const handleUpdate = async() =>{
		try {
			const axios = useAxios(getCookie("Ptoken"))
			setLoading(true)
			const res = await axios.put(`${baseUrl}/order/${order.id}`,{status})
			const data = res?.data?.data || {}
			setOrders(orders.map((order:any)=>{
				if(order.id===data.id){
					return data
				}else {
					return order
				}
			}))
			toast.success("Order updated successfully", {
				theme:
					window.localStorage.getItem("lightMode") === "true"
						? "light"
						: "dark",
			});
			setLoading(false)
		}catch (e:any) {
			setLoading(false)
			toast.error(e?.response?.data?.data||e?.message || "Could not update order", {
				theme:
					window.localStorage.getItem("lightMode") === "true"
						? "light"
						: "dark",
			});
		}
	}
	useEffect(() => {
		if(open){
			handleDetailFetch()
		}
	}, [open]);

	const handleDetailFetch= async () =>{
		try {
			const axios = useAxios()
			setDetail({...detail,loading: true})
			const response:any = await axios.get(`${baseUrl}/order/${order.id}`)
			setDetail({order:response?.data?.data || {},loading: false, error:''})
		} catch (error:any) {
			setDetail({...detail,loading: false,error:error?.message})
		}
	}
	return (
		<>
			<label htmlFor="my-modal-3" className="btn btn-sm btn-info mx-1" onClick={()=>{setopen(!open)}}>
				View
			</label>

			<input type="checkbox" id="my-modal-3" className="modal-toggle" checked={open} disabled />
			<div className="modal">
				<div className="modal-box relative text-left  w-11/12 max-w-7xl">
					<label
						htmlFor="my-modal-3"
						className="btn btn-sm btn-circle absolute right-2 top-2 btn-error "
						onClick={()=>{setopen(!open)}}
					>
						✕
					</label>
					<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase ">
						Order Tracking (
						<span className="link text-green-500">#23</span>)
					</h1>
					<div className="w-full py-4 px-1">
						<div className="collapse collapse-arrow">
							<input type="checkbox" className="peer" />
							<div className="collapse-title bg-primary text-primary-content ">
								Order Detail
							</div>
							<div className="collapse-content border w-full ">
								<OrderDetail order={detail.order} loading={detail.loading} error={detail.error} />
							</div>
						</div>
					</div>

					<div className="form-control w-full my-4">
						<label className="label">
							<span className="label-text">
								Status
							</span>
						</label>
						<select className="select select-bordered" value={status} onChange={(e)=>setStatus(e.target.value)}>
							<option disabled selected>Pick one</option>
							<option >PLACED</option>
							<option>PROCESSING</option>
							<option>WAREHOUSED</option>
							<option>DELIVERING</option>
							<option>COMPLETED</option>
						</select>
					</div>
					<button className={`btn btn-primary ${loading||orderListLoading?'loading':''}`} onClick={handleUpdate}>Update</button>
				</div>
			</div>
		</>
	);
}
