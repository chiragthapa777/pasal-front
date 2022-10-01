import React, { useState } from 'react'

interface quantity{
    max:number
    min:number
}

export default function Quantity({max, min}:quantity) {
    const [quantity, setquantity] = useState(1);
  return (
    <div className="btn-group btn-s">
            <button
              className={`btn btn-sm btn-primary ${
                quantity <= min ? "btn-disabled" : ""
              }`}
              onClick={() => {
                setquantity(quantity - 1);
              }}
            >
              -
            </button>
            <input
              type="text"
              className="input input-sm w-12  text-center rounded-none  "
              value={quantity}
              onChange={(e) => {
                if (!isNaN(Number(e.target.value)) && Number(e.target.value)>=min && Number(e.target.value)<=max) {
                  setquantity(Number(e.target.value));
                }
              }}
              disabled={quantity <= min || quantity>=max ? true : false}
            />
            <button
              className={`btn btn-sm btn-primary ${
                quantity >= max ? "btn-disabled" : ""
              }`}
              onClick={() => {
                setquantity(quantity + 1);
              }}
            >
              +
            </button>
          </div>
  )
}
