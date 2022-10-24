import Link from 'next/link';
import React from 'react';
import {MdOutlineFavorite, MdShoppingCart} from "react-icons/md";

function Favorite() {
    return (
        <div className="tooltip tooltip-bottom mr-5 " data-tip="Wish list ">
            <div className="indicator">
                <span className="indicator-item badge badge-secondary rounded-full bg-info text-info-content mt-1 font-bold border-0">
                  {" "}
                    10
                </span>
                <div className="grid  place-items-center p-2 rounded-full  hover:bg-base-200">
                    <Link href={"/account/wishlist"}>
                    <MdOutlineFavorite className="text-2xl md:text-3xl text-base-content"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Favorite;