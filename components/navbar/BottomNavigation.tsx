import React from 'react';
import Cart from "./additional/Cart";
import Favorite from "./additional/Favorite";
import Account from "./additional/Account";

function BottomNavigation() {
    return (
        <div className="btm-nav btm-nav-xs border-t-2">
            <button>
                <Cart/>
            </button>
            <button className="">
                <Account/>
            </button>
            <button className='active bg-base-300'>
                <Favorite/>
            </button>
        </div>
    );
}

export default BottomNavigation;