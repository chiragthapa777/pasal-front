import React from "react";

type Props = {};

export default function QsnModal({}: Props) {
	return (
		<>
			<label htmlFor="my-modal-3" className="btn btn-sm btn-success mx-1">
				Answer
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
						<div className="collapse">
							<input type="checkbox" className="peer" />
							<div className="collapse-title bg-primary text-primary-content ">
								Answers
							</div>
							<div className="collapse-content bg-base-100 text-primary-content border">
								<div className="p-2 rounded-md bg-base-200 text-base-content mt-4">
                                    <p className="underline">Ram thapa</p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Odit, corporis.
								</div>
								<div className="p-2 rounded-md bg-base-200 text-base-content mt-4">
                                    <p className="underline">Ram thapa</p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Odit, corporis.
								</div>
								<div className="p-2 rounded-md bg-base-200 text-base-content mt-4">
                                    <p className="underline">Ram thapa</p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Odit, corporis.
								</div>
								<div className="p-2 rounded-md bg-base-200 text-base-content mt-4">
                                    <p className="underline">Ram thapa</p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Odit, corporis.
								</div>
								<div className="p-2 rounded-md bg-base-200 text-base-content mt-4">
                                    <p className="underline">Ram thapa</p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Odit, corporis.
								</div>
								<div className="p-2 rounded-md bg-base-200 text-base-content mt-4">
                                    <p className="underline">Ram thapa</p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Odit, corporis.
								</div>
								<div className="p-2 rounded-md bg-base-200 text-base-content mt-4">
                                    <p className="underline">Ram thapa</p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Odit, corporis.
								</div>
								<div className="p-2 rounded-md bg-base-200 text-base-content mt-4">
                                    <p className="underline">Ram thapa</p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Odit, corporis.
								</div>
								<div className="p-2 rounded-md bg-base-200 text-base-content mt-4">
                                    <p className="underline">Ram thapa</p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Odit, corporis.
								</div>
								<div className="p-2 rounded-md bg-base-200 text-base-content mt-4">
                                    <p className="underline">Ram thapa</p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Odit, corporis.
								</div>
								<div className="p-2 rounded-md bg-base-200 text-base-content mt-4">
                                    <p className="underline">Ram thapa</p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Odit, corporis.
								</div>
								<div className="p-2 rounded-md bg-base-200 text-base-content mt-4">
                                    <p className="underline">Ram thapa</p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Odit, corporis.
								</div>
								<div className="p-2 rounded-md bg-base-200 text-base-content mt-4">
                                    <p className="underline">Ram thapa</p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Odit, corporis.
								</div>
							</div>
						</div>
						<div className="form-control w-full ">
							<label className="label">
								<span className="label-text">Add Answer</span>
							</label>
                            <input type="text" placeholder="Answer" className="input input-bordered w-full" />
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
