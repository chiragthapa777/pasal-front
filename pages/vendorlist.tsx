import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
	MdHomeFilled,
	MdShoppingBasket,
	MdStore,
	MdSearch,
	MdChevronRight,
} from "react-icons/md";
import { baseUrl } from "../api/apiUrl";
import Error from "../components/helper/Error";
import VendorCard from "../components/helper/VendorCard";
import useAxios from "../hooks/useAxios";

type Props = {
	data:[any]
	error:string
};

export default function vendorlist({error,data}:Props) {
	const [search, setSearch] = useState("");
	const router = useRouter();
	if (error !== "") {
		return <Error message={error} />;
	}
	const handleSearch = () => {
		router.push({
			pathname: "/vendorlist",
			query: {
				search,
			},
		});
	};
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
									value={search}
									onChange={(e) => {
										setSearch(e.target.value);
									}}
								/>
								<button
									className="btn btn-square btn-sm"
									onClick={handleSearch}
								>
									<MdSearch className="text-xl" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="my-4 mx-2">
				<div className="container mx-auto lg:w-5/6  flex-col px-2">
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
						{data.length>0 ? data.map((vendor:any)=><VendorCard key={vendor.id} vendor={vendor} />):"Cannot find any vendor"}
					</div>
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps({ req, res, query }: any) {
	const { search } = query;
	const axios = useAxios();
	let data: any = [];
	let error: string = "";
	try {
		let url = `${baseUrl}/vendor`;
		if (search) url += `/?search=${search}`;
		const res = await axios.get(url);
		data = res?.data?.data || [];
	} catch (error: any) {
		error = error?.response?.data?.data || "Something went Wrong!";
	}
	return {
		props: {
			data,
			error,
		},
	};
}
