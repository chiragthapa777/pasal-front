import Link from 'next/link'
import React from 'react'
import { MdHomeFilled, MdManageAccounts } from 'react-icons/md'
import AccountNav from '../../components/account/AccountNav'

export default function index() {
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
				</ul>
			</div>
      <div className='w-full sm:w-96 mx-auto'>
        <AccountNav />
      </div>
    </div>
  )
}
