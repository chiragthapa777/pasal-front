import React from 'react';
import {MdShoppingCart} from "react-icons/md";

function Cart() {
    return (
        <div className="tooltip tooltip-bottom mr-5 " data-tip="Cart ">
            <div className="indicator">
                <span className="indicator-item badge badge-secondary rounded-full bg-info text-info-content mt-1 font-bold border-0">
                  {" "}
                    10
                </span>
                <div className="grid  place-items-center p-2 rounded-full  hover:bg-base-300">
                    <MdShoppingCart className="text-2xl md:text-3xl text-base-content"/>
                </div>
            </div>
        </div>
    );
}

export default Cart;