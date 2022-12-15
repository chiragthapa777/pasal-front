import React, {useState, useEffect} from "react";
import AdminNav from "../../../components/admin/AdminNav";
import VendorTable from "../../../components/admin/vendor/VendorTable";
import AdminVendorContext from "../../../contexts/AdminVendorContext"
import Error from "../../../components/helper/Error";
import useAxios from "../../../hooks/useAxios";
import jwtDecode from "jwt-decode";
import {baseUrl} from "../../../api/apiUrl";

type Props = {};

export default function index({}: Props) {
	const [vendors, setVendors] = useState([])
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const fetchVendor = async () =>{
		try {
			const token:any = localStorage.getItem("Ptoken")
			const axios = useAxios(token)
			const user:any = jwtDecode(token)
			setLoading(true)
			const response = await axios.get(`${baseUrl}/vendor`)
			setLoading(false)
			setVendors(response?.data?.data || [])
		} catch (error:any) {
			setLoading(false)
			setError(error?.response?.data?.data || "Something went wrong")
		}
	}
	if(error!==""){
		return <Error message={error} />
	}
	useEffect(() => {
		fetchVendor()
	}, []);

	return (
		<AdminVendorContext.Provider value={{vendors, setVendors, setLoading, loading, error, setError}}>
			<AdminNav basePath={"vendors"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Vendor List
				</h1>
				<div className="optionbar p-2 flex">
					<button
						className="btn btn-sm btn-info mx-1"
					>
						Filter Vendor
					</button>
				</div>
				<VendorTable />
			</div>
		</AdminVendorContext.Provider>
	);
}
