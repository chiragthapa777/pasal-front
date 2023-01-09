import commaNumber from 'comma-number'
import Link from 'next/link'
import React,{useState} from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import {MdCheckCircle, MdHomeFilled, MdOfflinePin} from 'react-icons/md'
import {useRouter} from 'next/router'
import OrderSummary from "../../components/OrderSummary";
import useAxios from "../../hooks/useAxios";
import {baseUrl} from "../../api/apiUrl";
import {toast} from "react-toastify";
import {getCookie} from "cookies-next";
import jwt_decode from "jwt-decode";
import {useSelector} from "react-redux";

type Props = {}

export default function confirmation({}: Props) {
    const router = useRouter()
    const {user} = useSelector((s:any)=>s.auth)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const handleConfirm = async() => {
        try{
            setLoading(true)
            const axios = useAxios()
            const token: any = getCookie("Ptoken");
            const data = await axios.post(`${baseUrl}/order/byCart`,{
                userId:user.id,
                clearCart:true
            })
            toast.success(
                `Order added successfully.`,
                {
                    theme:window.localStorage.getItem("lightMode") === "true"? "light": "dark",
                    position: "bottom-left"
                }
            );
            setLoading(false)
            router.push("/account/order")
        }catch (e:any){
            setLoading(false)
            toast.error(
                `${e?.response?.data?.data || 'Could not add order.'}`,
                {
                    theme:window.localStorage.getItem("lightMode") === "true"? "light": "dark",
                    position: "bottom-left"
                }
            );
            setError(e?.response?.data?.data)
        }



    }
    return (
        <div className={"accountCss lg:max-w-[1200px] container mx-auto p-1"}>
            {/* upper navigation */}
            <div className="text-sm breadcrumbs text-info">
                <ul className="lg:max-w-[1200px] container">
                    <li className="cursor-pointer hover:underline">
                        <MdHomeFilled className="mr-1 my-auto"/>
                        <Link href="/" className="my-auto">
                            Home
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:underline">
                        <MdCheckCircle className="mr-1 my-auto"/>
                        <Link href="/checkout" className="my-auto">
                            Checkout
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:underline">
                        <MdOfflinePin className="mr-1 my-auto"/>
                        <Link href="/checkout/shipping" className="my-auto">
                            Confirmation
                        </Link>
                    </li>
                </ul>
            </div>
            {/* steps */}
            <div className="flex justify-center items-center w-full  flex-col">
                <ul className="steps my-4">
                    <li className="step step-info" data-content="✓">
                        Login
                    </li>
                    <li className="step step-info" data-content="✓">
                        Shipping Address
                    </li>
                    <li className="step step-info" data-content="✓">
                        Payment
                    </li>
                    <li className="step step-info text-info" data-content="">
                        Confirmation
                    </li>
                </ul>

                <div className="w-full md:w-[70%] bg-base-100 drop-shadow-sm px-2 py-4 rounded-md">
                    <h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
                        Confirmation
                    </h1>
                    <div className='border-b'>
                        <h1 className='underline text-lg font-bold'>Shipping Address</h1>
                        <p>Country : Nepal</p>
                        <p>Province : Bagmati</p>
                        <p>District : Lalitpur</p>
                        <p>Ward : 14</p>
                        <p>Street : Ranibu</p>
                    </div>
                    <div className='border-b'>
                        <h1 className='underline text-lg font-bold'>Payment</h1>
                        <p>Cash On Delivery</p>
                    </div>
                    <div className={`mt-3`}>

                        <OrderSummary/>
                    </div>

                    <div className="flex justify-end">
                        <button className="btn btn-sm mt-3 btn-error"  disabled={loading}>
                            <Link href={"/checkout/payment"}>
                                Back
                            </Link>

                        </button>
                        <button className={`btn btn-sm mt-3 btn-info ml-2 ${loading ? 'loading':''}`} onClick={handleConfirm} disabled={loading}>
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
