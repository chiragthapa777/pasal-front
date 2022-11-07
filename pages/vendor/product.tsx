import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../api/apiUrl";
import ProductFilter from "../../components/vendor/product/ProductFilter";
import ProductList from "../../components/vendor/product/ProductList";
import VendorNav from "../../components/vendor/VendorNav";
import useAxios from "../../hooks/useAxios";
import jwt_decode from "jwt-decode";
import Error from "../../components/helper/Error";
import { Product } from "../../utils/types/product";

type Props = {};

export default function product({}: Props) {
    const router = useRouter()
	const [loading, setloading] = useState(false)
	const [error, seterror] = useState("")
	const [products, setproducts] = useState<Product[]>([])
	
	const fetchProduct = async() => {
		try {
			const token:any = localStorage.getItem("Ptoken")
			const axios = useAxios(token)
			const user:any = jwt_decode(token)
			setloading(true)
			if(!user?.vendorId){
				return seterror("You are not a vendor. If you are a vendor try login again")
			}
			const response = await axios.get(`${baseUrl}/product/?vendorId=${user.vendorId}`)
			setloading(false)
			console.log(response)
			setproducts(response?.data?.data || [])
		} catch (error:any) {
			setloading(false)
			seterror(error?.response?.data?.data || "Something went wrong")
		}
	}

	useEffect(() => {
		fetchProduct()
	}, [])
	

    const handleAddProduct =()=>{
        router.push("addproduct")
    }
	if(error!=""){
		return (
			<Error message={error} />
		)
	}
	return (
		<>
			<VendorNav basePath={"product"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Product
				</h1>
                <div className="optionbar p-2 flex">
                    <button className="btn btn-sm btn-info mx-1" onClick={handleAddProduct}>Add new product</button>
                    <ProductFilter />
                </div>
                <ProductList products={products} loading={loading} />
			</div>
		</>
	);
}
