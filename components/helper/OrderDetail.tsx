import commaNumber from "comma-number";
import moment from "moment";
import React from "react";

type Props = {};

const order = {
	id: 15,
	createdAt: "2022-10-21T05:02:32.849Z",
	updatedAt: "2022-10-21T05:02:32.850Z",
	status: "PLACED",
	isBillPrinted: false,
	isPaid: false,
	userId: 7,
	total: 2500,
	discount: 100,
	totalAfterDiscount: 2400,
	vat: 0,
	totalWithVat: 2400,
	otherCharge: 100,
	grandTotal: 2500,
	orderItems: [
		{
			id: 25,
			createdAt: "2022-10-21T05:02:32.870Z",
			updatedAt: "2022-10-21T05:02:32.870Z",
			status: "PLACED",
			quantity: 1,
			rate: 1000,
			orderId: 15,
			productId: 1,
			otherChargeId: null,
			discountPercent: 10,
			vatPercent: 0,
			userId: 7,
			total: 1000,
			discount: 100,
			totalAfterDiscount: 900,
			vat: 0,
			totalWithVat: 900,
			grandTotal: 900,
			product: {
				id: 1,
				createdAt: "2022-09-02T14:57:44.203Z",
				updatedAt: "2022-10-22T13:13:54.689Z",
				name: "pant",
				price: 1000,
				desc: "This is jeans pant from zara",
				groupId: null,
				active: true,
				quantity: 6,
				vendorId: 2,
				userId: 7,
				unit: "piece",
			},
			othercharges: null,
		},
		{
			id: 26,
			createdAt: "2022-10-21T05:02:32.870Z",
			updatedAt: "2022-10-21T05:02:32.870Z",
			status: "PLACED",
			quantity: 1,
			rate: 1500,
			orderId: 15,
			productId: 2,
			otherChargeId: null,
			discountPercent: 0,
			vatPercent: 0,
			userId: 7,
			total: 1500,
			discount: 0,
			totalAfterDiscount: 1500,
			vat: 0,
			totalWithVat: 1500,
			grandTotal: 1500,
			product: {
				id: 2,
				createdAt: "2022-09-02T14:59:23.509Z",
				updatedAt: "2022-10-22T13:13:54.698Z",
				name: "Tee shirt",
				price: 1500,
				desc: "This is black tshirt from zara",
				groupId: null,
				active: true,
				quantity: 88,
				vendorId: 2,
				userId: 7,
				unit: "piece",
			},
			othercharges: null,
		},
		{
			id: 27,
			createdAt: "2022-10-21T05:02:32.870Z",
			updatedAt: "2022-10-21T05:02:32.870Z",
			status: "PLACED",
			quantity: 1,
			rate: 100,
			orderId: 15,
			productId: null,
			otherChargeId: 1,
			discountPercent: null,
			vatPercent: null,
			userId: 7,
			total: 100,
			discount: 0,
			totalAfterDiscount: 100,
			vat: 0,
			totalWithVat: 100,
			grandTotal: 100,
			product: null,
			othercharges: {
				id: 1,
				createdAt: "2022-10-20T15:06:14.781Z",
				updatedAt: "2022-10-20T15:06:14.808Z",
				name: "delivery",
				desc: "charge for delivery",
				price: 100,
			},
		},
	],
};

export default function OrderDetail({}: Props) {
	return (
		<div className="border p-2 rounded-sm mt-2 bg-base-200/20">
			<h1 className="text-2xl font-bold">Pasal</h1>
			<p className="">Order ID : {`#${order.id}`}</p>
			<p className="">Customer : {"Chirag Thapa"}</p>
			<p className="">Status : {"PROCESSING"}</p>
			<p className="">
				Date : {moment(order.createdAt).format("YYYY-MM-DD")}
			</p>
			<div>
				<table className=" w-full border-collapse ">
					<thead>
						<tr className="">
							<th className="border py-3 px-2 bg-base-200">SN</th>
							<th className="border py-3 px-2 bg-base-200">Product</th>
							<th className="border py-3 px-2 bg-base-200">Status</th>
							<th className="border py-3 px-2 bg-base-200">Vendor</th>
							<th className="border py-3 px-2 bg-base-200">Rate</th>
							<th className="border py-3 px-2 bg-base-200">Qty</th>
							<th className="border py-3 px-2 bg-base-200">Total</th>
							<th className="border py-3 px-2 bg-base-200">Discount</th>
							<th className="border py-3 px-2 bg-base-200">Vat</th>
							<th className="border py-3 px-2 bg-base-200">Amount</th>
						</tr>
					</thead>
					<tbody>
						<tr className="">
							<th className="border p-2 text-center">1</th>
							<td className="border p-2 text-center">Men pant large</td>
							<td className="border p-2 text-center">PLACED</td>
							<td className="border p-2 text-center">Ram Supplier</td>
							<td className="border p-2 text-center">{commaNumber(1000)}</td>
							<td className="border p-2 text-center">12</td>
							<td className="border p-2 text-center">12000</td>
							<td className="border p-2 text-center">{commaNumber(2100)}(15%)</td>
							<td className="border p-2 text-center">{commaNumber(1300)}(13%)</td>
							<td className="border p-2 text-center">{commaNumber(13232)}</td>
						</tr>
						<tr className="">
							<th className="border p-2 text-center">1</th>
							<td className="border p-2 text-center">Men pant large</td>
							<td className="border p-2 text-center">PLACED</td>
							<td className="border p-2 text-center">Ram Supplier</td>
							<td className="border p-2 text-center">{commaNumber(1000)}</td>
							<td className="border p-2 text-center">12</td>
							<td className="border p-2 text-center">12000</td>
							<td className="border p-2 text-center">{commaNumber(2100)}(15%)</td>
							<td className="border p-2 text-center">{commaNumber(1300)}(13%)</td>
							<td className="border p-2 text-center">{commaNumber(13232)}</td>
						</tr>
						<tr className="">
							<th className="border p-2 text-center">1</th>
							<td className="border p-2 text-center">Men pant large</td>
							<td className="border p-2 text-center">PLACED</td>
							<td className="border p-2 text-center">Ram Supplier</td>
							<td className="border p-2 text-center">{commaNumber(1000)}</td>
							<td className="border p-2 text-center">12</td>
							<td className="border p-2 text-center">12000</td>
							<td className="border p-2 text-center">{commaNumber(2100)}(15%)</td>
							<td className="border p-2 text-center">{commaNumber(1300)}(13%)</td>
							<td className="border p-2 text-center">{commaNumber(13232)}</td>
						</tr>
					</tbody>
				</table> 
			</div>
            <div className="flex justify-between">
                <div >  </div>
                <div className="items-end-right">
                    <table className=" w-full border-collapse ">
                        <thead>
                            <tr className="">
                                <th className="border p-2 bg-base-200 text-center"  colSpan={2}>Summary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <th className="border p-2 text-center w-40">Total</th>
                                <td className="border p-2 text-center w-28">20000</td>
                            </tr>
                            <tr className="">
                                <th className="border p-2 text-center w-40">Discount</th>
                                <td className="border p-2 text-center w-28">1000</td>
                            </tr>
                            <tr className="">
                                <th className="border p-2 text-center w-40">Vat</th>
                                <td className="border p-2 text-center w-28">1300</td>
                            </tr>
                            <tr className="">
                                <th className="border p-2 text-center w-40">Other Charges</th>
                                <td className="border p-2 text-center w-28">100</td>
                            </tr>
                            <tr className="">
                                <th className="border p-2 text-center w-40">Grand Total</th>
                                <td className="border p-2 text-center w-28">30000</td>
                            </tr>
                            <tr className="">
                                <th className="border p-2 text-center w-40">Payment</th>
                                <td className="border p-2 text-center w-28">20000</td>
                            </tr>
                            <tr className="">
                                <th className="border p-2 text-center w-40">Due</th>
                                <td className="border p-2 text-center w-28">10000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
		</div>
	);
}
