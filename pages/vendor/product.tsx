import React from "react";
import ProductFilter from "../../components/vendor/productFilter";
import ProductList from "../../components/vendor/ProductList";
import VendorNav from "../../components/vendor/VendorNav";

type Props = {};

export default function product({}: Props) {
	return (
		<>
			<VendorNav basePath={"/product"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Product
				</h1>
                <div className="optionbar p-2 flex">
                    <button className="btn btn-sm btn-info mx-1">Add new product</button>
                    <ProductFilter />
                </div>
                <ProductList />
			</div>
		</>
	);
}
