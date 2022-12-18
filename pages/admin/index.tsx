import React, {useState, useEffect} from 'react'
import AdminNav from '../../components/admin/AdminNav'
import Dashboard from '../../components/admin/dashboard/Dashboard'


type Props = {}

export default function index({}: Props) {

    return (
        <>
            <AdminNav basePath={"/"}/>
            <div className='lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2'>
                <Dashboard/>
            </div>
        </>
    )
}
