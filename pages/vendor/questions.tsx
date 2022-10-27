import React from 'react'
import QsnLists from '../../components/vendor/qsn/QsnLists'
import VendorNav from '../../components/vendor/VendorNav'

type Props = {}

export default function questions({}: Props) {
  return (
    <>
			<VendorNav basePath={"questions"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Product
				</h1>
                <div className="optionbar p-2 flex">
                    <button className="btn btn-sm btn-info mx-1" >Filter</button>
                </div>
                <QsnLists />
			</div>
		</>
  )
}