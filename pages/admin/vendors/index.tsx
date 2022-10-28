import React from "react";
import AdminNav from "../../../components/admin/AdminNav";
import VendorTable from "../../../components/admin/vendor/VendorTable";

type Props = {};

export default function index({}: Props) {
	return (
		<>
			<AdminNav basePath={"vendors"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Vendor List
				</h1>
				<div className="optionbar p-2 flex">
					<button
						className="btn btn-sm btn-info mx-1"
					>
						Filter Vendor
					</button>
				</div>
				<VendorTable />
			</div>
		</>
	);
}
