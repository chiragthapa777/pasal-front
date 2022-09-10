import type { NextPage } from 'next'
import { wrapper } from '../store'
import { selectProfile, setProfileData, setAge } from '../store/slice/profile'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'

const Home: NextPage = (props : any) => {
  const {resolvedUrl}=props
  const profile =useSelector(selectProfile)
  const dispatch=useDispatch()
  const changeAge=()=>{
    dispatch(setAge(10))
  }
  return (
   <div className='text-red-500'>
    hello {resolvedUrl}
    <button className="btn" onClick={changeAge}>setage</button>
    <p>name : {profile.name}</p>
    <p>age :{profile.age}</p>
    <Link href="/profile">Profile</Link>
    
    <Link href="/">Home</Link>
   </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store=> async (ctx)=>{
  store.dispatch(setProfileData("namemafdsfasbdi"))
  const {resolvedUrl}=ctx
  return {
    props:{
      resolvedUrl
    }
  }
})

export default Home
