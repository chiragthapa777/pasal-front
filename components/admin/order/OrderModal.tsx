import React,{useState} from "react";
import OrderDetail from "../../helper/OrderDetail";

type Props = {};

export default function OrderModal({}: Props) {
	const [open, setopen] = useState(false)
	return (
		<>
			<label htmlFor="my-modal-3" className="btn btn-sm btn-info mx-1" onClick={()=>{setopen(!open)}}>
				View
			</label>

			<input type="checkbox" id="my-modal-3" className="modal-toggle" checked={open} disabled />
			<div className="modal">
				<div className="modal-box relative text-left  w-11/12 max-w-5xl">
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
						<div className="collapse">
							<input type="checkbox" className="peer" />
							<div className="collapse-title bg-primary text-primary-content ">
								Order Detail
							</div>
							<div className="collapse-content border w-full ">
								<OrderDetail />
							</div>
						</div>
					</div>
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">
								What is your name?
							</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
						/>
						<label className="label">
							<span className="label-text-alt">Alt label</span>
						</label>
					</div>
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">
								What is your name?
							</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
						/>
						<label className="label">
							<span className="label-text-alt">Alt label</span>
						</label>
					</div>
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">
								What is your name?
							</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
						/>
						<label className="label">
							<span className="label-text-alt">Alt label</span>
						</label>
					</div>
					<button className="btn btn-primary">Update</button>
				</div>
			</div>
		</>
	);
}
