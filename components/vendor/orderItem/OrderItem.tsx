import commaNumber from "comma-number";
import moment from "moment";
import React from "react";
import { OrderItemType } from "../../../utils/types/orderitem";
import OrderModal from "./OrderModal";

type Props = {
	orderItem: OrderItemType;
	index: number;
	seterror:any
	orderItems : OrderItemType[]
	setorderitems:any
};

export default function OrderItem({ orderItem, index, seterror, orderItems, setorderitems }: Props) {
	return (
		<tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 odd:bg-base-100">
			<th className="border-b p-2">{index + 1}</th>
			<td className={`border-b p-2 text-center font-bold ${orderItem.status==="PLACED"?"text-error":'text-success'}`}>{orderItem.status}</td>
			<th className="border-b p-2 text-left">{orderItem.product.name}</th>
			<th className="border-b p-2 text-center">{orderItem.quantity}</th>
			<td className="border-b p-2 text-center">
				{commaNumber(orderItem.rate)}
			</td>
			<td className="border-b p-2 text-center">
				{commaNumber(orderItem.discount)}
				{orderItem?.discountPercent
					? `(${orderItem.discountPercent}%)`
					: ""}
			</td>
			<td className="border-b p-2 text-center">
				{commaNumber(orderItem.vat)}
				{orderItem?.vatPercent ? `(${orderItem.vatPercent}%)` : ""}
			</td>
			<td className="border-b p-2 text-center">
				{commaNumber(orderItem.grandTotal)}
			</td>
			<td className="border-b p-2 text-center">
				{moment(orderItem.createdAt).format("YYYY-MM-DD")}
			</td>
			<td className="border-b p-2 text-center">
				<OrderModal orderItem={orderItem} seterror={seterror} orderItems={orderItems} setorderitems={setorderitems} />
			</td>
		</tr>
	);
}
