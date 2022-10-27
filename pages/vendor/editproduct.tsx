import React from "react";
import ProductForm from "../../components/vendor/ProductForm";
import VendorNav from "../../components/vendor/VendorNav";

type Props = {};

export default function editproduct({}: Props) {
	return (
		<>
			<VendorNav basePath={"editproduct"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Edit Product
				</h1>
				<ProductForm />
			</div>
		</>
	);
}
