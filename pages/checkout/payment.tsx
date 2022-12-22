import commaNumber from "comma-number";
import Link from "next/link";
import React from "react";
import { MdCheckCircle, MdHomeFilled, MdAttachMoney } from "react-icons/md";
import OrderSummary from "../../components/OrderSummary";

type Props = {};

export default function payment({}: Props) {
	return (
		<div className={"accountCss lg:max-w-[1200px] container mx-auto p-1"}>
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
						<MdCheckCircle className="mr-1 my-auto" />
						<Link href="/checkout" className="my-auto">
							Checkout
						</Link>
					</li>
					<li className="cursor-pointer hover:underline">
						<MdAttachMoney className="mr-1 my-auto" />
						<Link href="/checkout/payment" className="my-auto">
							Payment
						</Link>
					</li>
				</ul>
			</div>
			{/* steps */}
			<div className="flex justify-center items-center w-full  flex-col">
				<ul className="steps my-4">
					<li className="step step-info" data-content="✓">
						Login
					</li>
					<li className="step step-info" data-content="✓">
						Shipping Address
					</li>
					<li className="step step-info text-info" data-content="">
						Payment
					</li>
					<li className="step " data-content="">
						Confirmation
					</li>
				</ul>
				<div className="w-full md:w-[70%] bg-base-100 drop-shadow-sm px-2 py-4 rounded-md">
					<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
						Payment Option
					</h1>
					<div className="orderSummary w-80 bg-base-100 drop-shadow-md rounded-sm mx-auto lg:w-[30%] my-3">
						<OrderSummary/>
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">
								Payment Option
							</span>
						</label>
						<select className="select select-bordered select-sm">
							<option disabled selected>
								Pick one
							</option>
							<option>Cash On Delivery</option>
							<option disabled>Esewa</option>
							<option disabled>Khalti</option>
							<option disabled>Fonepay</option>
							<option disabled>Card</option>
						</select>
					</div>
					<div className="flex justify-end">
						<button className="btn btn-sm mt-3 btn-error">
							<Link href={"/checkout/shipping"}>Back</Link>
						</button>
						<button className="btn btn-sm mt-3 btn-info ml-2">
							<Link href={"/checkout/confirmation"}>Next</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
