import Link from "next/link";
import React from "react";
import {
	HiUser,
	HiLocationMarker,
	HiShoppingBag,
	HiHeart,
	HiOutlineLogout,
} from "react-icons/hi";
import { MdStore } from "react-icons/md";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { getCookie, setCookie, deleteCookie } from 'cookies-next';

type Props = {};

export default function AccountNav({}: Props) {
	const router = useRouter();
	const handleLogout = () => {
		deleteCookie("Ptoken")
		if (!getCookie("Ptoken")) {
			toast.success(`Logged out successfully`, {
				theme:
					window.localStorage.getItem("lightMode") === "true"
						? "light"
						: "dark",
			});
		}
		router.push("/login");
	};
	return (
		<div className="w-full bg-base-100 drop-shadow-sm px-2 py-4 rounded-md">
			<section className="pb-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b">
					ACCOUNT
				</h1>
				<div className="flex m-1 text-info hover:underline">
					<HiUser className="my-auto text-xl mr-2" />
					<Link href={"/account/detail"} className="my-auto">
						Profile Details
					</Link>
				</div>
				<div className="flex m-1  hover:underline">
					<HiLocationMarker className="my-auto text-xl mr-2" />
					<Link href={"/account/shipping"} className="my-auto">
						Shipping Address
					</Link>
				</div>
				<div className="flex m-1  hover:underline">
					<HiOutlineLogout className="my-auto text-xl mr-2" />
					<p onClick={handleLogout}>Logout</p>
				</div>
			</section>
			<section className="pb-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b">
					ORDERS
				</h1>
				<div className="flex m-1 hover:underline">
					<HiShoppingBag className="my-auto text-xl mr-2" />
					<Link href={"/account/order"} className="my-auto">
						My Orders
					</Link>
				</div>
				<div className="flex m-1  hover:underline">
					<HiHeart className="my-auto text-xl mr-2" />
					<Link href={"/account/wishlist"} className="my-auto">
						Wishlist
					</Link>
				</div>
			</section>
			<section className="pb-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b">
					VENDOR
				</h1>
				<div className="flex m-1 hover:underline">
					<MdStore className="my-auto text-xl mr-2" />
					<Link href={"/account/seller"} className="my-auto">
						Apply For Vendor
					</Link>
				</div>
			</section>
		</div>
	);
}
