import React from 'react'
import PaymentItem from './PaymentItem'
import Loader from "../../helper/Loader";
import VendorTableItem from "../vendor/VendorTableItem";
import {Payment} from "../../../utils/types/payment";

type Props = {
    loading : boolean,
    payments : Payment[]
}

export default function PaymentTable({loading, payments}: Props) {
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
        {
            loading ?
                <tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 ">
                    <td colSpan={7} className="text-center ">
                        <Loader />
                    </td>
                </tr> : (
                    payments.length>0 ?
                        payments.map((p:Payment, index:number)=><PaymentItem key={p.id} index={index+1} payment={p} />) :
                        <tr>
                            <td colSpan={7} className="text-center p-2">
                                No payments
                            </td>
                        </tr>
                )
        }
        </tbody>
    </table>
</div>
  )
}
