import Link from 'next/link'
import React from 'react'
import { MdArrowDropDown, MdHomeFilled } from 'react-icons/md'

type Props = {}

export default function AdminNav({basePath}: any) {
  return (
    <div className="w-full border-b bg-base-100">
			<div className="flex justify-between py-2 container lg:max-w-[1300px] mx-auto">
				<h1 className="my-auto text-primary text-3xl font-extrabold tracking-tighter">
					Admin Control
				</h1>
				<div className="dropdown dropdown-end my-auto">
					<label
						tabIndex={0}
						className="btn btn-sm btn-primary p-0 pr-5 pl-8"
					>
						Menu{" "}
						<MdArrowDropDown className=" text-2xl my-auto mr-0" />
					</label>
					<ul
						tabIndex={0}
						className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border"
					>
						<li className="border-b">
							<Link href={"/admin/orders"}>Orders</Link>
						</li>
						<li className="border-b">
							<Link href={"/admin/vendors"}>
								Vendors
							</Link>
						</li>
						<li className="">
							<Link href={"/vendor/payments"}>Payments</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="container lg:max-w-[1300px] mx-auto">
				<div className="text-sm breadcrumbs text-info ">
					<ul className="lg:max-w-[1200px] container ">
						<li className="cursor-pointer hover:underline">
							<MdHomeFilled className="mr-1 my-auto" />
							<Link href="/" className="my-auto">
								Home
							</Link>
						</li>
						<li className="cursor-pointer hover:underline">
							<Link href="/admin" className="my-auto">
								Admin
							</Link>
						</li>
						{basePath != "/" && (
							<li className="cursor-pointer hover:underline">
								<Link
									href={`/admin/${basePath}`}
									className="my-auto"
								>
									{basePath}
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
  )
}