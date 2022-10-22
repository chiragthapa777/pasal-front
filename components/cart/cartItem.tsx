import commaNumber from 'comma-number';
import React from 'react'
import { HiHeart, HiTrash } from "react-icons/hi";
import Quantity from '../helper/Quantity';

export default function CartItem() {
  return (
    <div className=' my-2 border-b'>
        <section className='upperSection flex'>
            <img src="https://www.gyapu.com/public/files/64C69976EB4EFC7-cd693c56-491b-474e-84db-43286db7b68c.jpg" alt="" className='my-1 h-28 w-28 object-cover '/>
            <div className='ml-2'>
                <div className="w-full px-2 py-1 flex justify-between">
					<p className=" text-2xl font-extrabold"> Pant black</p>
				</div>
                <div className="w-full px-2 py-1 flex justify-between ">
					<p className="my-auto">Quantity : </p>
					<p className="font-bold ml-1"><Quantity max={10} min={1} /></p>
				</div>
                <div className="w-full px-2 py-1 flex justify-between">
					<p className="">Price : </p>
					<p className="font-bold"> {` Rs`}. {commaNumber(12000)}</p>
				</div>
            </div>
        </section>
        <section className='LowerSection flex justify-between h-auto'>
            <div className="btnGroup cursor-pointer border-t border-l border-r flex text-xl sm:text-2xl text-gray-400 ">
                <div className='border-r p-2 hover:text-error'><HiTrash /></div>
                <div className='p-2 hover:text-success'><HiHeart /></div>
            </div>
            <div className="btnGroup cursor-pointer border-t border-l border-r flex text-sm sm:text-md text-gray-400 items-center hover:text-success">
                <div className='p-1 '>Sub-Total : </div>
                <div className='p-1 '>{commaNumber(1241)}</div>
            </div>
        </section>
    </div>
  )
}
