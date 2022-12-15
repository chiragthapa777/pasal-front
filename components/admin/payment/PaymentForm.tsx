import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function PaymentForm({}: Props) {
    const router = useRouter()
    const handleAdd = () =>{
        router.push(".")
    }
	return (
		<div className="py-2 w-full ">
			<div className="">
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">OrderId</span>
					</label>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
					/>
					<label className="label">
						<span className="label-text-alt">Info</span>
					</label>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">OrderId</span>
					</label>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
					/>
					<label className="label">
						<span className="label-text-alt">Info</span>
					</label>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">OrderId</span>
					</label>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
					/>
					<label className="label">
						<span className="label-text-alt">Info</span>
					</label>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">OrderId</span>
					</label>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
					/>
					<label className="label">
						<span className="label-text-alt">Info</span>
					</label>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">OrderId</span>
					</label>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
					/>
					<label className="label">
						<span className="label-text-alt">Info</span>
					</label>
				</div>
				<button className="btn btn-primary" onClick={handleAdd}>Add </button>
			</div>
		</div>
	);
}
