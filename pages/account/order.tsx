import Link from 'next/link'
import React from 'react'
import { MdHomeFilled, MdManageAccounts, MdShoppingBasket } from 'react-icons/md'
import AccountNav from '../../components/account/AccountNav'
import OrderTable from '../../components/account/OrderTable'
import {useState, useEffect} from "react";
import useAuth from "../../hooks/useAuth";

import {toast} from "react-toastify";
import useAxios from "../../hooks/useAxios";
import {baseUrl} from "../../api/apiUrl";
import Loader from "../../components/helper/Loader";
import Error from "../../components/helper/Error";
import {useSelector} from "react-redux";
import OverLayLoader from "../../components/helper/OverLayLoader";
type Props ={}

export default function order({}: Props) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const {user,loading:userLoading} = useSelector((s:any)=>s.auth)
  useAuth({roles:[],setError,redirectPath:'/login'})
  const fetchOrders=async()=>{
    try{
      setLoading(true)
      const axios = useAxios()
      const data:any =await axios.get(`${baseUrl}/order/?userId=${user.id}`)
		console.log(data)
      setOrders(data?.data?.data||[])
      setLoading(false)
    }catch (e:any){
		console.log(e)
      setLoading(false)
      toast.error(
          `${e?.response?.data?.data || 'Could not get orders.'}`,
          {
            theme:window.localStorage.getItem("lightMode") === "true"? "light": "dark",
            position: "bottom-left"
          }
      );
      setError(e?.response?.data?.data)
    }
  }
  useEffect(() => {
	  console.log(user)
	  if(user?.id){
		  fetchOrders()
	  }

  }, [user]);
  if(error!==''){
    return (<div className={`h-full w-full flex justify-center items-center`}>
      <Error message={error}/>
    </div>)
  }
  return (
    <div className={"accountCss lg:max-w-[1200px] container mx-auto p-1"}>
			{/* upper navigation */}
			<div className="text-sm breadcrumbs text-info">
				<ul className="lg:max-w-[1200px] container">
					<li className="cursor-pointer hover:underline">
						<MdHomeFilled className="mr-1 my-auto" />
						<Link href="/" className="my-auto">
							Home
						</Link>
					</li>
					<li className="cursor-pointer hover:underline">
						<MdManageAccounts className="mr-1 my-auto" />
						<Link href="/account" className="my-auto">
							Account
						</Link>
					</li>
					<li className="cursor-pointer hover:underline">
						<MdShoppingBasket className="mr-1 my-auto" />
						<Link href="/account/order" className="my-auto">
							My Orders
						</Link>
					</li>
				</ul>
			</div>
			<div className="flex justify-center  items-start content-start">
				<div className="w-[30%] hidden md:block mr-2">
					<AccountNav />
				</div>
				<div className="w-full bg-base-100 drop-shadow-sm px-2 py-4 rounded-md">
					<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
						My orders
					</h1>
					<OrderTable orders={orders} loading={loading} />
				</div>
			</div>
		</div>
  )
}
