import commaNumber from "comma-number";
import moment from "moment";
import React from "react";

type Props = {};
export default function OrderDetail({ order }: any) {
	return (
		<div className="border p-2 rounded-md my-5 bg-base-200/20 drop-shadow-lg ">
			<h1 className="text-2xl font-bold text-center my-8">
				Pasal Order Invoice
			</h1>

			<div className="OrderDetail w-full flex justify-between items-center p-5">
				<table>
					<tbody>
						<tr>
							<th colSpan={2} className="text-lg">
								Order Details
							</th>
						</tr>
						<tr>
							<th className="min-w-[150px]">Order ID :</th>
							<td className="min-w-[150px]"> {`#${order.id}`}</td>
						</tr>
						<tr>
							<th className="min-w-[150px]">Date :</th>
							<td className="min-w-[150px]">
								{" "}
								{moment(order.createdAt).format(
									"YYYY-MM-DD"
								)}{" "}
							</td>
						</tr>
						<tr>
							<th className="min-w-[150px]">Status :</th>
							<td className="min-w-[150px]">{order.status}</td>
						</tr>
					</tbody>
				</table>
				<table>
					<tbody>
						<tr>
							<th colSpan={2} className="text-lg">
								Customer Details
							</th>
						</tr>
						<tr>
							<th className="min-w-[150px]">Name :</th>
							<td className="min-w-[150px]">{order.user.name}</td>
						</tr>
						<tr>
							<th className="min-w-[150px]">Number :</th>
							<td className="min-w-[150px]">
								{" "}
								{order.user.number}{" "}
							</td>
						</tr>
						<tr>
							<th className="min-w-[150px]">Address :</th>
							<td className="min-w-[150px]">
								{order.user.shipping.district +
									", " +
									order.user.shipping.street}
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div>
				<table className=" w-full border-r border-l  border-collapse ">
					<thead>
						<tr className="border-b border-t">
							<th className=" py-3 px-2 bg-base-200 text-center">
								SN
							</th>
							<th className=" py-3 px-2 bg-base-200 text-center">
								Product
							</th>
							<th className=" py-3 px-2 bg-base-200 text-center">
								Status
							</th>
							<th className=" py-3 px-2 bg-base-200 text-center">
								Vendor
							</th>
							<th className=" py-3 px-2 bg-base-200 text-center">
								Rate
							</th>
							<th className=" py-3 px-2 bg-base-200 text-center">
								Qty
							</th>
							<th className=" py-3 px-2 bg-base-200 text-center">
								Total
							</th>
							<th className=" py-3 px-2 bg-base-200 text-center">
								Discount
							</th>
							<th className=" py-3 px-2 bg-base-200 text-center">
								Vat
							</th>
							<th className=" py-3 px-2 bg-base-200 text-center">
								Amount
							</th>
						</tr>
					</thead>
					<tbody>
						{order.orderItems.length > 0
							? order.orderItems.map((item: any, index:number) => (
									<tr className="border-b">
										<th className=" p-2 text-center">{index+1}</th>
										<td className=" p-2 text-center">
											{item?.product?.name || item?.othercharges?.name}
										</td>
										<td className=" p-2 text-center">
											{item?.othercharges ? "" : item?.status}
										</td>
										<td className=" p-2 text-center">
											{item?.product?.vendor?.name}
										</td>
										<td className=" p-2 text-center">
											{commaNumber(item.rate)}
										</td>
										<td className=" p-2 text-center">{item.quantity}</td>
										<td className=" p-2 text-center">
										{commaNumber(item.total)}
										</td>
										<td className=" p-2 text-center">
											{commaNumber(item.discount)}
										</td>
										<td className=" p-2 text-center">
											{commaNumber(item.vat)}
										</td>
										<td className=" p-2 text-center">
											{commaNumber(item.grandTotal)}
										</td>
									</tr>
							  ))
							: null}

						<tr className="border-b">
							<td colSpan={8}></td>
							<th className=" p-2 text-center">Total</th>
							<td className=" p-2 text-center">{order.total}</td>
						</tr>
						<tr className="border-b">
							<td colSpan={8}></td>
							<th className=" p-2 text-center">Discount</th>
							<td className=" p-2 text-center">{order.discount}</td>
						</tr>
						<tr className="border-b">
							<td colSpan={8}></td>
							<th className=" p-2 text-center">Vat</th>
							<td className=" p-2 text-center">{order.vat}</td>
						</tr>
						<tr className="border-b">
							<td colSpan={8}></td>
							<th className=" p-2 text-center">OtherCharge</th>
							<td className=" p-2 text-center">{order.otherCharge}</td>
						</tr>
						<tr className="border-b">
							<td colSpan={8}></td>
							<th className=" p-2 text-center">Grant Total</th>
							<td className=" p-2 text-center">{commaNumber(order.grandTotal)}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
