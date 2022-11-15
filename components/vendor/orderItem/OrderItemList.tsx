import React from "react";
import { OrderItemType } from "../../../utils/types/orderitem";
import Loader from "../../helper/Loader";
import OrderItem from "./OrderItem";

type Props = {
	orderItems: OrderItemType[];
	loading: boolean;
	seterror : any
	setorderitems:any
};

export default function OrderItemList({ orderItems, loading, seterror, setorderitems }: Props) {
	return (
		<div className="overflow-x-auto ">
			<table className=" w-full border-collapse border">
				<thead>
					<tr className="">
						<th className="border-b py-3 px-2 bg-base-200">SN </th>
						<th className="border-b py-3 px-2 bg-base-200">status</th>
						<th className="border-b py-3 px-2 bg-base-200 text-left">
							Name
						</th>
						<th className="border-b py-3 px-2 bg-base-200">
							Quantity
						</th>
						<th className="border-b py-3 px-2 bg-base-200">Rate</th>
						<th className="border-b py-3 px-2 bg-base-200">
							Discount
						</th>
						<th className="border-b py-3 px-2 bg-base-200">Vat</th>
						<th className="border-b py-3 px-2 bg-base-200">
							Grand Total
						</th>
						<th className="border-b py-3 px-2 bg-base-200">Date</th>
						<th className="border-b py-3 px-2 bg-base-200">Action</th>
					</tr>
				</thead>
				<tbody>
					{loading ? (
						<td colSpan={10} className="text-center">
							<Loader />
						</td>
					) : orderItems.length > 0 ? (
						orderItems.map(
							(orderItem: OrderItemType, index: number) => (
								<OrderItem
									orderItem={orderItem}
									key={orderItem.id}
									index={index}
									seterror={seterror}
									orderItems={orderItems}
									setorderitems={setorderitems}
								/>
							)
						)
					) : (
						<td colSpan={10} className="text-center">
							No order items yet
						</td>
					)}
				</tbody>
			</table>
		</div>
	);
}
