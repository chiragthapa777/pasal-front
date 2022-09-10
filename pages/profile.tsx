import type { NextPage } from 'next'
import { wrapper } from '../store'
import { selectProfile, setProfileData } from '../store/slice/profile'
import { useSelector } from 'react-redux'
import Link from 'next/link'


const Profile: NextPage = (props : any) => {
  const {resolvedUrl}=props
  const profile =useSelector(selectProfile)
  return (
   <div className='text-red-500'>
    hello from profile {resolvedUrl}
    <p>name : {profile.name}</p>
    <p>age :{profile.age}</p>
    <Link href="/home">Home</Link>
   </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store=> async (ctx)=>{
//   console.log(ctx)
//   store.dispatch(setProfileData("namemafdsfasbdi"))
  const {resolvedUrl}=ctx
  return {
    props:{
      resolvedUrl
    }
  }
})

export default Profile
