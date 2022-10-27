import { useRouter } from 'next/router'
import React from 'react'
import GroupList from '../../components/vendor/group/GroupList'
import GroupModal from '../../components/vendor/group/GroupModal'
import VendorNav from '../../components/vendor/VendorNav'

type Props = {}

export default function productgroup({}: Props) {
    const router = useRouter()
    const handleAddProductGroup =()=>{
        router.push("addproductgroup")
    }
  return (
    <>
			<VendorNav basePath={"productgroup"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Product Group
				</h1>
                <div className="optionbar p-2 flex">
                  <GroupModal buttonText={'Add Group'} title={'Add Group'}/>
                </div>
                <GroupList />
			</div>
		</>
  )
}