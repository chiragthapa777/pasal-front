import Link from 'next/link'
import React from 'react'
import { MdHomeFilled, MdManageAccounts } from 'react-icons/md'
import { HiHeart } from "react-icons/hi";  
import AccountNav from '../../components/account/AccountNav';
import WishlistTable from '../../components/account/WishlistTable';

type Props = {}

export default function wishlist({}: Props) {
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
						<HiHeart className="mr-1 my-auto" />
						<Link href="/account/order" className="my-auto">
							wishlist
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
						my Wishlist
					</h1>
					<WishlistTable />
				</div>
			</section>
		</div>
  )
}