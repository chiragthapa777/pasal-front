import React, { useState, useEffect } from "react";
import { baseUrl } from "../../api/apiUrl";
import QsnLists from "../../components/vendor/qsn/QsnLists";
import VendorNav from "../../components/vendor/VendorNav";
import jwt_decode from "jwt-decode";
import useAxios from "../../hooks/useAxios";

type Props = {};

export default function questions({}: Props) {
	const [qsn, setqsn] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, seterror] = useState("");

	console.log("Question page re-render")

	const fetchOrderItems = async () => {
		try {
			setLoading(true);
			const token: any = localStorage.getItem("Ptoken");
			const axios = useAxios(token);
			const user: any = jwt_decode(token);
			if (!user?.vendorId) {
				return seterror("Cannot find the vendor");
			}
			const response = await axios.get(
				`${baseUrl}/question/?vendorId=${user.vendorId}`
			);
			setqsn(response?.data?.data || []);
			setLoading(false);
		} catch (error: any) {
			setLoading(false);
			seterror(error?.response?.data?.data || "Something went wrong");
		}
	};

  useEffect(() => {
    fetchOrderItems()
  }, [])
  
  

	return (
		<>
			<VendorNav basePath={"questions"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Product
				</h1>
				<div className="optionbar p-2 flex">
					<button className="btn btn-sm btn-info mx-1">Filter</button>
				</div>
				<QsnLists qsn={qsn} setqsn={setqsn} loading={loading} seterror={error} />
			</div>
		</>
	);
}
