import React from 'react'
import AdminNav from '../../../components/admin/AdminNav'
import OrderList from '../../../components/admin/order/OrderList'

type Props = {}

export default function index({}: Props) {
  return (
    <>
			<AdminNav basePath={"orders"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Order Items
				</h1>
				<OrderList />
			</div>
		</>
  )
}