import Link from "next/link";
import React from "react";
import {
	MdHomeFilled,
	MdManageAccounts,
	MdStoreMallDirectory,
	MdNavigateNext
} from "react-icons/md";
import AccountNav from "../../components/account/AccountNav";

type Props = {};

export default function seller({}: Props) {
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
						<MdStoreMallDirectory className="mr-1 my-auto" />
						<Link href="/account/order" className="my-auto">
							Apply for Vendor
						</Link>
					</li>
				</ul>
			</div>
			<section className="flex justify-center  items-start content-start">
				<div className="w-[30%] hidden md:block mr-2">
					<AccountNav />
				</div>
				<div className="w-full bg-base-100 drop-shadow-sm px-2 py-4 rounded-md">
					<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
						Apply for vendor (seller)
					</h1>
					<div className="w-full flex justify-center my-4">
						<ul className="steps text-center">
							<li className="step step-info text-info">
								Company Detail
							</li>
							<li className="step s">Apply for Vendor </li>
							<li className="step ">Wait for Acceptance</li>
						</ul>
					</div>
					<div className="CompanyDetail">
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text uppercase">
									Name
								</span>
							</label>
							<input
								type="text"
								placeholder="Name"
								className="input input-bordered input-sm input-wide w-full md:w-[70%]"
							/>
						</div>
            <div className="form-control w-full">
							<label className="label">
								<span className="label-text uppercase">
									Pan Number
								</span>
							</label>
							<input
								type="text"
								placeholder="Pan Number"
								className="input input-bordered input-sm input-wide w-full md:w-[70%]"
							/>
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text uppercase">
									Decription
								</span>
							</label>
							<textarea 
								placeholder="Decription"
								className="textarea  textarea-bordered  input-wide w-full md:w-[70%]"
							/>
						</div>
            <button className="btn btn-sm mt-3 btn-info">Next <MdNavigateNext className="text-lg" /></button>
					</div>
				</div>
			</section>
		</div>
	);
}
