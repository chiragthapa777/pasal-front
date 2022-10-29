import { useRouter } from 'next/router'
import React from 'react'

type Props = {
    message?:string
    title?:string
    redirect?:string    
}

export default function Error({message,title,redirect}: Props) {
    const router = useRouter()
    const handleRedirect = () => {
        if(redirect){
            router.push(redirect)
        }
        router.back()
    }
  return (
    <div className="w-full h-full flex justify-center items-center">
        <div className='bg-base-100 p-5 rounded-lg drop-shadow-sm'>
            <h1 className="text-2xl text-error font-bold">{title ? title :"Something went wrong..."}</h1>
            {message && <p className=''>{message}</p>}
            <button className="btn btn-error mt-2" onClick={handleRedirect}>Go back</button>
            
        </div>
    </div>
  )
}