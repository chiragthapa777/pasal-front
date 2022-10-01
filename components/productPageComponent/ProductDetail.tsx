import React, { useState } from "react";
import ProductImageCorousel from "./ProductImageCorousel";
import {
  MdStore,
  MdShoppingCart,
  MdOutlineFavorite,
  MdAttachMoney,
} from "react-icons/md";
import Quantity from "../helper/Quantity";

function ProductDetail(props: any) {
  const [quantity, setquantity] = useState(1);
  const { product: any } = props;
  return (
    <div className={"w-full"}>
      <div className={"flex flex-col sm:flex-row justify-start  "}>
        <div className={"w-[100vw] sm:w-[50vw] p-0 sm:p-2 md:p-10"}>
          {/*    image    */}
          <div className={"w-full"}>
            <ProductImageCorousel />
          </div>
        </div>
        <div className={"p-0 sm:p-2 md:p-10 w-full sm:w-[50vw] m-2 sm:m-1"}>
          {/*     detail      */}
          <h1 className="text-primary font-bold text-2xl sm:text-3xl">
            Men winter pant fur inside
          </h1>
          <div className="flex justify-between m-1 mb-3">
            <div className="rating ">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                checked
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
            <div className="text-xs my-auto">13 reviews | 3 questions</div>
          </div>
          <hr />
          <div className="flex justify-between m-1 my-3">
            <button className="btn btn-primary btn-xs">
              <MdStore className="mr-2 text-lg" /> Zara
            </button>
          </div>

          <hr />
          <p className="font-bold text-3xl m-1">
            <span>Rs.</span>6293
          </p>
          <Quantity max={10} min={1} />
          <div className="m-3">
            <div className="flex mb-2">
              <button className="btn btn-primary btn-outline flex-1 mr-2">
                <MdShoppingCart className="mr-2 text-2xl" /> Add to cart
              </button>
              <button className="btn btn-primary btn-outline flex-none text-2xl">
                <MdOutlineFavorite />
              </button>
            </div>
            <button className="btn btn-primary btn-outline btn-block">
              <MdAttachMoney className="mr-2 text-2xl" /> Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
