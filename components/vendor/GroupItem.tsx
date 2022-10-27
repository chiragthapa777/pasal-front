import commaNumber from 'comma-number';
import moment from 'moment';
import React from 'react'

type Props = {}

export default function GroupItem({}: Props) {
    const handleSelect = () => {
		console.log("select");
	};
	return (
		<tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 odd:bg-base-100">
			<th className="border p-2">1</th>
			<td className="border p-2 ">
				<img
					src="https://images.pexels.com/photos/5190599/pexels-photo-5190599.jpeg?auto=compress&cs=tinysrgb&w=600"
					className="h-12 w-12 object-cover mx-auto"
					alt=""
				/>
			</td>
			<td className="border p-2">Quality Control Specialist</td>
			<td className="border p-2 text-center">{commaNumber(1200)}</td>
			<th className="border p-2 text-center">10</th>
			<td className="border p-2  text-center">Cy Ganderton</td>
			<td className="border p-2 text-center">
				<input type="checkbox" checked={true} className="checkbox" />
			</td>
			<td className="border p-2 text-center">{moment("2022-10-22T12:01:25.263Z").format("YYYY-MM-DD")}</td>
			<td className="border p-2 text-center">
				<button className="btn btn-xs btn-success mr-1">view</button>
				<button
					className="btn btn-xs btn-secondary"
					onClick={handleSelect}
				>
					select
				</button>
			</td>
		</tr>
	);
}