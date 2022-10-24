import React from "react";

type Props = {};

export default function ProductFilter({}: Props) {
	return (
		<>
			<label htmlFor="my-modal" className="btn btn-sm btn-info mx-1">
				Filter product
			</label>

			<input type="checkbox" id="my-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box">
					<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
						Filter
					</h1>
					<p className="py-4">
						Here you can filter the product without api call 
					</p>
					<div className="modal-action">
						<label htmlFor="my-modal" className="btn btn-sm btn-error">
							close
						</label>
					</div>
				</div>
			</div>
		</>
	);
}
