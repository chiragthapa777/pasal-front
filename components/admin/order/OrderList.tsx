import React, { useContext } from "react";
import OrderItem from "./OrderItem";
import OrderContext from "../../../contexts/OrderContext";
import Loader from "../../helper/Loader";

type Props = {};

export default function OrderList({}: Props) {
	const { orders, loading } = useContext(OrderContext);

	return (
		<div className="overflow-x-auto ">
			<table className=" w-full border-collapse  ">
				<thead>
					<tr className="">
						<th className="border-b py-3 px-2 bg-base-200 text-left">SN </th>
						<th className="border-b py-3 px-2 bg-base-200 text-left">status</th>
						<th className="border-b py-3 px-2 bg-base-200 text-left">
							Customer
						</th>
						<th className="border-b py-3 px-2 bg-base-200 text-left">Total</th>
						<th className="border-b py-3 px-2 bg-base-200 text-left">
							Discount
						</th>
						<th className="border-b py-3 px-2 bg-base-200 text-left">Vat</th>
						<th className="border-b py-3 px-2 bg-base-200 text-left">
							Order Charges
						</th>
						<th className="border-b py-3 px-2 bg-base-200 text-left">
							Grand Total
						</th>
						<th className="border-b py-3 px-2 bg-base-200 text-left">
							Paid
						</th>
						<th className="border-b py-3 px-2 bg-base-200 text-left">Date</th>
						<th className="border-b py-3 px-2 bg-base-200 text-left">Action</th>
					</tr>
				</thead>
				<tbody>
					{loading ? (
						<tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 ">
							<td colSpan={11} className="text-center border">
								<Loader />
							</td>
						</tr>
					) : orders.length > 0 ? (
						orders.map((order: any, index:number) => <OrderItem key={order.id} index={index} order={order} />)
					) : (
						<tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 ">
						<td colSpan={11} className="text-center border p-2">
							No orders
						</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}
