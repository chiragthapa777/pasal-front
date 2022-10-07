import type { NextPage } from 'next'
import { wrapper } from '../../store'
import  {product} from "../../data"
import ProductDetail from "../../components/productPageComponent/ProductDetail";
import ProductReviewSection from "../../components/productPageComponent/ProductReviewSection";
import ProductDescription from '../../components/productPageComponent/ProductDescription';
import ProductQnaSection from '../../components/productPageComponent/ProductQnaSection';


const ProductById: NextPage = (props : any) => {
    console.log(product)
    return (
        <div className={'bg-base-200/30'}>
            <ProductDetail product={product}/>
            {/* <ProductDescription product={product}/> */}
            <ProductReviewSection product={product}/>
            <ProductQnaSection />
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
