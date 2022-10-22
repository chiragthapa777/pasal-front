import Link from 'next/link'
import React from 'react'
import { MdHomeFilled, MdManageAccounts } from 'react-icons/md'
import AccountNav from '../../components/account/AccountNav'

type Props = {}

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
				</ul>
			</div>
            <section className='flex justify-center  items-start content-start'>
                <div className='w-[30%] hidden md:block'>
                    <AccountNav />
                </div>
                <div className='w-full md:w-[65%]'>
                    details
                </div>
                
            </section>
    </div>
  )
}