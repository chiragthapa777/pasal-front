import commaNumber from "comma-number";
import moment from "moment";
import React from "react";
import Loader from "../../helper/Loader";
import QsnItem from "./QsnItem";
import QsnModal from "./QsnModal";

export default function QsnLists({ qsn, setqsn, seterror, loading }: any) {
	return (
		<div className="overflow-x-auto ">
			<table className=" w-full border-collapse border">
				<thead>
					<tr className="">
						<th className="border-b py-3 px-2 bg-base-200">SN </th>
						<th className="border-b py-3 px-2 bg-base-200">
							Product
						</th>
						<th className="border-b py-3 px-2 bg-base-200">
							Question
						</th>
						<th className="border-b py-3 px-2 bg-base-200">
							Answered
						</th>
						<th className="border-b py-3 px-2 bg-base-200">
							Customer
						</th>
						<th className="border-b py-3 px-2 bg-base-200">Date</th>
						<th className="border-b py-3 px-2 bg-base-200">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{loading ? (
						<td colSpan={7} className="text-center">
							<Loader />
						</td>
					) : qsn.length > 0 ? (
						qsn.map((q: any, index: number) => (
							<QsnItem
								qsn={q}
								setqsn={setqsn}
								qsns={qsn}
								seterror={seterror}
								index={index}
								key={q.id}
							/>
						))
					) : (
						<td colSpan={10} className="text-center">
							No order items yet
						</td>
					)}
				</tbody>
			</table>
		</div>
	);
}
