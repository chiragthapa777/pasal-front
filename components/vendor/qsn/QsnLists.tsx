import commaNumber from 'comma-number'
import moment from 'moment'
import React from 'react'
import QsnItem from './QsnItem'
import QsnModal from './QsnModal'

type Props = {}

export default function QsnLists({}: Props) {
  return (
    <div className="overflow-x-auto ">
    <table className=" w-full border-collapse ">
        <thead>
            <tr className="">
                <th className="border py-3 px-2 bg-base-200">SN </th>
                <th className="border py-3 px-2 bg-base-200">Question</th>
                <th className="border py-3 px-2 bg-base-200">Answered</th>
                <th className="border py-3 px-2 bg-base-200">Customer</th>
                <th className="border py-3 px-2 bg-base-200">Date</th>
                <th className="border py-3 px-2 bg-base-200">Action</th>
            </tr>
        </thead>
        <tbody>
            <QsnItem />
            <QsnItem />
            <QsnItem />
            <QsnItem />
        </tbody>
    </table>
</div>
  )
}