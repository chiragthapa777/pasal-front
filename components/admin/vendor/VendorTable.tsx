import React, { useEffect, useState } from 'react'
import VendorTableItem from './VendorTableItem'
import {useContext} from "react";
import AdminVendorContext from "../../../contexts/AdminVendorContext";
import Loader from "../../helper/Loader";

type Props = {}

export default function VendorTable({}: Props) {
    const {vendors, loading} = useContext(AdminVendorContext);
    console.log(loading)
    useEffect(() => {

  }, [])

  return (
    <div className="overflow-x-auto ">
			<table className=" w-full border-collapse ">
				<thead>
				<tr className="">
                <th className="border-b text-left py-3 px-2 bg-base-200">SN </th>
                <th className="border-b text-left py-3 px-2 bg-base-200">Name</th>
                <th className="border-b text-left py-3 px-2 bg-base-200">Description</th>
                <th className="border-b text-left py-3 px-2 bg-base-200">Email</th>
                <th className="border-b text-left py-3 px-2 bg-base-200">Active</th>
                <th className="border-b text-left py-3 px-2 bg-base-200">Pan</th>
                <th className="border-b text-left py-3 px-2 bg-base-200">Date</th>
                <th className="border-b text-left py-3 px-2 bg-base-200">Pending Request</th>
                <th className="border-b text-left py-3 px-2 bg-base-200">Action</th>
            </tr>
				</thead>
				<tbody>
                {
                    loading ?
                        <tr className=" hover:bg-base-200 cursor-pointer even:bg-base-200/40 ">
                            <td colSpan={10} className="text-center ">
                                <Loader />
                            </td>
                        </tr> : (
                            vendors.length>0 ?
                            vendors.map((vendor:any, index:number)=><VendorTableItem key={vendor.id} index={index+1} vendor={vendor} />) :
                                <tr>
                                    <td colSpan={10} className="text-center p-2">
                                        No vendors
                                    </td>
                                </tr>
                    )
                }
				</tbody>
			</table>
		</div>
  )
}
