import React from "react";
import ProductCard from "./ProductCard";

function ProductGroup(props: any) {
	const { header, productList } = props;
	return (
		<div className="my-2 mt-10">
			<div className="container mx-auto lg:w-5/6 flex items-center justify-center flex-col px-2">
				{header && (
					<div className={"w-full flex justify-between m-2 sm:mx-20"}>
						<h1
							className={
								"text-base-content/50 font-bold text-2xl hover:text-black cursor-pointer"
							}
						>
							{header}
						</h1>
						<button className="btn btn-sm btn-info">
							Show More
						</button>
					</div>
				)}

				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{productList.length > 0
						? productList.map((product: any) => {
								return <ProductCard product={product} />;
						  })
						: "Cannot find any products"}
				</div>
			</div>
		</div>
	);
}

export default ProductGroup;
