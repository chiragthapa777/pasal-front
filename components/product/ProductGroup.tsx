import React from 'react';
import ProductCard from "./ProductCard";


function ProductGroup(props : any) {
    const {header, productList}=props
    return (
        <div className='my-2 mt-10'>
            <div className={'flex justify-between m-2 sm:mx-20'}>
                <h1 className={'text-base-content/50 font-bold text-2xl'}>{header}</h1>
                <button className="btn btn-sm btn-info">Show More</button>
            </div>
            <div className='w-full md:w-full mx-auto flex justify-center flex-wrap'>
                {productList.length>0 ? productList.map((product :any)=>{
                    return(
                        <ProductCard  product={product}/>
                    )
                }): "Cannot find any products"}
            </div>


        </div>
    );
}

export default ProductGroup;