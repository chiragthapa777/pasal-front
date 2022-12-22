import React from 'react';
import commaNumber from "comma-number";

function OrderSummary() {
    return (
        <div className={`w-full`}>
            <h1 className="bg-info font-extrabold text-2xl text-info-content text-center rounded-t-sm py-3">
                Order Summary
            </h1>
            <div className="w-full px-2 py-1 flex justify-between">
                <p className="">Total (Selected 2 items)</p>
                <p className="font-bold"> Rs. {commaNumber(12000)}</p>
            </div>
            <div className="w-full px-2 py-1 flex justify-between">
                <p className="">Discount</p>
                <p className="font-bold"> Rs. {commaNumber(300)}</p>
            </div>
            <div className="w-full px-2 py-1 flex justify-between">
                <p className="">Vat</p>
                <p className="font-bold">Rs. {commaNumber(1000)}</p>
            </div>
            <div className="w-full px-2 py-1 flex justify-between border-b">
                <p className="">Delivery (Lalitpur)</p>
                <p className="font-bold"> Rs. {commaNumber(100)}</p>
            </div>
            <div className="w-full px-2 py-2 flex justify-between text-2xl font-extrabold bg-base-200/50">
                <p className="">Total Payable</p>
                <p className="font-bold"> Rs. {commaNumber(13000)}</p>
            </div>
        </div>
    );
}

export default OrderSummary;
