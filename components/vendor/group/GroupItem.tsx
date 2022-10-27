import commaNumber from "comma-number";
import moment from "moment";
import React from "react";

type Props = {};

export default function GroupItem({}: Props) {
	const handleSelect = () => {
		console.log("select");
	};
	return (
		<tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 odd:bg-base-100">
			<th className="border p-2">1</th>

			<td className="border p-2">Quality Control Specialist</td>
			<th className="border p-2 text-center">10</th>
			<td className="border p-2 text-center">
				{moment("2022-10-22T12:01:25.263Z").format("YYYY-MM-DD")}
			</td>
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
