import React, {useContext, useState} from 'react'
import useAxios from "../../../hooks/useAxios";
import {toast} from "react-toastify";
import {baseUrl} from "../../../api/apiUrl";
import AdminVendorContext from "../../../contexts/AdminVendorContext";

type Props = {}

export default function VendorUpdateModal({vendor}: any) {
	const {setVendors, vendors} = useContext(AdminVendorContext);
	const [loading, setLoading] = useState(false);
	const [open, setopen] = useState(false)
	const [form, setForm] = useState({
		request:vendor.requestAccepted || false,
		active:vendor.active || false
	});
	const handleUpdate = async ()=>{
		try {
			const axios = useAxios()
			setLoading(true)
			let res:any = {}
			if(form.request !== vendor.requestAccepted && !vendor.requestAccepted && form.active !== vendor.active){
				await axios.put(`${baseUrl}/vendor/${vendor.id}/acceptRequest`)
				res = await axios.put(`${baseUrl}/vendor/${vendor.id}`,{active:form.active})
			}else if(form.request !== vendor.requestAccepted && !vendor.requestAccepted){
				res = await axios.put(`${baseUrl}/vendor/${vendor.id}/acceptRequest`)
			}else if(form.active !== vendor.active){
				res = await axios.put(`${baseUrl}/vendor/${vendor.id}`,{active:form.active})
			}else {
				throw "Nothing is updated"
			}
			const data = res?.data?.data || {}
			if(data){
				setVendors(vendors.map((vendor:any)=>{
					if(vendor.id === data.id){
						return data
					}
					return  vendor
				}))
			}
			setLoading(false)
			setopen(false)
			toast.success("Order updated successfully", {
				theme:
					window.localStorage.getItem("lightMode") === "true"
						? "light"
						: "dark",
			});
		}catch (e:any){
			console.log(e)
			setLoading(false)
			toast.error(e?.response?.data?.data||e?.message || "Could not update vendor", {
				theme:
					window.localStorage.getItem("lightMode") === "true"
						? "light"
						: "dark",
			});
		}
	}
	return (
    <>
		<label htmlFor="my-modal-3" className="btn btn-sm btn-info mx-1" onClick={()=>{setopen(!open)}}>
			View
		</label>

			<input type="checkbox" id="my-modal-3" checked={open} readOnly className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative text-left  ">
					<label
						htmlFor="my-modal-3"
						className="btn btn-sm btn-circle absolute right-2 top-2 btn-error "
						onClick={()=>{setopen(false)}}
					>
						✕
					</label>
					<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase ">
						Edit Vendor(
						<span className="link text-green-500">#{vendor.id}</span>)
					</h1>
					<div className="form-control mb-2">
						<label className="label cursor-pointer">
							<span className="label-text">Active</span>
							<input type="checkbox"  className={`toggle ${form.active && 'checkbox-success'}`} checked={form.active} onClick={()=>setForm({...form,active:!form.active})} />
						</label>
					</div>
					<div className="form-control mb-2">
						<label className="label cursor-pointer">
							<span className="label-text">Accept Request</span>
							<input type="checkbox" disabled={vendor.requestAccepted} className={`toggle  ${form.request && 'checkbox-success'}`} checked={form.request} onChange={()=>setForm({...form,request:!form.request})} />
						</label>
					</div>
					<button className={`btn btn-primary ${loading && 'loading'}`} onClick={handleUpdate}>Update</button>
				</div>
			</div>
		</>
  )
}
