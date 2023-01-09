import React,{useState, useEffect} from 'react';
import commaNumber from "comma-number";
import {useSelector} from "react-redux";

function OrderSummary({}:any) {
    const {cart} = useSelector((state:any) => state.auth)
    const getSummary = () =>{
        const data = {
            total:0,
            discount:0,
            vat:0,
            grandTotal:0,
            totalItems:0,
            delivery:100
        }
        cart?.cartDetails.forEach((item:any,index:number)=>{
            data.totalItems += 1
            data.total += Number((item.product.price * item.quantity).toFixed(2))
            if(item.discounts?.length){
                const foundDiscount = item.discounts.find((item:any)=>item.isValid)
                if(foundDiscount){
                    const amt = Number(item.product.price * item.quantity)
                    data.discount += Number((foundDiscount.percent / 100 * amt).toFixed(2))
                }
            }

        })
        data.grandTotal = Number((data.total - data.discount + data.vat + data.delivery).toFixed(2))
        return data
    }
    const [detail, setDetail] = useState(getSummary());
    useEffect(() => {
        setDetail(getSummary())
    }, [cart]);

    return (
        <div className={`w-full`}>
            <h1 className="bg-primary font-extrabold text-2xl text-info-content text-center rounded-t-sm py-3">
                Order Summary
            </h1>
            <div className="w-full px-2 py-1 flex justify-between">
                <p className="">Total (Selected {detail.totalItems} items)</p>
                <p className="font-bold"> Rs. {commaNumber(detail.total)}</p>
            </div>
            <div className="w-full px-2 py-1 flex justify-between">
                <p className="">Discount</p>
                <p className="font-bold"> Rs. {commaNumber(detail.discount)}</p>
            </div>
            <div className="w-full px-2 py-1 flex justify-between">
                <p className="">Vat</p>
                <p className="font-bold">Rs. {commaNumber(detail.vat)}</p>
            </div>
            <div className="w-full px-2 py-1 flex justify-between border-b">
                <p className="">Delivery (Lalitpur)</p>
                <p className="font-bold"> Rs. {commaNumber(detail.delivery)}</p>
            </div>
            <div className="w-full px-2 py-2 flex justify-between text-2xl font-extrabold bg-base-200/50">
                <p className="">Total Payable</p>
                <p className="font-bold"> Rs. {commaNumber(detail.grandTotal)}</p>
            </div>
        </div>
    );
}

export default OrderSummary;
