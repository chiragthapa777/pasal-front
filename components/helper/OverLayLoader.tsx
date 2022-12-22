import React from 'react';
import Loader from "./Loader";

function OverLayLoader({text}:any) {
    return (
        <div className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-800 opacity-50 flex flex-col items-center justify-center`}>
            <div>
                <Loader size={4} color={'white'}/>
                <p className={`text-xl text-white font-semibold`}>{text}</p>
            </div>

        </div>
    );
}

export default OverLayLoader;
