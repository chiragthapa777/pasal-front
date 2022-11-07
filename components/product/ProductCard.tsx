import React from "react";
import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";
import { useRouter } from "next/router";
function ProductCard(props: any) {
	const { product } = props;
	const router = useRouter()
	const handleLink = () =>{
		router.push(`/product/${product.id}`)
	}
	return (
		<div className="card rounded-md w-full bg-base-100 shadow-lg cursor-pointer border border-base-content/10 hover:scale-105
		 hover:duration-500 hover:shadow-xl" >
			<figure className="" onClick={handleLink}>
				<img
					src={
						product?.images[0]?.url
							? product.images[0].url
							: `https://placeimg.com/400/225/arch`
					}
					alt={product.name}
					className="rounded-sm w-full h-[250px] object-cover "
				/>
			</figure >
			<div className="card-body items-center text-center p-2 w-full">
					<div className="text-lg sm:text-xl text-base-content/80 font-bold hover:text-base-content" onClick={handleLink}>
						{product.name}
					</div >
				<p className={`text-xl sm:text-2xl font-bold flex`} onClick={handleLink}>
					<span className={`mr-2 font-semibold`}>Rs.</span>
					{product.price}
				</p >
				<div className="card-actions w-full">
					<button className="btn btn-primary btn-sm sm:btn-md btn-block btn-outline">
						<MdShoppingCart className="mr-2 text-xl sm:text-2xl" />{" "}
						ADD TO CART
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
