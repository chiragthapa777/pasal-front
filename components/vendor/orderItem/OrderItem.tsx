import commaNumber from "comma-number";
import moment from "moment";
import React from "react";
import OrderModal from "./OrderModal";

type Props = {};

export default function OrderItem({}: Props) {
	return (
		<tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 odd:bg-base-100">
			<th className="border p-2">1</th>
			<td className="border p-2 text-center">PLACED</td>
			<td className="border p-2 ">
				<img
					src="https://images.pexels.com/photos/5190599/pexels-photo-5190599.jpeg?auto=compress&cs=tinysrgb&w=600"
					className="h-12 w-12 object-cover mx-auto"
					alt=""
				/>
			</td>
			<th className="border p-2 text-center">Pant</th>
			<th className="border p-2 text-center">2</th>
			<td className="border p-2 text-center">{commaNumber(1200)}</td>
			<td className="border p-2 text-center">{commaNumber(100)}(10%)</td>
			<td className="border p-2 text-center">{commaNumber(120)}(13%)</td>
			<td className="border p-2 text-center">{commaNumber(1200)}</td>
			<td className="border p-2 text-center">
				{moment("2022-10-22T12:01:25.263Z").format("YYYY-MM-DD")}
			</td>
			<td className="border p-2 text-center">
				<OrderModal />
			</td>
		</tr>
	);
}