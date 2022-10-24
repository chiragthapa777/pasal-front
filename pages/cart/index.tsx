import React from "react";
import CartItem from "../../components/cart/cartItem";
import { IoBagCheckSharp } from "react-icons/io5";
import commaNumber from "comma-number";
import Link from "next/link";
import { MdHomeFilled, MdShoppingCart } from "react-icons/md";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function cart() {
	const router = useRouter();
	const handleCheckout = () => {
		router.push("/checkout/shipping")
	};
	return (
		<div className={"CartCss lg:max-w-[1200px] container mx-auto p-1"}>
			{/* upper navigation */}
			<div className="text-sm breadcrumbs text-info">
				<ul className="lg:max-w-[1200px] container">
					<li className="cursor-pointer hover:underline">
						<MdHomeFilled className="mr-1 my-auto" />
						<Link href="/" className="my-auto">
							Home
						</Link>
					</li>
					<li className="cursor-pointer hover:underline">
						<MdShoppingCart className="mr-1 my-auto" />
						<Link href="/cart" className="my-auto">
							Cart
						</Link>
					</li>
				</ul>
			</div>
			<section className="cartWrapper flex flex-col  items-start content-start lg:flex-row w-full">
				<div className="itemsArray w-full lg:w-[70%] mx-1 md:mr-3">
					<h1 className="font-extrabold text-3xl  py-1">
						My Carts
						<div className="divider p-0 m-0 "></div>
					</h1>
					<CartItem />
					<CartItem />
				</div>
				<div className="orderSummary w-80 bg-base-100 drop-shadow-md rounded-sm mx-auto lg:w-[30%]">
					<h1 className="bg-info font-extrabold text-2xl text-info-content text-center rounded-t-sm py-3">
						Order Summary
					</h1>
					<div className="w-full px-2 py-1 flex justify-between">
						<p className="">Total (Selected 2 items)</p>
						<p className="font-bold"> Rs. {commaNumber(12000)}</p>
					</div>
					<div className="w-full px-2 py-1 flex justify-between">
						<p className="">Discount</p>
						<p className="font-bold"> Rs. {commaNumber(300)}</p>
					</div>
					<div className="w-full px-2 py-1 flex justify-between">
						<p className="">Vat</p>
						<p className="font-bold">Rs. {commaNumber(1000)}</p>
					</div>
					<div className="w-full px-2 py-1 flex justify-between border-b">
						<p className="">Delivery (Lalitpur)</p>
						<p className="font-bold"> Rs. {commaNumber(100)}</p>
					</div>
					<div className="w-full px-2 py-2 flex justify-between text-2xl font-extrabold bg-base-200/50">
						<p className="">Total Payable</p>
						<p className="font-bold"> Rs. {commaNumber(13000)}</p>
					</div>
				</div>
			</section>
			<div className="cartButtons flex justify-center m-2">
				<button className="btn btn-primary btn-md btn-block sm:btn-wide sm:px-12" onClick={handleCheckout}>
					{" "}
					<IoBagCheckSharp className="mr-2 text-xl sm:text-2xl" />{" "}
					Checkout{" "}
				</button>
			</div>
		</div>
	);
}
