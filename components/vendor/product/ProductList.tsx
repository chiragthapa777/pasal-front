import React from "react";
import { Product } from "../../../utils/types/product";
import Loader from "../../helper/Loader";
import ProductItem from "./ProductItem";

type Props = {
	products: Product[];
	loading: boolean;
};

export default function ProductList({ products, loading }: Props) {
	return (
		<div className="overflow-x-auto ">
			<table className="border w-full border-collapse ">
				<thead>
					<tr className="">
						<th className="border-y py-3 px-2 bg-base-200">SN </th>
						<th className="border-y py-3 px-2 bg-base-200">Image</th>
						<th className="border-y py-3 px-2 bg-base-200 text-left">Name</th>
						<th className="border-y py-3 px-2 bg-base-200">
							Price (Rs)
						</th>
						<th className="border-y py-3 px-2 bg-base-200">Stock</th>
						{/* <th className="bo-yrder py-3 px-2 bg-base-200">Group</th> */}
						<th className="border-y py-3 px-2 bg-base-200">Active</th>
						<th className="border-y py-3 px-2 bg-base-200">
							Addded At
						</th>
						<th className="border-y py-3 px-2 bg-base-200">Action</th>
					</tr>
				</thead>
				<tbody>
					{loading ? (
						<tr>
							<td colSpan={7}>
							<Loader />
							</td>
						</tr>
					) : products.length > 0 ? (
						products.map((product: Product, index: number) => (
							<ProductItem
								key={product.id}
								product={product}
								index={index}
							/>
						))
					) : (
						"No product found"
					)}
				</tbody>
			</table>
		</div>
	);
}
