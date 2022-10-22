import React, { useState } from "react";
import ProductImageCorousel from "./ProductImageCorousel";
import {
	MdStore,
	MdShoppingCart,
	MdOutlineFavorite,
	MdAttachMoney,
	MdHomeFilled,
	MdShoppingBasket
} from "react-icons/md";
import Quantity from "../helper/Quantity";
import { product } from "../../data";
import ReactStars from "react-stars";
import commaNumber from "comma-number";
import Link from "next/link";

function ProductDetail(props: any) {
	  const [quantity, setquantity] = useState(1);
	  const { product: any } = props;
	const ratingChanged = (newRating: number) => {
		console.log(newRating);
	};
	return (
		<div className={"container mx-auto lg:w-5/6"}>
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
						<MdShoppingBasket className="mr-1 my-auto" />
						<div className="my-auto">
							Product
						</div>
					</li>
				</ul>
			</div>
			<div className={"flex flex-col sm:flex-row justify-start "}>
				<div className={"w-full sm:w-[50%] p-0 sm:p-2 "}>
					{/*    image    */}
					<div className={" "}>
						<ProductImageCorousel imagesList={product.images} />
					</div>
				</div>
				<div className={"p-1 sm:p-2  w-full sm:w-[50%] sm:m-1"}>
					{/*     detail      */}
					<h1 className="text-primary font-bold text-2xl sm:text-3xl">
						Men winter pant fur inside
					</h1>
					<div className="flex justify-between p-1 mb-3">
						<ReactStars
							count={5}
							value={1}
							onChange={ratingChanged}
							half={true}
							edit={false}
							size={24}
						/>
						<div className="text-xs my-auto">
							13 reviews | 3 questions
						</div>
					</div>
					<div className="divider p-0 m-0 "></div>
					<div className="flex justify-between m-1 my-3">
						<button className="btn btn-primary btn-xs">
							<MdStore className="mr-2 text-lg" /> Zara
						</button>
					</div>

					<div className="divider p-0 m-0"></div>
					<p className="font-bold text-3xl m-1">
						<span className="text-xl text-info">(10% off)</span>
						{" "}
						<span className="line-through text-info text-2xl"><span>Rs.</span>{commaNumber(6000)}</span>
						{" "}
						<span><span>Rs.</span>{commaNumber(5000)} </span>
						
					</p>
					<Quantity max={10} min={1} />
					<div className="m-3">
						<div className="flex mb-2">
							<button className="btn btn-primary btn-outline flex-1 mr-2">
								<MdShoppingCart className="mr-2 text-2xl" />
								<p className="text-lg">Add to cart</p> 
							</button>
							<button className="btn btn-primary btn-outline flex-none text-2xl">
								<MdOutlineFavorite />
							</button>
						</div>
						<button className="btn btn-primary btn-outline btn-block">
							<MdAttachMoney className="mr-2 text-2xl" /> 
							<p className="text-lg">Buy now</p> 

						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetail;
