import Link from "next/link";
import React from "react";
import { MdHomeFilled, MdArrowDropDown } from "react-icons/md";

type Props = {
	basePath: string;
};

export default function VendorNav({ basePath }: Props) {
	return (
		<div className="w-full border-b bg-base-100">
			<div className="flex justify-between py-2 container lg:max-w-[1300px] mx-auto">
				<h1 className="my-auto text-primary text-3xl font-extrabold tracking-tighter">
					Ram Supplier
				</h1>
				<div className="dropdown dropdown-end my-auto">
					<label
						tabIndex={0}
						className="btn btn-sm btn-primary p-0 pr-5 pl-8"
					>
						Menu{" "}
						<MdArrowDropDown className=" text-2xl my-auto mr-0" />
					</label>
					<ul
						tabIndex={0}
						className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border"
					>
						<li className="border-b">
							<Link href={"/vendor/product"}>Product</Link>
						</li>
						<li className="border-b">
							<Link href={"/vendor/addproduct"}>Add Product</Link>
						</li>
						<li className="border-b">
							<Link href={"/vendor/editproduct"}>edit tempo</Link>
						</li>
						<li className="border-b">
						<Link href={"/vendor/productgroup"}>Product Group</Link>
						</li>
						<li className="border-b">
							<a>Order Items</a>
						</li>
						<li className="">
							<a>Question</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="container lg:max-w-[1300px] mx-auto">
				<div className="text-sm breadcrumbs text-info ">
					<ul className="lg:max-w-[1200px] container ">
						<li className="cursor-pointer hover:underline">
							<MdHomeFilled className="mr-1 my-auto" />
							<Link href="/" className="my-auto">
								Home
							</Link>
						</li>
						<li className="cursor-pointer hover:underline">
							<Link href="/vendor" className="my-auto">
								Vendor
							</Link>
						</li>
						{basePath != "/" && (
							<li className="cursor-pointer hover:underline">
								<Link
									href={`/vendor/${basePath}`}
									className="my-auto"
								>
									{basePath}
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}
