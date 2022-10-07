import React from 'react'
import ModalStructre from './ModalStructre'

export default function Filter({isOpen,setIsOpen}:any) {
    console.log("gag")
  return (
    <ModalStructre isOpen={isOpen} loading={false} setIsOpen={setIsOpen}>
        <h1>Filters</h1>
    </ModalStructre>
  )
}
