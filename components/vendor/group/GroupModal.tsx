import React from "react";

export default function GroupModal({ title, buttonText, group, isEdit }: any) {
	return (
		<>
			<label htmlFor="my-modal-3" className="btn btn-sm btn-info mx-1">
				{buttonText}
			</label>

			<input type="checkbox" id="my-modal-3" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative">
					<label
						htmlFor="my-modal-3"
						className="btn btn-sm btn-circle absolute right-2 top-2 btn-error"
					>
						✕
					</label>
					<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
						{title}
					</h1>
					<div className="w-full py-4 px-1">
						<div className="form-control w-full ">
							<label className="label">
								<span className="label-text">
									Name
								</span>
							</label>
							<input
								type="Name"
								placeholder="Group name"
								className="input input-bordered w-full"
							/>
							<label className="label">
								<span className="label-text-alt text-info">
									info
								</span>
							</label>
						</div>
					</div>
					<button className="btn btn-primary">Submit</button>
				</div>
			</div>
		</>
	);
}
