import commaNumber from "comma-number";
import moment from "moment";
import React from "react";
import QsnModal from "./QsnModal";

type Props = {};

export default function QsnItem({}: Props) {
	return (
		<tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 odd:bg-base-100">
			<th className="border p-2">1</th>
			<td className="border p-2 text-center max-w-[380px]">
				Laudantium eaque necessitatibus iure, mollitia dolore voluptate.
				Consequuntur vel voluptates ducimus hic at enim autem??
			</td>
			<td className="border p-2 text-center">
				<input type="checkbox" checked={false} className="checkbox" />
			</td>
			<td className="border p-2 text-center">Chirag Thapa</td>
			<td className="border p-2 text-center">
				{moment("2022-10-22T12:01:25.263Z").format("YYYY-MM-DD")}
			</td>
			<td className="border p-2 text-center">
				<QsnModal />
			</td>
		</tr>
	);
}
