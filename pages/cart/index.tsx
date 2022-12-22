import React from "react";
import CartItem from "../../components/cart/cartItem";
import {IoBagCheckSharp} from "react-icons/io5";
import commaNumber from "comma-number";
import Link from "next/link";
import {MdHomeFilled, MdShoppingCart} from "react-icons/md";
import {useRouter} from "next/router";
import OrderSummary from "../../components/OrderSummary";
import {useSelector} from "react-redux";
import Loader from "../../components/helper/Loader";
import OverLayLoader from "../../components/helper/OverLayLoader";


export default function cart() {
    const {cart, loading, cartLoading} = useSelector((state: any) => state.auth)
    const router = useRouter();
    const handleCheckout = () => {
        router.push("/checkout/shipping")
    };
    if (loading) {
        return (
            <div className={`w-full min-h-full flex justify-center items-center`}>
                <Loader/>
            </div>
        )
    }
    return (
        <div className={"CartCss lg:max-w-[1200px] container mx-auto p-1"}>
            {/* upper navigation */}
            <div className="text-sm breadcrumbs text-info">
                <ul className="lg:max-w-[1200px] container">
                    <li className="cursor-pointer hover:underline">
                        <MdHomeFilled className="mr-1 my-auto"/>
                        <Link href="/" className="my-auto">
                            Home
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:underline">
                        <MdShoppingCart className="mr-1 my-auto"/>
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
                    <div>
                    {
                        cart?.cartDetails.length>0 ? cart.cartDetails.map((det:any, index:number)=><CartItem item={det} key={index}/>) : <p>Your cart is empty</p>
                    }
                    </div>
                </div>
                <div className="orderSummary w-80 bg-base-100 drop-shadow-md rounded-sm mx-auto lg:w-[30%]">
                    <OrderSummary/>
                </div>
            </section>
            <div className="cartButtons flex justify-center m-2">
                <button className="btn btn-primary btn-md btn-block sm:btn-wide sm:px-12" onClick={handleCheckout}>
                    {" "}
                    <IoBagCheckSharp className="mr-2 text-xl sm:text-2xl"/>{" "}
                    Checkout{" "}
                </button>
            </div>
            {cartLoading?<OverLayLoader text={'Please wait, updating cart'}/>:''}

        </div>
    );
}
