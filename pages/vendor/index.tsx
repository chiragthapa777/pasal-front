import React from 'react'
import Dashboard from '../../components/vendor/dashboard/Dashboard'
import VendorNav from '../../components/vendor/VendorNav'

type Props = {}

export default function index({}: Props) {
  return (
    <>
      <VendorNav basePath={"/"}/>
      <div className='lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2'>
        <Dashboard />
      </div>
      
    </>
  )
}