import React, { ReactElement } from 'react'

type Props = {
    title:string
    icons:ReactElement
    size?:string
    type?:string
    variant?:string
    color?:string
    wide?:boolean
    width?:number
}

export default function BtnIcon({size}: Props) {
  return (
    <button className={`btn flex gap-2 btn-${size?size:"md"}` btn-${}}>

    </button>
  )
}