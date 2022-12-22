import React, {useState} from 'react'

interface quantity {
    max: number
    min: number
}

export default function Quantity({max, min, addFunc,quantity, subFunc}: any) {
    // const [quantity, setquantity] = useState(1);
    return (
        <div className="btn-group btn-s">
            <button
                className={`btn btn-sm btn-primary ${
                    quantity <= min ? "btn-disabled" : ""
                }`}
                onClick={() => {
                    subFunc()
                }}
            >
                -
            </button>
            <input
                type="text"
                className="input input-sm w-12  text-center rounded-none  "
                value={quantity}
                disabled={quantity <= min || quantity >= max ? true : false}
            />
            <button
                className={`btn btn-sm btn-primary ${
                    quantity >= max ? "btn-disabled" : ""
                }`}
                onClick={() => {
                    addFunc()
                }}
            >
                +
            </button>
        </div>
    )
}
