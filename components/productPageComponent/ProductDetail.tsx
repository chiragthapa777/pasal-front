import React, { useState } from "react";
import ProductImageCorousel from "./ProductImageCorousel";
import {
	MdStore,
	MdShoppingCart,
	MdOutlineFavorite,
	MdAttachMoney,
	MdHomeFilled,
	MdShoppingBasket,
} from "react-icons/md";
import Quantity from "../helper/Quantity";
import ReactStars from "react-stars";
import commaNumber from "comma-number";
import Link from "next/link";
import useAuth from "../../hooks/useAuth";
import { addProductToCart } from "../../store/slice/authSlice";
import authFunc from "../../utils/authFunc";
import {useRouter} from "next/router";
import {getCookie} from "cookies-next";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";

function ProductDetail(props: any) {
	const [quantity, setquantity] = useState(1);
	const { product, setproduct, auth:{user,cart} } = props;
	const ratingChanged = (newRating: number) => {
	};
	const router = useRouter()
	const dispatch = useDispatch()

	const addFunc = () =>{
		setquantity(quantity + 1)
	}

	const subFunc = () =>{
		setquantity(quantity - 1)
	}

	const checkIfInCart = () => {
		if(cart?.cartDetails?.find((d:any)=>d.productId === product.id)){
			return true
		}else{
			return false
		}
	}

	const handleAddToCart = () => {
		// useAuth({ roles: [], setError: undefined, redirectPath: "/login" });
		if(authFunc(router,getCookie("Ptoken"),'/login',[],null)){
			if(checkIfInCart()){
				toast.success(`This item is already in cart.`,{
					theme:window.localStorage.getItem("lightMode") === "true"? "light": "dark",
					position: "bottom-left",
				})
			}else{
				// @ts-ignore
				dispatch(addProductToCart({ productId: product.id, quantity: 1, toast:undefined }));
			}

		}else{
			toast.error(`You have to login first.`,{
				theme:window.localStorage.getItem("lightMode") === "true"? "light": "dark",
				position: "bottom-left"
			}
			);
		}

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
						<div className="my-auto">Product</div>
					</li>
				</ul>
			</div>
			<div className={"flex flex-col sm:flex-row justify-start m-1"}>
				<div className={"w-full sm:w-[50%] p-0 sm:p-2 "}>
					{/*    image    */}
					<div className={" "}>
						<ProductImageCorousel imagesList={product.images} />
					</div>
				</div>
				<div className={"p-1 sm:p-2  w-full sm:w-[50%] sm:m-1"}>
					{/*     detail      */}
					<h1 className="text-primary font-bold text-2xl sm:text-3xl">
						{product.name}
					</h1>
					<div className="flex justify-between p-1 mb-3">
						<ReactStars
							count={5}
							value={product?.averageRating || 0}
							onChange={ratingChanged}
							half={true}
							edit={false}
							size={24}
						/>
						<div className="text-xs my-auto">
							{product._count?.reviews} reviews |{" "}
							{product._count?.questions} questions
						</div>
					</div>
					<div className="divider p-0 m-0 "></div>
					<div className="flex m-1 my-3">
						Vendor :
						<button className="btn btn-primary btn-xs ml-2 rounded-sm">
							<MdStore className="mr-2 text-lg" />{" "}
							{product?.vendor?.name}
						</button>
					</div>
					<div className="flex flex-wrap gap-2 m-1 my-3">
						<p className="my-auto">Tags : </p>
						{product?.productTags.length > 0
							? product.productTags.map((tag: any) => {
								if(tag?.tag){
									return(

										<button key={tag.id} className="btn btn-primary btn-sm btn-outline rounded-sm">
											{tag.tag?.name}
										</button>
								  )
								}else{
									return null
								}
								})
							: null}
					</div>

					<div className="divider p-0 m-0"></div>
					<p className="font-bold text-3xl m-1">
						{/* <span className="text-xl text-info">(10% off)</span>{" "} */}
						{/* <span className="line-through text-info text-2xl">
							<span>Rs.</span>
							{commaNumber(6000)}
						</span>{" "} */}
						<span>
							<span>Rs.</span>
							{commaNumber(product.price)}{" "}
						</span>
					</p>
					<div className="flex gap-2">
						<p className="my-auto">Quantity <span className="text-success">(stock : {product.quantity}) </span>:</p>

						<Quantity max={product.quantity} min={1} addFunc={addFunc} subFunc={subFunc} quantity = {quantity} />
					</div>
					<div className="my-2">
						<div className="flex mb-2">
							<button className={`btn btn-primary btn-outline flex-1 mr-2 ${checkIfInCart()?`btn-disable btn-success`:''}`} onClick={handleAddToCart}>
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
