import Link from 'next/link'
import React from 'react'
import { MdHomeFilled,  MdManageAccounts } from 'react-icons/md'
import { HiLocationMarker } from "react-icons/hi";
import AccountNav from '../../components/account/AccountNav'

type Props = {}

export default function shipping({}: Props) {
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
						<HiLocationMarker className="mr-1 my-auto" />
						<Link href="/account/shipping" className="my-auto">
							Shipping
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
						shipping address
					</h1>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">Country</span>
						</label>
						<input
							value={"Nepal"}
							type="text"
							placeholder="country"
							className="input input-bordered input-sm input-wide w-full md:w-[70%]"
						/>
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">Province</span>
						</label>
						<input
							value={"Bagmati"}
							type="text"
							placeholder="Province"
							className="input input-bordered input-sm input-wide w-full md:w-[70%]"
						/>
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">District</span>
						</label>
						<input
							value={"Lalitpur"}
							type="text"
							placeholder="District"
							className="input input-bordered input-sm input-wide w-full md:w-[70%]"
						/>
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">Ward Number</span>
						</label>
						<input
							value={"14"}
							type="text"
							placeholder="Ward Number"
							className="input input-bordered input-sm input-wide w-full md:w-[70%]"
						/>
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">Street</span>
						</label>
						<input
							value={"Ranibu"}
							type="text"
							placeholder="Street"
							className="input input-bordered input-sm input-wide w-full md:w-[70%]"
						/>
					</div>
					<button className="btn btn-sm mt-3 btn-info">Save</button>
				</div>
			</section>
		</div>
  )
}