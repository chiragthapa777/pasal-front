import React from 'react'

import {AiOutlineLoading3Quarters} from "react-icons/ai";

type Props = {}

export default function Loader({size, color}: any) {
    return (
        <div className="h-full w-full p-3 flex justify-center items-center">
            <AiOutlineLoading3Quarters className={`animate-spin text-${size ? `${size}xl`:'xl'} font-extrabold text-center text-${size ? `${color}`:'primary'} `}/>
        </div>
    )
}
