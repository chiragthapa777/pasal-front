import commaNumber from 'comma-number'
import moment from 'moment'
import React from 'react'
import OrderModal from './OrderModal'

type Props = {
	order:any
	index:number
}

const colorSwitcher=(status:string)=>{
	switch (status){
		case "COMPLETED":
			return 'bg-green-100'
		// case "PLACED":
		// 	return 'bg-red-100'
		// case "WAREHOUSED":
		// 	return 'bg-cyan-100'
		// case "DELIVERING":
		// 	return 'bg-purple-100'
		default:
			return false
	}
}

//
export default function OrderItem({order, index}: Props) {

  return (
    <tr className={` hover:bg-blue-100 cursor-pointer ${colorSwitcher(order.status)||'even:bg-base-200/40 odd:bg-base-100'}`}>
			<th className="border-b p-2">{index+1}</th>
			<td className="border-b p-2  font-bold">{order.status}</td>
			<td className="border-b p-2 ">{order.user.name}</td>
			<td className="border-b p-2 ">{commaNumber(order.total)}</td>
			<td className="border-b p-2 ">{commaNumber(order.discount)}</td>
			<td className="border-b p-2 ">{commaNumber(order.vat)}</td>
			<td className="border-b p-2 ">{commaNumber(order.otherCharge)}</td>
			<td className="border-b p-2 ">{commaNumber(order.grandTotal)}</td>
			<td className="border-b p-2 ">
				{moment(order.createdAt).format("YYYY-MM-DD")}
			</td>
			<td className="border-b p-2">
				<OrderModal order={order} />
			</td>
		</tr>
  )
}
