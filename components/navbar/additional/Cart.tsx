import Link from 'next/link';
import React from 'react';
import {MdShoppingCart} from "react-icons/md";
import {useSelector} from "react-redux";

const Cart = React.forwardRef(() => {
    const {cart, loading} = useSelector((state:any) => state.auth)
    return (
        <div className="tooltip tooltip-bottom mr-5 " data-tip="Cart ">
            <div className="indicator">
                <span
                    className="indicator-item badge badge-secondary rounded-full bg-info text-info-content mt-1 font-bold border-0">
                  {" "}
                    {cart?.cartDetails?.length || 0}
                </span>
                <div className="grid  place-items-center p-2 rounded-full  hover:bg-base-300">
                    <Link href={"/cart"}>
                        <a href="">
                            <MdShoppingCart className="text-2xl md:text-3xl text-base-content"/>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
})

export default Cart;
