import Link from "next/link";
import React from "react";
import moment from "moment";
import commaNumber from "comma-number"

type Props = {
	order: any;
};

export default function OrderItem({ order }: Props) {
	return (
		<tr>
			<th className="text-primary underline">
				<Link
					href={`/order/${order.id}`}
					className=" link "
				>{`#${order.id}`}</Link>
			</th>
			<td>{order.status}</td>
			<td>
				<input
					type="checkbox"
					checked={order.isPaid}
					className="checkbox"
				/>
			</td>
			<td>{commaNumber(order.total)}</td>
			<td>{commaNumber(order.discount)}</td>
			<td>{commaNumber(order.vat)}</td>
			<td>{commaNumber(order.grandTotal)}</td>
			<td>{moment(order.createdAt).format("YYYY-MM-DD")}</td>
		</tr>
	);
}
