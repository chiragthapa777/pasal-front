import React from "react";
import ProductItem from "./ProductItem";

type Props = {};

export default function ProductList({}: Props) {
	return (
		<div className="overflow-x-auto ">
			<table className=" w-full border-collapse ">
				<thead>
					<tr className="">
						<th className="border py-3 px-2 bg-base-200">SN </th>
						<th className="border py-3 px-2 bg-base-200">Image</th>
						<th className="border py-3 px-2 bg-base-200">Name</th>
						<th className="border py-3 px-2 bg-base-200">
							Price (Rs)
						</th>
						<th className="border py-3 px-2 bg-base-200">Stock</th>
						<th className="border py-3 px-2 bg-base-200">Group</th>
						<th className="border py-3 px-2 bg-base-200">Active</th>
						<th className="border py-3 px-2 bg-base-200">
							Addded At
						</th>
						<th className="border py-3 px-2 bg-base-200">Action</th>
					</tr>
				</thead>
				<tbody>
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
				</tbody>
			</table>
		</div>
	);
}
