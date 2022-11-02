import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
	MdCategory,
	MdHomeFilled,
	MdSearch,
	MdShoppingBasket,
	MdStore,
} from "react-icons/md";
import { baseUrl } from "../api/apiUrl";
import CategoryCard from "../components/helper/CategoryCard";
import Error from "../components/helper/Error";
import useAxios from "../hooks/useAxios";

type Props = {
	data: any;
	error: string;
};

export default function categories({ data, error }: Props) {
	const [search, setSearch] = useState("");
	const router=useRouter()
	if (error !== "") {
		return <Error message={error} />;
	}
	const handleSearch =() =>{
		router.push({
			pathname: "/categories",
			query: {
				search,
			},
		});
	}
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
							<MdCategory className="mr-1 my-auto" />
							<div className="my-auto">Categories</div>
						</li>
					</ul>
				</div>
				<div className="products rounded-md my-3 py-4 px-2 flex-1">
					<div className="pageHeader p-1 font-bold text-base-content/80 text-xl md:text-3xl border-b ">
						Categories
					</div>
					<div className="optionbar p-2 flex border-b  flex-wrap">
						<div className="form-control">
							<div className="input-group input-group-sm">
								<input
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									type="text"
									placeholder="Search…"
									className="input input-bordered input-sm"
								/>
								<button className="btn btn-square btn-sm" onClick={handleSearch}>
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
						{data?.length > 0
							? data.map((tag: any) => (
									<CategoryCard key={tag.id} tag={tag} />
							  ))
							: "No Tags to show"}
					</div>
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps({ req, res,query }: any) {
	const {search}=query
	console.log(search)
	const axios = useAxios();
	let data: any = [];
	let error: string = "";
	try {
		let url=`${baseUrl}/tag`
		if(search)url+=`/?search=${search}`
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
