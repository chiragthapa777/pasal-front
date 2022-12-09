import React from "react";

export default function error({message}:any){
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className='bg-base-100 p-5 rounded-lg drop-shadow-sm'>
                {message && <p className=''>{message}</p>}
            </div>
        </div>
    )
}
