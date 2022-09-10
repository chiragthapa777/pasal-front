import type { NextPage } from 'next'
import Corousel from '../components/homepage/Corousel'
import Hero from '../components/homepage/Hero'
import { wrapper } from '../store'


const Index: NextPage = (props : any) => {
  return (
   <div>
    {/* <Corousel /> */}
    <Hero />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum nam non in asperiores architecto quibusdam nesciunt consequuntur, sequi tempora eligendi perferendis quod totam at iure aspernatur. Ipsa voluptatem excepturi iure maxime, ullam cupiditate dolorem. Eos aspernatur, accusantium beatae necessitatibus quidem quasi nostrum sequi sapiente vitae odio cum eius fugiat. Harum ad labore, voluptatum velit alias, nostrum iure repellat quidem doloremque quaerat debitis quis voluptates quos at esse non numquam natus dolore deleniti tenetur nobis id atque similique. Repudiandae, facilis quia? Id vel tempore maiores, aliquam debitis impedit quasi nisi dolore aut amet cumque possimus blanditiis? Alias magnam natus ex.
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
