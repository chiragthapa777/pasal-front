import moment from "moment";
import React, {useContext} from "react";
import TagEditModal from "./TagEditModal";

type Props = {};

export default function TagItem({tag, index}: any) {
	return (
		<tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 odd:bg-base-100">
			<th className="border-b p-2">{index+1}</th>
			<td className="border-b p-2 ">{tag.name}</td>
			<th className="border-b p-2 w-96 ">{tag.desc|| '-'}</th>
			<td className="border-b p-2 ">
				{moment(tag.createdAt).format("YYYY-MM-DD")}
			</td>
			<td className="border-b p-2 ">
				<TagEditModal tag={tag} type={'edit'} />
			</td>
		</tr>
	);
}
