import commaNumber from "comma-number";
import moment from "moment";
import React from "react";
import QsnModal from "./QsnModal";

type Props = {};

export default function QsnItem({qsn, seterror, setqsn, index, qsns}: any) {
	console.log("Qsn Item re-render")
	return (
		<tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 odd:bg-base-100">
			<th className="border-b p-2">{index+1}</th>
			<td className="border-b p-2 max-w-[250px]">
				{qsn?.product?.name}
			</td>
			<td className="border-b p-2 max-w-[380px]">
				{qsn?.question}
			</td>
			<td className="border-b p-2 text-center">
				<input type="checkbox" checked={qsn.answered} readOnly className="checkbox checkbox-success" />
			</td>
			<td className="border-b p-2 text-center">{qsn?.user?.name}</td>
			<td className="border-b p-2 text-center">
				{moment(qsn.createdAt).format("YYYY-MM-DD")}
			</td>
			<td className="border-b p-2 text-center">
				<QsnModal setqsn={setqsn} q={qsn} qsns={qsns} />
			</td>
		</tr>
	);
}
