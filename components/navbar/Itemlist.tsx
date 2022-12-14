import React, { useState, useEffect } from "react";
import {
	MdCategory,
	MdStore,
	MdDashboard,
	MdFilterAlt,
	MdShoppingBasket,
	MdAdminPanelSettings,
} from "react-icons/md";
import { GrProductHunt } from "react-icons/gr";
import Link from "next/link";
import Filter from "../helper/modal/Filter";
import jwtDecode from "jwt-decode";

export default function Itemlist() {
	const [user, setuser] = useState<any>({});
	// const handlefilter=()=>{
	//     setIsOpen(!isOpen)
	// }
	useEffect(() => {
		const token: any = localStorage.getItem("Ptoken");
		if(token){
			const user: any = jwtDecode(token);
			setuser(user);
		}
	}, []);

	return (
		<>
			{/* Modals */}
			{/* <Filter isOpen={isOpen} setIsOpen={setIsOpen}  /> */}
			{/* modals */}

			<Link href={"/"}>
				<li
					className={
						"md:hidden mx-auto mb-2 text-2xl font-bold bg-primary text-primary-content w-full rounded-md hover:bg-primary-focus "
					}
				>
					<h1 className={"mx-auto"}>पसल</h1>
				</li>
			</Link>
			<Link href={"/categories"}>
				<li
					className={
						"md:hover:bg-primary md:hover:text-primary-content"
					}
				>
					<a>
						<MdCategory className={" text-2xl"} />
						Categories
					</a>
				</li>
			</Link>
			<Link href={"/vendorlist"}>
				<li
					className={
						"md:hover:bg-primary md:hover:text-primary-content"
					}
				>
					<a>
						<MdStore className={" text-2xl"} />
						Vendors
					</a>
				</li>
			</Link>
			<Link href={"/product"}>
				<li
					className={
						"md:hover:bg-primary md:hover:text-primary-content"
					}
				>
					<a>
						<GrProductHunt className={" text-2xl"} />
						Products
					</a>
				</li>
			</Link>
			<Link href={"/account/order"}>
				<li
					className={
						"md:hover:bg-primary md:hover:text-primary-content"
					}
				>
					<a>
						<MdShoppingBasket className={" text-2xl"} />
						Orders
					</a>
				</li>
			</Link>
			{(user?.role!=="USER" && user?.vendorId) ? (
				<Link href={"/vendor"}>
					<li
						className={
							"md:hover:bg-primary md:hover:text-primary-content"
						}
					>
						<a>
							<MdDashboard className={" text-2xl"} />
							My Store
						</a>
					</li>
				</Link>
			) : null}
			{user?.role === "ADMIN" ? (
				<Link href={"/admin"}>
					<li
						className={
							"md:hover:bg-primary md:hover:text-primary-content"
						}
					>
						<a>
							<MdAdminPanelSettings className={" text-2xl"} />
							Admin
						</a>
					</li>
				</Link>
			) : null}
		</>
	);
}
