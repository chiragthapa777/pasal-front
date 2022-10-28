import React from "react";
import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";
function ProductCard(props: any) {
	const { product } = props;
	return (
		<div className="card rounded-md w-full bg-base-100 shadow-lg cursor-pointer border border-base-content/10 hover:scale-105 hover:duration-500 hover:shadow-xl">
			<figure className="">
				<img
					src={
						product.images[0].url
							? product.images[0].url
							: `https://placeimg.com/400/225/arch`
					}
					alt={product.name}
					className="rounded-sm w-full h-[250px] object-cover"
				/>
			</figure>
			<div className="card-body items-center text-center p-2 w-full">
				<Link href={`/product/${product.id}`} scroll={false} >
					<div className="text-lg sm:text-xl text-base-content/80 font-bold hover:text-base-content">
						{product.name}
					</div>
				</Link>
				<p className={`text-xl sm:text-2xl font-bold flex`}>
					<span className={`mr-2 font-semibold`}>Rs.</span>
					{product.price}
				</p>
				<div className="card-actions w-full">
					<button className="btn btn-primary btn-sm sm:btn-md btn-block">
						<MdShoppingCart className="mr-2 text-xl sm:text-2xl" />{" "}
						ADD TO CART
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
