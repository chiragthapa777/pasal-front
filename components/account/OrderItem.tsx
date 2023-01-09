import Link from "next/link";
import React, { useState } from "react";
import moment from "moment";
import commaNumber from "comma-number";
import OrderDetail from "../helper/OrderDetail";
import DetailModal from "./DetailModal";
import { useRouter } from "next/router";

type Props = {
	order: any;
};

export default function OrderItem({ order }: Props) {
	const router = useRouter();
	const handleDetailPage = () => {
		router.push(`/orderDetail/${order.id}`);
	};
	return (
		<tr>
			<th className="text-primary underline">
				<p onClick={handleDetailPage} className={`cursor-pointer`}>#{order?.id}</p>
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
