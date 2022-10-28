import React from 'react'
import PaymentItem from './PaymentItem'

type Props = {}

export default function PaymentTable({}: Props) {
  return (
    <div className="overflow-x-auto ">
    <table className=" w-full border-collapse ">
        <thead>
            <tr className="">
                <th className="border py-3 px-2 bg-base-200">SN </th>
                <th className="border py-3 px-2 bg-base-200">Amount</th>
                <th className="border py-3 px-2 bg-base-200">OrderId</th>
                <th className="border py-3 px-2 bg-base-200">Mode</th>
                <th className="border py-3 px-2 bg-base-200">Remark</th>
                <th className="border py-3 px-2 bg-base-200">Date</th>
                <th className="border py-3 px-2 bg-base-200">AddedBy</th>
            </tr>
        </thead>
        <tbody>
            <PaymentItem />
            <PaymentItem />
            <PaymentItem />
            <PaymentItem />
        </tbody>
    </table>
</div>
  )
}