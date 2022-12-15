import React from 'react'
import AdminNav from '../../../components/admin/AdminNav'
import PaymentForm from '../../../components/admin/payment/PaymentForm'

type Props = {}

export default function add({}: Props) {
  return (
        <>
			<AdminNav basePath={"payments"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Add Payment
				</h1>
				<div className="optionbar p-2 flex flex-wrap gap-2">
				<PaymentForm />
                </div>
			</div>
		</>
  )
}
