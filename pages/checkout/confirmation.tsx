import commaNumber from 'comma-number'
import Link from 'next/link'
import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { MdCheckCircle, MdHomeFilled, MdOfflinePin } from 'react-icons/md'
import { useRouter } from 'next/router'

type Props = {}

export default function confirmation({}: Props) {
  const router = useRouter()
  const handleConfirm =()=>{
    router.push("/account/order")
  }
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
						<MdCheckCircle className="mr-1 my-auto" />
						<Link href="/checkout" className="my-auto">
							Checkout
						</Link>
					</li>
					<li className="cursor-pointer hover:underline">
						<MdOfflinePin className="mr-1 my-auto" />
						<Link href="/checkout/shipping" className="my-auto">
							Confirmation
						</Link>
					</li>
				</ul>
			</div>
			{/* steps */}
			<div className="flex justify-center items-center w-full  flex-col">
				<ul className="steps my-4">
					<li className="step step-info" data-content="✓">
						Login
					</li>
					<li className="step step-info" data-content="✓">
						Shipping Address
					</li>
					<li className="step step-info" data-content="✓">
						Payment
					</li>
					<li className="step step-info text-info" data-content="">
						Confirmation
					</li>
				</ul>

				<div className="w-full md:w-[70%] bg-base-100 drop-shadow-sm px-2 py-4 rounded-md">
					<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
          Confirmation
					</h1>
					<div className='border-b'>
            <h1 className='underline text-lg font-bold'>Shipping Address</h1>
            <p>Country : Nepal</p>
            <p>Province : Bagmati</p>
            <p>District : Lalitpur</p>
            <p>Ward : 14</p>
            <p>Street : Ranibu</p>
          </div>
					<div className='border-b'>
            <h1 className='underline text-lg font-bold'>Payment</h1>
            <p>Cash On Delivery</p>
          </div>
          <div className='border-b'>
            <h1 className='underline text-lg font-bold'>Shipping Address</h1>
            <div className="w-full px-2 py-1 flex justify-between">
							<p className="">Total (Selected 2 items)</p>
							<p className="font-bold">
								{" "}
								Rs. {commaNumber(12000)}
							</p>
						</div>
						<div className="w-full px-2 py-1 flex justify-between">
							<p className="">Discount</p>
							<p className="font-bold"> Rs. {commaNumber(300)}</p>
						</div>
						<div className="w-full px-2 py-1 flex justify-between">
							<p className="">Vat</p>
							<p className="font-bold">Rs. {commaNumber(1000)}</p>
						</div>
						<div className="w-full px-2 py-1 flex justify-between border-b">
							<p className="">Delivery (Lalitpur)</p>
							<p className="font-bold"> Rs. {commaNumber(100)}</p>
						</div>
						<div className="w-full px-2 py-2 flex justify-between text-2xl font-extrabold bg-base-200/50">
							<p className="">Total Payable</p>
							<p className="font-bold">
								{" "}
								Rs. {commaNumber(13000)}
							</p>
						</div>
          </div>
          
					<div className="flex justify-end">
						<button className="btn btn-sm mt-3 btn-error" >
              <Link href={"/checkout/payment"}>
              Back
              </Link>
							
						</button>
						<button className="btn btn-sm mt-3 btn-info ml-2" onClick={handleConfirm}>
              Confirm
						</button>
					</div>
				</div>
			</div>
		</div>
  )
}