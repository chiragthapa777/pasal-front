import React from 'react'

import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Props = {}

export default function Loader({}: Props) {
  return (
    <div className="h-full w-full p-3 flex justify-center items-center bg-base-200/30">
            <AiOutlineLoading3Quarters className="animate-spin text-xl text-center text-primary " />
          </div>
  )
}