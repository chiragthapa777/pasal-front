import type { NextPage } from 'next'
import Corousel from '../components/homepage/Corousel'
import { wrapper } from '../store'
import ProductGroup from "../components/product/ProductGroup";
import {productList} from "../data";


const Index: NextPage = (props : any) => {
  return (
   <div className={'bg-base-300/50'}>
    {/*<Hero />*/}
        <Corousel/>
         <ProductGroup header={"New Arrivals"} productList={productList}/>
         <ProductGroup header={"Top seller"} productList={productList}/>
         <ProductGroup header={"Dashain Special"} productList={productList}/>
   </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store=> async (ctx)=>{
//   console.log(ctx)
//   store.dispatch(setProfileData("namemafdsfasbdi"))
  // const {resolvedUrl}=ctx
  return {
    props:{

    }
  }
})

export default Index
