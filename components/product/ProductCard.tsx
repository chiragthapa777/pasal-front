import React from 'react';
import Link from 'next/link'
function ProductCard(props : any) {
    const {product}=props
    return (
            <div  className="card w-44 sm:w-64 bg-base-100 shadow-xl m-1 cursor-pointer">
            <figure className=" hover:scale-110 hover:duration-500">
                <img src={product.images[0].url ? product.images[0].url:`https://placeimg.com/400/225/arch`} alt={product.name} className="rounded-sm w-full h-[250px] object-cover" />
            </figure>
            <div className="card-body items-center text-center p-2">
                <Link href={`/product/${product.id}`}>
                <div className="text-lg sm:text-xl text-base-content/70 font-bold hover:text-neutral">{product.name}</div>
                </Link>
                <p className={`text-xl sm:text-2xl font-bold flex`}><span className={`mr-2 font-semibold`}>Rs.</span>{product.price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary btn-sm sm:btn-md text-base-100 sm:px-12">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;