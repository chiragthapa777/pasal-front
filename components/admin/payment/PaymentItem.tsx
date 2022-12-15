import commaNumber from "comma-number";
import moment from "moment";
import React from "react";
import {Payment} from "../../../utils/types/payment";

type Props = {
	index : number,
	payment : Payment
};

export default function PaymentItem({index, payment}: Props) {
	return (
		<tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 odd:bg-base-100">
			<th className="border p-2">{index}</th>
			<td className="border p-2 text-center">{commaNumber(payment.amount)}</td>
			<td className="border p-2 text-center link text-blue-500">#{payment.orderId}</td>
			<td className="border p-2 text-center">{payment.mode}</td>
			<th className="border p-2 w-96">
				{payment.remark}
			</th>
			<td className="border p-2 text-center">
				{moment(payment.createdAt).format("YYYY-MM-DD")}
			</td>
			<td className="border p-2 text-center">{payment.user.name}</td>
		</tr>
	);
}
