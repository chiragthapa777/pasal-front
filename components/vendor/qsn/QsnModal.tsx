import jwtDecode from "jwt-decode";
import React, { useState } from "react";
import { baseUrl } from "../../../api/apiUrl";
import useAxios from "../../../hooks/useAxios";

type Props = {};

export default function QsnModal({ setqsn, q, qsns }: any) {
	const [ans, setans] = useState("");
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const AddAnwer = async () =>{
		try {
			setLoading(true)
			const token:any = localStorage.getItem("Ptoken")
			const axios = useAxios(token)
			const user:any = jwtDecode(token)
			const response = await axios.put(`${baseUrl}/order/${orderItem.id}/items`,{status})
			const data = response?.data ?.data
			console.log(data, orderItems)
			setqsn(orderItems.map((orderItem:OrderItemType)=>{
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
			<label htmlFor="my-modal-3" className="btn btn-sm btn-success mx-1" onClick={()=>setOpen(true)}>
				Answer
			</label>

			<input type="checkbox" id="my-modal-3" className="modal-toggle" checked={open} />
			<div className="modal">
				<div className="modal-box relative text-left">
					<label
						htmlFor="my-modal-3"
						className={`btn btn-sm btn-circle absolute right-2 top-2 btn-error ${loading?"loading":""} `}
						onClick={()=>setOpen(false)}
					>
						{loading ? "" : "✕"}
					</label>
					<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
						Order Item Tracking
					</h1>
					<div className="w-full py-4 px-1">
						<div className="collapse">
							<input type="checkbox" className="peer" />
							<div className="collapse-title bg-primary text-primary-content ">
								Answers
							</div>
							<div className="collapse-content bg-base-100 text-primary-content border">
								{q.answers.length > 0
									? q.answers.map((a: any) => {
											return (
												<div className="p-2 rounded-md bg-base-200 text-base-content mt-4">
													<p className="underline">
														Ram thapa
													</p>
													Lorem ipsum dolor sit amet
													consectetur adipisicing
													elit. Odit, corporis.
												</div>
											);
									  })
									: "No answers yet"}
							</div>
						</div>
						<div className="form-control w-full ">
							<label className="label">
								<span className="label-text">Add Answer</span>
							</label>
							<input
								type="text"
								placeholder="Answer"
								value={ans}
								onChange={(e) => {
									setans(e.target.value);
								}}
								className="input input-bordered w-full"
							/>
							<label className="label">
								{/* <span className="label-text-alt text-info">
									info
								</span> */}
							</label>
						</div>
					</div>
					<button className={`btn btn-primary ${loading?"loading":""}`} onClick={AddAnwer}>Update</button>
				</div>
			</div>
		</>
	);
}
