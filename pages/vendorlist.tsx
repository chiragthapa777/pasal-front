import Link from "next/link";
import React from "react";
import {
	MdHomeFilled,
	MdShoppingBasket,
	MdStore,
	MdSearch,
	MdChevronRight,
} from "react-icons/md";
import VendorCard from "../components/helper/VendorCard";

type Props = {};

export default function vendorlist({}: Props) {
	return (
		<>
			<div className="container mx-auto lg:w-5/6">
				<div className="text-sm breadcrumbs text-info">
					<ul className="lg:max-w-[1200px] container">
						<li className="cursor-pointer hover:underline">
							<MdHomeFilled className="mr-1 my-auto" />
							<Link href="/" className="my-auto">
								Home
							</Link>
						</li>
						<li className="cursor-pointer hover:underline">
							<MdShoppingBasket className="mr-1 my-auto" />
							<div className="my-auto">Product</div>
						</li>
						<li className="cursor-pointer hover:underline">
							<MdStore className="mr-1 my-auto" />
							<div className="my-auto">Vendors</div>
						</li>
					</ul>
				</div>
				<div className="products rounded-md my-3 py-4 px-2 flex-1">
					<div className="pageHeader p-1 font-bold text-base-content/80 text-xl md:text-3xl border-b ">
						Vendors
					</div>
					<div className="optionbar p-2 flex border-b  flex-wrap">
						<div className="form-control">
							<div className="input-group input-group-sm">
								<input
									type="text"
									placeholder="Search…"
									className="input input-bordered input-sm"
								/>
								<button className="btn btn-square btn-sm">
									<MdSearch className="text-xl" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="my-4 mx-2">
				<div className="container mx-auto lg:w-5/6 flex items-center justify-center flex-col px-2">
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
						<VendorCard />
						<VendorCard />
						<VendorCard />
						<VendorCard />
						<VendorCard />
						<VendorCard />
						<VendorCard />
						<VendorCard />
						<VendorCard />
					</div>
				</div>
			</div>
		</>
	);
}
