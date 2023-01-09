import commaNumber from "comma-number";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import { noImageLink } from "../../../utils/contants/links";
import { Product } from "../../../utils/types/product";

type Props = {
	product: Product;
	index: number;
};

export default function ProductItem({ product, index }: Props) {
	const router = useRouter()
	const handleView = (id:any) => {
		router.push(`/vendor/editproduct/${id}`)
	}
	return (
		<tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 odd:bg-base-100">
			<th className="border-y p-2">{index + 1}</th>
			<td className="border-y p-2 ">
				<img
					src={
						product?.images
							? product.images.length > 0
								? product.images[0]?.url || noImageLink
								: noImageLink
							: noImageLink
					}
					className="h-12 w-12 object-cover mx-auto"
					alt=""
				/>
			</td>
			<td className="border-y p-2">{product.name}</td>
			<td className="border-y p-2 text-center">
				{commaNumber(product.price)}
			</td>
			<th className="border-y p-2 text-center">{product.quantity}</th>
			{/* <td className="border p-2  text-center">Cy Ganderton</td> */}
			<td className="border-y p-2 text-center">
				<input
					type="checkbox"
					checked={product?.active || false}
					className="checkbox"
				/>
			</td>
			<td className="border-y p-2 text-center">
				{moment(product.createdAt).format("YYYY-MM-DD")}
			</td>
			<td className="border-y	 p-2 text-center">
				<button className="btn btn-xs btn-success mr-1" onClick={()=>{handleView(product.id)}}>view</button>
				{/* <button
					className="btn btn-xs btn-secondary"
					onClick={handleSelect}
				>
					select
				</button> */}
			</td>
		</tr>
	);
}
