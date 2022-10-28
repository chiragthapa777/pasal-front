import React from 'react'
import TagItem from './TagItem'

type Props = {}

export default function TagTable({}: Props) {
  return (
    <div className="overflow-x-auto ">
    <table className=" w-full border-collapse ">
    <thead>
					<tr className="">
						<th className="border py-3 px-2 bg-base-200">SN </th>
						<th className="border py-3 px-2 bg-base-200">Name</th>
						<th className="border py-3 px-2 bg-base-200">
							Description
						</th>
						<th className="border py-3 px-2 bg-base-200">Date</th>
						<th className="border py-3 px-2 bg-base-200">Action</th>
					</tr>
				</thead>
        <tbody>
            <TagItem />
            <TagItem />
            <TagItem />
            <TagItem />
            <TagItem />
        </tbody>
    </table>
</div>
  )


}