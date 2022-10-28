import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export default function CategorySliderItem({url, title}: any) {
    const router = useRouter()
    const handleClick =()=>{
        router.push({
            pathname: "/product",
            query: {
                tag:title,
            },
        });
    }
  return (
    <div className=' m-2 w-[110px] sm:w-[150px] text-center hover:scale-105 hover:duration-500 cursor-pointer' onClick={handleClick}>
        <img src={url} alt="" className='rounded-3xl h-[130px] sm:h-[170px] min-w-[110px]  sm:min-w-[150px] object-cover'  />
        <p className='mx-auto font-bold text-base-content/50 text-md md:text-xl'>{title}</p>
    </div>
  )
}