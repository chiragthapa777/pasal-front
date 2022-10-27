import React from 'react'
import GroupItem from './GroupItem'

export default function GroupList() {
  return (
    <div className="overflow-x-auto ">
			<table className=" w-full border-collapse ">
				<thead>
					<tr className="">
						<th className="border py-3 px-2 bg-base-200">SN </th>
						<th className="border py-3 px-2 bg-base-200">Name</th>
						<th className="border py-3 px-2 bg-base-200">
							Addded At
						</th>
						<th className="border py-3 px-2 bg-base-200">Created At</th>
						<th className="border py-3 px-2 bg-base-200">Action</th>
					</tr>
				</thead>
				<tbody>
                <GroupItem />
                <GroupItem />
                <GroupItem />
                <GroupItem />
				</tbody>
			</table>
		</div>
  )
}
