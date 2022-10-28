import React from 'react'
import AdminNav from '../../../components/admin/AdminNav'
import TagAddModal from '../../../components/admin/tag/TagAddModal'
import TagTable from '../../../components/admin/tag/TagTable'

type Props = {}

export default function index({}: Props) {
  return (
    <>
			<AdminNav basePath={"tags"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Tags List
				</h1>
				<div className="optionbar p-2 flex">
					<TagAddModal />
				</div>
				<TagTable />
			</div>
		</>
  )
}