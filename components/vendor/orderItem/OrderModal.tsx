import React from "react";

type Props = {};

export default function OrderModal({}: Props) {
	return (
		<>
			<label htmlFor="my-modal-3" className="btn btn-sm btn-info mx-1">
				Edit
			</label>

			<input type="checkbox" id="my-modal-3" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative text-left">
					<label
						htmlFor="my-modal-3"
						className="btn btn-sm btn-circle absolute right-2 top-2 btn-error "
					>
						✕
					</label>
					<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
						Order Item Tracking
					</h1>
					<div className="w-full py-4 px-1">
						<div className="form-control w-full ">
							<label className="label">
								<span className="label-text">Order Status</span>
							</label>
							<select className="select select-bordered">
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
					<button className="btn btn-primary">Update</button>
				</div>
			</div>
		</>
	);
}
