import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import ProductGroup from "../../components/product/ProductGroup";
import {
	MdCategory,
	MdHomeFilled,
	MdShoppingBasket,
	MdStore,
	MdSearch,
} from "react-icons/md";

import { productList } from "../../data";
import Link from "next/link";
import useAxios from "../../hooks/useAxios";
import { baseUrl } from "../../api/apiUrl";
import Error from "../../components/helper/Error";
import { getCookie } from "cookies-next";

export default function index({ data, query, error }: any) {
	const topRef: any = useRef(null);
	const [search, setsearch] = useState("");
	const [showSideBar, setShowSidebar] = useState(false);
	const router = useRouter();
	const [open, setOpen] = useState(false);
	useEffect(() => {
		topRef.current.scrollIntoView({ behavior: "auto" });
	}, []);

	if (error !== "") {
		return <Error message={error} />;
	}

	return (
		<>
			<div className="container mx-auto lg:w-5/6" ref={topRef}>
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
							<Link href="/product" className="my-auto">
								Product
							</Link>
						</li>
						{query?.tag && (
							<li className="cursor-pointer hover:underline">
								<MdCategory className="mr-1 my-auto" />
								<div className="my-auto">{query.tag}</div>
							</li>
						)}
						{query?.search && (
							<li className="cursor-pointer hover:underline">
								<MdSearch className="mr-1 my-auto" />
								<div className="my-auto">Search</div>
							</li>
						)}
						{query?.vendor && (
							<li className="cursor-pointer hover:underline">
								<MdStore className="mr-1 my-auto" />
								<div className="my-auto">{query.vendor}</div>
							</li>
						)}
					</ul>
				</div>
				<div className="products rounded-md my-3 py-4 px-2 flex-1">
					{query?.search && (
						<div className="pageHeader p-1 font-bold text-base-content/80 text-xl md:text-3xl border-b ">
							Search result for : {query.search}
						</div>
					)}
					{query?.tag && (
						<>
							<div className="pageHeader p-1 font-bold text-base-content/80 text-xl md:text-3xl border-b ">
								Category : {query.tag}
								{data.length > 0 && (
									<p className="text-sm font-normal">
										{
											data[0]?.productTags?.find(
												(s: any) =>
													s?.tag?.name === query.tag
											)?.tag?.desc
										}
									</p>
								)}
							</div>
						</>
					)}
					{query?.vendor && (
						<>
							<div className="pageHeader p-1 font-bold text-base-content/80 text-xl md:text-3xl border-b ">
								<span className="flex">
									<MdStore className="my-auto mr-1" />
									{query.vendor}
								</span>
								{data.length > 0 && (
									<p className="text-sm font-normal">
										{data[0]?.vendor?.desc}
									</p>
								)}
							</div>
						</>
					)}
					<div className="optionbar p-2 flex border-b  flex-wrap">
						<select className="select select-info select-sm ">
							<option disabled selected>
								Sort by
							</option>
							<option>Price low to high</option>
							<option>Price high to low</option>
							<option>Newer first</option>
							<option>Older first</option>
						</select>
					</div>
				</div>
			</div>
			<ProductGroup productList={data} />
		</>
	);
}

export async function getServerSideProps({ req, res, query }: any) {
	const axios = useAxios(getCookie("Ptoken", { req, res }));
	let data: any = [];
	let url = `${baseUrl}/product`;
	let error = "";
	if (query?.search) {
		url += `/?search=${encodeURIComponent(query.search)}`;
	}
	if (query?.tag) {
		url += `/?tag=${encodeURIComponent(query.tag)}`;
	}
	if (query?.vendor) {
		url += `/?vendor=${encodeURIComponent(query.vendor)}`;
	}
	console.log(url);
	try {
		const res = await axios.get(url);
		data = res?.data?.data || [];
	} catch (error: any) {
		error = error?.response?.data?.data || "Something went wrong !!!";
	}

	return {
		props: {
			data,
			query,
			error,
		},
	};
}
