import Link from 'next/link';
import React from 'react';
import {MdAccountCircle} from "react-icons/md";

const Account =React.forwardRef(()=> {
    return (
        <div className="tooltip tooltip-bottom mr-1 " data-tip="Account">
            <div className="indicator">
                <div className="grid place-items-center p-2 rounded-full hover:bg-base-300">
                    <Link href={"/account"}>
                        <a >
                            <MdAccountCircle className="text-2xl md:text-3xl text-base-content"/>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
})

export default Account;
