import React from 'react'
import VendorTableItem from './VendorTableItem'

type Props = {}

export default function VendorTable({}: Props) {
  return (
    <div className="overflow-x-auto ">
			<table className=" w-full border-collapse ">
				<thead>
				<tr className="">
                <th className="border py-3 px-2 bg-base-200">SN </th>
                <th className="border py-3 px-2 bg-base-200">Name</th>
                <th className="border py-3 px-2 bg-base-200">Description</th>
                <th className="border py-3 px-2 bg-base-200">Email</th>
                <th className="border py-3 px-2 bg-base-200">Active</th>
                <th className="border py-3 px-2 bg-base-200">Pan</th>
                <th className="border py-3 px-2 bg-base-200">Date</th>
                <th className="border py-3 px-2 bg-base-200">Pending Request</th>
                <th className="border py-3 px-2 bg-base-200">Action</th>
            </tr>
				</thead>
				<tbody>
					<VendorTableItem />
					<VendorTableItem />
					<VendorTableItem />
					<VendorTableItem />
				</tbody>
			</table>
		</div>
  )
}