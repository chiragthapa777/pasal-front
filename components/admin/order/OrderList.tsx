import React from 'react'
import OrderItem from './OrderItem'

type Props = {}

export default function OrderList({}: Props) {
  return (
    <div className="overflow-x-auto ">
			<table className=" w-full border-collapse ">
				<thead>
					<tr className="">
						<th className="border py-3 px-2 bg-base-200">SN </th>
						<th className="border py-3 px-2 bg-base-200">status</th>
						<th className="border py-3 px-2 bg-base-200">Customer</th>
						<th className="border py-3 px-2 bg-base-200">Total</th>
						<th className="border py-3 px-2 bg-base-200">Discount</th>
						<th className="border py-3 px-2 bg-base-200">Vat</th>
						<th className="border py-3 px-2 bg-base-200">Order Charges</th>
						<th className="border py-3 px-2 bg-base-200">Grand Total</th>
						<th className="border py-3 px-2 bg-base-200">Date</th>
						<th className="border py-3 px-2 bg-base-200">Action</th>
					</tr>
				</thead>
				<tbody>
					<OrderItem />
					<OrderItem />
					<OrderItem />
					<OrderItem />
				</tbody>
			</table>
		</div>
  )
}