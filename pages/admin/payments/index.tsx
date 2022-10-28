import commaNumber from "comma-number";
import React from "react";
import AdminNav from "../../../components/admin/AdminNav";
import PaymentTable from "../../../components/admin/payment/PaymentTable";
import { CSVLink, CSVDownload } from "react-csv";
import { useRouter } from "next/router";

const csvData = [
  ["Payment Report"],
  ["SN", "Amount", "Mode", 'Remark'],
  ["1", "1200", "CASH", "Bill paid for order id : 14 through CASH"],
  ["2", "2000", "ESEWA", "Bill paid for order id : 14 through CASH"],
  ["3", "4300 ", "FONEPAY", "Bill paid for order id : 14 through CASH"]
];

type Props = {};

export default function index({}: Props) {
  const router = useRouter()
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
          <CSVLink data={csvData} filename={"payment_report.csv"} className="btn btn-sm btn-info mx-1">Download EXCEL</CSVLink>
				</div>
				<div className="optionbar p-2 flex flex-wrap gap-2">
					<button className="btn btn-sm btn-outline gap-2 mx-1">
						Total :<div className="badge">{commaNumber(1200)}</div>
					</button>
					<button className="btn btn-sm btn-outline gap-2 mx-1">
						CASH :<div className="badge">{commaNumber(1200)}</div>
					</button>
					<button className="btn btn-sm btn-outline gap-2 mx-1">
						ESEWA :<div className="badge">{commaNumber(1200)}</div>
					</button>
					<button className="btn btn-sm gap-2 btn-outline mx-1">
						CHANGE :<div className="badge">{commaNumber(1200)}</div>
					</button>
					<button className="btn btn-sm gap-2 btn-outline mx-1">
						CHANGE :<div className="badge">{commaNumber(1200)}</div>
					</button>
				</div>
				<PaymentTable />
			</div>
		</>
	);
}
