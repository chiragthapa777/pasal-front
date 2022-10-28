import type { NextPage } from 'next'
import Corousel from '../components/homepage/Corousel'
import { wrapper } from '../store'
import ProductGroup from "../components/product/ProductGroup";
import {productList} from "../data";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {handleSwal} from "../store/slice/profile";
import { useSelector, useDispatch } from 'react-redux'
import CategorySlider from '../components/homepage/CategorySlider';
import ImageGallery from '../components/homepage/ImageGallery';


const Index: NextPage = (props : any) => {
    const dispatch=useDispatch()
    const MySwal = withReactContent(Swal)
    const openSwap=()=>{
        MySwal.fire({
            title: <p>Hello World</p>,
            didOpen: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                MySwal.showLoading()
            },
        }).then(() => {
            return MySwal.fire(<p>Shorthand works too</p>)
        })
        console.log("click")
        dispatch(handleSwal(MySwal))
    }
  return (
   <div className={''}>
    {/*<Hero />*/}
        <Corousel/>
         <CategorySlider />
         <ProductGroup header={"New Arrivals"} productList={productList}/>
         <ProductGroup header={"Top seller"} productList={productList}/>
         <ImageGallery />
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
