import commaNumber from 'comma-number';
import React, {useState, useEffect} from 'react'
import {HiHeart, HiTrash} from "react-icons/hi";
import Quantity from '../helper/Quantity';
import {noImageLink} from "../../utils/contants/links";
import {useDispatch, useSelector} from "react-redux";
import {editCartProduct, removeCartProduct} from "../../store/slice/authSlice";

export default function CartItem({item}: any) {
    const { cartLoading, cart} = useSelector((state: any) => state.auth)
    const [quantity, setQuantity] = useState(item?.quantity||0);
    const getSubTotal = () => {
        return quantity*item?.product?.price
    }
    const [subtotal, setSubtotal] = useState(getSubTotal());
    const dispatch = useDispatch()
    const handleRemove = () => {
        if (!cartLoading) {
        // @ts-ignore
            dispatch(removeCartProduct({productId: item.productId}))
        }
    }
    useEffect(() => {
        setSubtotal(getSubTotal())
    }, [cart]);


    const increaseQty = () =>{
        // @ts-ignore
        dispatch(editCartProduct({productId:item.productId,quantity:item.quantity+1}))
    }
    const decreaseQty = () =>{
        // @ts-ignore
        dispatch(editCartProduct({productId:item.productId,quantity:item.quantity-1}))
    }
    return (
        <div className=' my-2 border-b'>
            <section className='upperSection flex'>
                <img src={item?.product?.images[0]?.url || noImageLink} alt=""
                     className='my-1 h-28 w-28 object-cover '/>
                <div className='ml-2'>
                    <div className="w-full px-2 py-1 flex ">
                        <p className=" text-2xl font-extrabold"> {item.product.name}</p>
                    </div>
                    <div className="w-full px-2 py-1 flex">
                        <p className="my-auto">Quantity : </p>
                        <p className="font-bold ml-2"><Quantity max={item.product.quantity} min={1} quantity={item?.quantity}  addFunc={increaseQty} subFunc={decreaseQty}/></p>
                    </div>
                    <div className="w-full px-2 py-1 flex ">
                        <p className="">Price : </p>
                        <p className="font-bold ml-2"> {` Rs`}. {commaNumber(item.product.price)}</p>
                    </div>
                </div>
            </section>
            <section className='LowerSection flex justify-between h-auto'>
                <div
                    className="btnGroup cursor-pointer border-t border-l border-r flex text-xl sm:text-2xl text-gray-400 ">
                    <div className={`border-r p-2 hover:bg-error hover:text-error-content `} onClick={handleRemove}>
                        <HiTrash/></div>
                    <div className={`p-2 hover:bg-success hover:text-success-content `}><HiHeart/></div>
                </div>
                <div
                    className="btnGroup cursor-pointer border-t border-l border-r flex text-sm sm:text-md text-gray-400 items-center hover:bg-success hover:text-success-content">
                    <div className='p-1 '>Sub-Total :</div>
                    <div className='p-1 '>{commaNumber(subtotal)}</div>
                </div>
            </section>
        </div>
    )
}
