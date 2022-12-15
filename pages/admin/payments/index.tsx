import commaNumber from "comma-number";
import React,{useState, useEffect} from "react";
import AdminNav from "../../../components/admin/AdminNav";
import PaymentTable from "../../../components/admin/payment/PaymentTable";
import { CSVLink, CSVDownload } from "react-csv";
import { useRouter } from "next/router";
import useAxios from "../../../hooks/useAxios";
import jwtDecode from "jwt-decode";
import {baseUrl} from "../../../api/apiUrl";
import Error from "../../../components/helper/Error";
import {Payment} from "../../../utils/types/payment";

const csvData = [
  ["Payment Report"],
  ["SN", "Amount", "Mode", 'Remark', 'date']
];

type Props = {};

enum PaymentType {
	CASH = 'CASH',
	ESEWA = 'ESEWA',
	FONEPAY = 'FONEPAY',
}

export default function index({}: Props) {
	const [payments, setPayments] = useState<Payment[] | any[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const router = useRouter()
	const fetchPayments = async () =>{
		try {
			const axios = useAxios()
			setLoading(true)
			const response = await axios.get(`${baseUrl}/payment`)
			setLoading(false)
			setPayments(response?.data?.data || [])
		} catch (error:any) {
			setLoading(false)
			setError(error?.response?.data?.data || "Something went wrong")
		}
	}
	useEffect(() => {
		fetchPayments()
	}, []);

	const getTotal = (type?:PaymentType)=>{
		if(!type){
			// @ts-ignore
			return payments.reduce((curr:number, next:Payment)=>{
				return curr + next.amount
			},0)
		}else{
			// @ts-ignore
			return payments.reduce((curr:number, next:Payment)=>{
				return curr + (next.mode === type ? next.amount : 0)
			},0)
		}
		return 0
	}
	const getCSVData = () =>{
		const data:any[] = [...csvData]

		payments.map((p:Payment, index:number)=>{
			data.push([index, p.amount, p.mode, p.remark, new Date(p.createdAt) ])
		})
		return data
	}
	if(error!==""){
		return <Error message={error} />
	}
	return (
		<>
			<AdminNav basePath={"payments"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Payments
				</h1>
				<div className="optionbar p-2 flex flex-wrap gap-2">
					<button className="btn btn-sm btn-info mx-1" onClick={()=>{router.push("/admin/payments/add")}}>
						Add Payment
					</button>
					<button className="btn btn-sm btn-info mx-1">
						Filter Payments
					</button>
          		<CSVLink data={getCSVData()} filename={"payment_report.csv"} className="btn btn-sm btn-info mx-1">Download EXCEL</CSVLink>
				</div>
				<div className="optionbar p-2 flex flex-wrap gap-2">
					<button className="btn btn-sm btn-outline gap-2 mx-1">
						Total :<div className="badge">{commaNumber(getTotal())}</div>
					</button>
					<button className="btn btn-sm btn-outline gap-2 mx-1">
						CASH :<div className="badge">{commaNumber(getTotal(PaymentType.CASH))}</div>
					</button>
					<button className="btn btn-sm btn-outline gap-2 mx-1">
						ESEWA :<div className="badge">{commaNumber(getTotal(PaymentType.ESEWA))}</div>
					</button>
					<button className="btn btn-sm gap-2 btn-outline mx-1">
						FONEPAY :<div className="badge">{commaNumber(getTotal(PaymentType.FONEPAY))}</div>
					</button>
				</div>
				<PaymentTable loading={loading} payments={payments} />
			</div>
		</>
	);
}
