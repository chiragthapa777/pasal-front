import React from "react";

import { MdDeleteForever } from "react-icons/md";

type Props = {};

export default function WishlistTable({}: Props) {
	return (
		<div className="overflow-x-auto">
			<table className="table table-zebra w-full">
				<thead>
					<tr>
						<th>Product</th>
						<th>Image</th>
						<th>Name</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th className="text-primary underline link">#1</th>
						<td>
							<img
								src="https://www.gyapu.com/public/files/252709430A14B21-4.jpg"
								alt=""
								className="h-28 w-28 object-cover"
							/>
						</td>
						<td>Quality Control Specialist</td>
						<td>
							<MdDeleteForever className="text-3xl hover:text-error cursor-pointer" />
						</td>
					</tr>
					<tr>
						<th className="text-primary underline link">#1</th>
						<td>
							<img
								src="https://www.gyapu.com/public/files/252709430A14B21-4.jpg"
								alt=""
								className="h-28 w-28 object-cover"
							/>
						</td>
						<td>Quality Control Specialist</td>
						<td>
							<MdDeleteForever className="text-3xl hover:text-error cursor-pointer" />
						</td>
					</tr>
					<tr>
						<th className="text-primary underline link">#1</th>
						<td>
							<img
								src="https://www.gyapu.com/public/files/252709430A14B21-4.jpg"
								alt=""
								className="h-28 w-28 object-cover"
							/>
						</td>
						<td>Quality Control Specialist</td>
						<td>
							<MdDeleteForever className="text-3xl hover:text-error cursor-pointer" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
