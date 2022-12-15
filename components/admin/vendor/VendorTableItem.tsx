import commaNumber from "comma-number";
import moment from "moment";
import React from "react";
import VendorUpdateModal from "./VendorUpdateModal";

type Props = {
	vendor : any
	index:number
};

export default function VendorTableItem({vendor, index}: Props) {
	return (
		<tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 odd:bg-base-100">
		<th className="border-b p-2 ">{index}</th>
		<td className="border-b p-2 ">{vendor.name}</td>
		<th className="border-b p-2 w-96 text-left">
			{vendor.desc}
		</th>
		<td className="border-b p-2 ">{vendor.email}</td>
		<td className="border-b p-2 ">
			<input type="checkbox" readOnly={true}  checked={vendor.active} className="checkbox checkbox-success" />
		</td>
		<td className="border-b p-2 ">{vendor.pan}</td>
		<td className="border-b p-2 ">
			{moment(vendor.createdAt).format("YYYY-MM-DD")}
		</td>
		<td className="border-b p-2 ">
			<input type="checkbox" readOnly={true} checked={vendor.requestAccepted} className="checkbox checkbox-secondary" />
		</td>
		<td className="border-b p-2 ">
			<VendorUpdateModal vendor={vendor} />
		</td>
	</tr>
	);
}
