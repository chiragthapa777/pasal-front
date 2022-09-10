import React from 'react';
import {MdShoppingCart} from "react-icons/md";

function Cart() {
    return (
        <div className="tooltip tooltip-bottom mr-5 " data-tip="Cart ">
            <div className="indicator">
                <span className="indicator-item badge badge-secondary rounded-full bg-accent mt-1 text-base-100 font-bold border-0">
                  {" "}
                    10
                </span>
                <div className="grid  place-items-center p-2 rounded-full  hover:bg-base-200">
                    <MdShoppingCart className="text-3xl text-primary"/>
                </div>
            </div>
        </div>
    );
}

export default Cart;