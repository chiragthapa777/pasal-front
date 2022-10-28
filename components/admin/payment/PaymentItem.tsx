import commaNumber from "comma-number";
import moment from "moment";
import React from "react";

type Props = {};

export default function PaymentItem({}: Props) {
	return (
		<tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 odd:bg-base-100">
			<th className="border p-2">1</th>
			<td className="border p-2 text-center">{commaNumber(1000)}</td>
			<td className="border p-2 text-center link text-blue-500">#12</td>
			<td className="border p-2 text-center">CASH</td>
			<th className="border p-2 w-96">
				Bill paid for order id : 14 through CASH
			</th>
			<td className="border p-2 text-center">
				{moment("2022-10-22T12:01:25.263Z").format("YYYY-MM-DD")}
			</td>
			<td className="border p-2 text-center">Ram</td>
		</tr>
	);
}
