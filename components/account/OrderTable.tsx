import React from "react";
import OrderItem from "./OrderItem";

type Props = {
	orders: any;
};

export default function OrderTable({ orders }: Props) {
	return (
		<div className="overflow-x-auto">
			<table className="table table-zebra w-full">
				{/* <!-- head --> */}
				<thead>
					<tr>
						<th>order</th>
						<th>status</th>
						<th>Paid</th>
						<th>Total(RS)</th>
						<th>discount(RS)</th>
						<th>vat(RS)</th>
						<th>grand total(RS)</th>
						<th>Date(AD)</th>
					</tr>
				</thead>
				<tbody>
					{/* <!-- row 1 --> */}
					{orders.length > 0
						? orders.map((order: any) => (
								<OrderItem key={order.id} order={order} />
						  ))
						: "No Orders Found"}
				</tbody>
			</table>
		</div>
	);
}
