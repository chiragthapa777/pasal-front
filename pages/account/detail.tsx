import Link from "next/link";
import React from "react";
import { MdHomeFilled, MdManageAccounts, MdTextSnippet } from "react-icons/md";
import AccountNav from "../../components/account/AccountNav";

type Props = {};

export default function detail({}: Props) {
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
						<MdTextSnippet className="mr-1 my-auto" />
						<Link href="/account/detail" className="my-auto">
							Information
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
						information
					</h1>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">Name</span>
						</label>
						<input
							value={"Chirag Thapa"}
							type="text"
							placeholder="Name"
							className="input input-bordered input-sm input-wide w-full md:w-[70%]"
						/>
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">Email</span>
						</label>
						<input
							value={"chirag777@gmail.com"}
							type="email"
							placeholder="Email"
							className="input input-bordered input-sm input-wide w-full md:w-[70%]"
						/>
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">Number</span>
						</label>
						<input
							value={9810338573}
							type="number"
							placeholder="Number"
							className="input input-bordered input-sm input-wide w-full md:w-[70%]"
						/>
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">Role</span>
						</label>
						<input
							value={"USER"}
							type="text"
							placeholder="Role"
							className="input input-bordered input-sm input-wide w-full md:w-[70%]"
						/>
					</div>
					<button className="btn btn-sm mt-3 btn-info">Save</button>
				</div>
			</section>
		</div>
	);
}
