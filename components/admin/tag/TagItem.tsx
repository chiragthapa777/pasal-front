import moment from "moment";
import React from "react";
import TagEditModal from "./TagEditModal";

type Props = {};

export default function TagItem({}: Props) {
	return (
		<tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 odd:bg-base-100">
			<th className="border p-2">1</th>
			<td className="border p-2 text-center">Men's Fashion</td>
			<th className="border p-2 w-96">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
				eveniet molestiae sint ullam atque quas quos, corrupti a soluta
				ad.
			</th>
			<td className="border p-2 text-center">
				{moment("2022-10-22T12:01:25.263Z").format("YYYY-MM-DD")}
			</td>
			<td className="border p-2 text-center">
				<TagEditModal />
			</td>
		</tr>
	);
}
