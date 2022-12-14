import React, { useState } from "react";
import Itemlist from "./Itemlist";
import Dropdown from "./Dropdown";
import { MdOutlineMenu, MdSearch, MdStore } from "react-icons/md";
import Footer from "../footer/Footer";
import Cart from "./additional/Cart";
import Favorite from "./additional/Favorite";
import Account from "./additional/Account";
import BottomNavigation from "./BottomNavigation";
import ThemeSwap from "./additional/ThemeSwap";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar({ children, theme, settheme }: any) {
	const router = useRouter();
	const [search, setSearch] = useState("");
	const handleSearch = () => {
		if(search!==""){
			router.push({
				pathname: "/product",
				query: {
					search,
				},
			});
			setSearch("")
		}
	};
	return (
		<div className="drawer">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				<div className="w-full navbar flex justify-between  bg-base-100 sticky top-0 z-50 drop-shadow">
					{/* logo and hamburger */}
					<div className="my-auto">
						<div className="lg:hidden my-auto">
							<label
								htmlFor="my-drawer-3"
								className="btn btn-square btn-ghost btn-sm md:btn-md my-ato"
							>
								<MdOutlineMenu className="text-3xl my-auto md:text-4xl text-base-content p-1" />
							</label>
						</div>
						<div className="flex-1 px-[0.05rem] md:px-2 mx-1 md:mx-2 text-3xl md:text-4xl font-extrabold text-primary">
							{" "}
							<Link href={"/"}>
								<div className="flex cursor-pointer">
									<MdStore className="my-auto pr-1" />
									<p>पसल</p>
								</div>
							</Link>{" "}
						</div>
					</div>
					{/* serach bar */}
					<div className="form-control block sm:hidden ">
						<div className=" input-group ">
							<input
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								type="text"
								placeholder="Search…"
								className="input input-bordered input-sm sm:input-md p-1 w-[160px] xs:w-[200px] bg-base-300/40"
							/>
							<button className="btn btn-square btn-sm" onClick={handleSearch}>
								<MdSearch className="text-2xl sm:text-3xl" />
							</button>
						</div>
					</div>
					<div className="form-control hidden sm:block ">
						<div className=" input-group ">
							<input
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								type="text"
								placeholder="Search…"
								className="input input-bordered input-sm sm:input-md p-1 lg:w-[450px] bg-base-300/40"
							/>
							<button className="btn btn-square " onClick={handleSearch}>
								<MdSearch className="text-2xl md:text-3xl" />
							</button>
						</div>
					</div>
					<div className="mr-1 sm:mr-3 mt-1 cursor-pointer">
						<div className="hidden sm:block">
							{/* cart */}
							<Cart />
							{/* wishlist */}
							<Favorite />
							{/* profile */}
							<Account />
						</div>
						<ThemeSwap theme={theme} settheme={settheme} />
					</div>
				</div>
				<div className="flex-none hidden md:block -z-40">
					<ul className="menu menu-horizontal bg-neutral text-neutral-content w-full">
						{/* <!-- Navbar menu content here --> */}
						<Itemlist />
					</ul>
				</div>
				<div className="bg-base-300/40 ">
					{children}
					<div className="block sm:hidden">
						<BottomNavigation />
					</div>
					<Footer />
				</div>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
				<ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
					{/* <!-- Sidebar content here --> */}
					<Itemlist />
				</ul>
			</div>
		</div>
	);
}
