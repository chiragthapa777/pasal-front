import commaNumber from "comma-number";
import React from "react";
import {
	MdAccountBalance,
	MdCircleNotifications,
	MdCategory,
	MdQuestionAnswer,
} from "react-icons/md";
import Bargraph from "./Bargraph";
import Piechart from "./Piechart";

type Props = {};

export default function Dashboard({}: Props) {
	return (
		<div>
			<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
				DashBoard
			</h1>
			<div className="w-full flex justify-center">
				<div className="stats shadow m-4 cursor-pointer  border">
					<div className="stat">
						<div className="stat-figure text-info">
							<MdAccountBalance className="text-3xl" />
						</div>
						<div className="stat-title">Sales</div>
						<div className="stat-value">
							Rs. {commaNumber(200000)}
						</div>
						<div className="stat-desc">Jan 1st - Feb 1st</div>
					</div>
					<div className="stat">
						<div className="stat-figure text-info">
							<MdCircleNotifications className="text-3xl" />
						</div>
						<div className="stat-title">Pending Orders</div>
						<div className="stat-value">10</div>
						<div className="stat-desc">Jan 1st - Feb 1st</div>
					</div>

					<div className="stat">
						<div className="stat-figure text-info">
							<MdCategory className="text-3xl" />
						</div>
						<div className="stat-title">Products</div>
						<div className="stat-value">23</div>
						<div className="stat-desc">5 out of stock</div>
					</div>
					<div className="stat">
						<div className="stat-figure text-info">
							<MdQuestionAnswer className="text-3xl" />
						</div>
						<div className="stat-title">Questions</div>
						<div className="stat-value">8</div>
						<div className="stat-desc">Unanswered</div>
					</div>
				</div>
			</div>
			<div className="charts w-full flex ">
				<div className="w-[48%] border p-2 m-1 bg-white">
					<h1 className="text-xl font-bold text-center mb-2 p-3 bg-info text-white">Sales according to product (1st Jan to 30th Jan)</h1>
					<Bargraph />
				</div>
				<div className="w-[48%] border p-2 m-1 bg-white">
					<h1 className="text-xl font-bold text-center mb-2 p-3 bg-info text-white">Sales according to product (1st Jan to 30th Jan)</h1>
					<Piechart />
				</div>
			</div>
		</div>
	);
}
