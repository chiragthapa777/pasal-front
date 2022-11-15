import React,{useState} from "react";
import { OrderItemType } from "../../../utils/types/orderitem";
import {toast} from 'react-toastify'
import useAxios from "../../../hooks/useAxios";
import jwt_decode from "jwt-decode";
import { baseUrl } from "../../../api/apiUrl";

type Props = {
	orderItem : OrderItemType
	seterror:any
	orderItems : OrderItemType[]
	setorderitems:any
};

export default function OrderModal({orderItem, seterror, orderItems, setorderitems}: Props) {
	const [status, setStatus] = useState(orderItem.status)
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const handleUpdate =async()=>{
		try {
			setLoading(true)
			const token:any = localStorage.getItem("Ptoken")
			const axios = useAxios(token)
			const user:any = jwt_decode(token)
			if(!user?.vendorId){
				return seterror("Cannot find the vendor")
			}
			console.log(status)
			const response = await axios.put(`${baseUrl}/order/${orderItem.id}/items`,{status})
			const data = response?.data ?.data
			console.log(data, orderItems)
			setorderitems(orderItems.map((orderItem:OrderItemType)=>{
				if(orderItem?.id===data?.id){
					return data || orderItem
				}else{
					return orderItem
				}
			}))
			setLoading(false)
			setOpen(false)
			toast.success(
				`Order #${data.id} updated successfully`,
				{
					theme:
						window.localStorage.getItem("lightMode") === "true"
							? "light"
							: "dark",
				}
			);
		} catch (error:any) {
			console.log(error)
			// seterror(error?.response?.data?.data || "Something went wrong")
			setLoading(false)
			toast.error(
				error?.response?.data?.data || "Something went wrong",
				{
					theme:
						window.localStorage.getItem("lightMode") === "true"
							? "light"
							: "dark",
				}
			);
			
		}
	}
	return (
		<>
			<label htmlFor="my-modal-3" className="btn btn-sm btn-info mx-1" onClick={()=>{setOpen(true)}}>
				Edit
			</label>

			<input type="checkbox" id="my-modal-3" checked={open} className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative text-left">
					<label
						htmlFor="my-modal-3"
						className={`btn btn-sm btn-circle absolute right-2 top-2 btn-error ${loading ? "loading":''} `}
						onClick={()=>{setOpen(false)}}
					>
						{loading ? "" : '✕'}
					</label>
					<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
						Order Item Tracking
					</h1>
					<div className="w-full py-4 px-1">
						<div className="form-control w-full ">
							<label className="label">
								<span className="label-text">Order Status</span>
							</label>
							<select className="select select-bordered" value={status} onChange={(e)=>{setStatus(e.target.value)}} >
								<option disabled selected>
									Pick one
								</option>
								<option>PLACED</option>
								<option>PROCESSING</option>
								<option disabled>WAREHOUSED</option>
								<option disabled>DELIVERING</option>
								<option disabled>COMPLETED</option>
							</select>
							<label className="label">
								<span className="label-text-alt text-info">
									info
								</span>
							</label>
						</div>
					</div>
					<button className={`btn btn-primary ${loading ? "loading" : ""}`} onClick={handleUpdate}>Update</button>
				</div>
			</div>
		</>
	);
}
