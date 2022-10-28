import React from 'react'

type Props = {}

export default function TagAddModal({}: Props) {
  return (
    <>
			<label htmlFor="my-modal-3" className="btn btn-sm btn-info mx-1">
				Add Tag
			</label>

			<input type="checkbox" id="my-modal-3" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative text-left  ">
					<label
						htmlFor="my-modal-3"
						className="btn btn-sm btn-circle absolute right-2 top-2 btn-error "
					>
						✕
					</label>
					<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase ">
						Edit Vendor(
						<span className="link text-green-500">#23</span>)
					</h1>
					<div className="form-control w-full ">
						<label className="label">
							<span className="label-text">
								What is your name?
							</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full "
						/>
						<label className="label">
							<span className="label-text-alt">Alt label</span>
						</label>
					</div>
					<div className="form-control w-full ">
						<label className="label">
							<span className="label-text">
								What is your name?
							</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full "
						/>
						<label className="label">
							<span className="label-text-alt">Alt label</span>
						</label>
					</div>
					<button className="btn btn-primary">Update</button>
				</div>
			</div>
		</>
  )
}