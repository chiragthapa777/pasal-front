import commaNumber from "comma-number";
import moment from "moment";
import React from "react";
import VendorUpdateModal from "./VendorUpdateModal";

type Props = {};

export default function VendorTableItem({}: Props) {
	return (
		<tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 odd:bg-base-100">
		<th className="border p-2">1</th>
		<td className="border p-2 text-center">Ram Supplier</td>
		<th className="border p-2 w-96">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
			eveniet molestiae sint ullam atque quas quos, corrupti a soluta
			ad.
		</th>
		<td className="border p-2 text-center">Ram.supplier@gmail.com</td>
		<td className="border p-2 text-center">
			<input type="checkbox" checked={true} className="checkbox" />
		</td>
		<td className="border p-2 text-center">1234567890</td>
		<td className="border p-2 text-center">
			{moment("2022-10-22T12:01:25.263Z").format("YYYY-MM-DD")}
		</td>
		<td className="border p-2 text-center">
			<input type="checkbox" checked={false} className="checkbox" />
		</td>
		<td className="border p-2 text-center">
			<VendorUpdateModal />
		</td>
	</tr>
	);
}
