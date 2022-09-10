import React from "react";
import Itemlist from "./Itemlist";
import Dropdown from "./Dropdown";
import BottomNavigation from "./BottomNavigation";
import {
    MdOutlineMenu,
    MdSearch,
    MdShoppingCart,
    MdOutlineFavorite,
    MdAccountCircle,
    MdLogout,
    MdLogin
} from "react-icons/md";
import Footer from "../footer/Footer";

export default function Navbar({children}: any) {
    return (
        <div className="drawer text-sm md:text-md">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content flex flex-col overflow-x-hidden">
                <div className="w-full navbar flex justify-between  bg-indigo-600 ">
                    {/* logo and hamburger */}
                    <div>
                        <div className=" lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <MdOutlineMenu className="text-3xl sm:text-4xl text-white"/>
                            </label>
                        </div>
                        <div className="flex-1 md:px-2 md:mx-2 text-4xl font-normal md:font-bold text-white"> पसल</div>
                    </div>
                    {/* serach bar */}
                    <div className="form-control text-xs">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Search…"
                                className="input input-bordered "
                            />
                            <button className="btn btn-square">
                                <MdSearch className="text-3xl text-white"/>
                            </button>
                        </div>
                    </div>
                    {/*right part*/}
                    <div className=" mt-1 hidden md:block">
                        {/* cart */}
                        <div className="tooltip tooltip-bottom mr-5 " data-tip="Cart ">
                            <div className="indicator">
                <span className="indicator-item badge badge-secondary rounded-full bg-white mt-1">
                  {" "}
                    10
                </span>
                                <div className="grid  place-items-center p-2 rounded-full  hover:bg-indigo-500">
                                    <MdShoppingCart className="text-2xl text-white"/>
                                </div>
                            </div>
                        </div>
                        {/* wishlist */}
                        <div className="tooltip tooltip-bottom mr-4" data-tip="WishList  ">
                            <div className="indicator">
                <span className="indicator-item badge badge-secondary rounded-full bg-white mt-1">
                  {" "}
                    10
                </span>
                                <div className="grid place-items-center p-2 rounded-full  hover:bg-indigo-500">
                                    <MdOutlineFavorite className="text-2xl text-white"/>
                                </div>
                            </div>
                        </div>
                        {/* profile */}
                        <div className="tooltip tooltip-bottom mr-1" data-tip="Account">
                            <div className="indicator">
                                <div className="grid place-items-center p-2 rounded-full  hover:bg-indigo-500">
                                    <MdAccountCircle className="text-2xl text-white"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal bg-zinc-700 text-white w-full">
                        {/* <!-- Navbar menu content here --> */}
                        <Itemlist/>
                    </ul>
                </div>
                <>
                    {/* ============================================ all main contain ==================================*/}
                    {children}
                    <Footer/>
                    <div className='block md:hidden'>
                        <BottomNavigation/>
                    </div>
                </>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <Itemlist/>
                </ul>
            </div>
        </div>
    );
}
