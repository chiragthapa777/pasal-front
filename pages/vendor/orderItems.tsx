import React from "react";
import OrderItemList from "../../components/vendor/orderItem/OrderItemList";
import VendorNav from "../../components/vendor/VendorNav";

type Props = {};

export default function orderItems({}: Props) {
	return (
		<>
			<VendorNav basePath={"orderItem"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Order Items
				</h1>
				<OrderItemList />
			</div>
		</>
	);
}
