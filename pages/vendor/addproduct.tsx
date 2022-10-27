import React from "react";
import ProductForm from "../../components/vendor/product/ProductForm";
import VendorNav from "../../components/vendor/VendorNav";

type Props = {};

export default function addproduct({}: Props) {
	return (
		<>
			<VendorNav basePath={"addproduct"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Add Product
				</h1>
				<ProductForm />
				<div className="mx-2 my-1">
					<button className="btn btn-primary">Add Product</button>
				</div>
			</div>
		</>
	);
}
