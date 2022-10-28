import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import ProductGroup from "../../components/product/ProductGroup";
import {
	MdCategory,
	MdHomeFilled,
	MdShoppingBasket,
	MdStore,
	MdSearch
} from "react-icons/md";

import { productList } from "../../data";
import Link from "next/link";

export default function index({ data, query }: any) {
	const topRef:any = useRef(null);
    useEffect(() => {
      topRef.current.scrollIntoView({ behavior: "auto" });

    }, [])
    
	const [search, setsearch] = useState("");
	const [showSideBar, setShowSidebar] = useState(false);
	const router = useRouter();
	useEffect(() => {
		// router.push({
		//   pathname:'/product',
		//   query:{
		//     serach:"asdigfai"
		//   }
		// })
		//yoo garna ni milxa kina ki client side vayo
	}, []);
	const handleSearch = () => {
		router.push({
			pathname: "/product",
			query: {
				search,
			},
		});
	};

	const [open, setOpen] = useState(false);
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
							<div className="my-auto">Product</div>
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
								<p className="text-sm font-normal">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Veritatis, deserunt!
								</p>
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
								<p className="text-sm font-normal">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Veritatis, deserunt!
								</p>
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
			<ProductGroup productList={productList} />
		</>
	);
}

export async function getServerSideProps({ query }: any) {
	console.log("pugyoooooo");
	function timeout() {
		return new Promise((resolve) => setTimeout(resolve, 3000));
	}
	console.log("Req : ", query);
	// await timeout();
	return {
		props: {
			data: [],
			query,
		},
	};
}
