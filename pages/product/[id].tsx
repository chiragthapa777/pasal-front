import type { NextPage } from 'next'
import { wrapper } from '../../store'
import  {product} from "../../data"
import ProductDetail from "../../components/productPageComponent/ProductDetail";
import ProductReviewSection from "../../components/productPageComponent/ProductReviewSection";


const ProductById: NextPage = (props : any) => {
    console.log(product)
    return (
        <div className={'bg-base-200/30'}>
            <ProductDetail product={product}/>
            <ProductReviewSection product={product}/>
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps((store : any)=> async (ctx : any)=>{
//   console.log(ctx)
//   store.dispatch(setProfileData("namemafdsfasbdi"))
    const {resolvedUrl}=ctx
    return {
        props:{
            resolvedUrl
        }
    }
})

export default ProductById
