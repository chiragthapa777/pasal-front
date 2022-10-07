import React,{useEffect, useState} from 'react'
import {useRouter}  from 'next/router'

export default function index(props:any) {
  const [search, setsearch] = useState("")
  const router=useRouter()
  useEffect(() => {
    // router.push({
    //   pathname:'/product',
    //   query:{
    //     serach:"asdigfai"
    //   }
    // })
    //yoo garna ni milxa kina ki client side vayo
  }, [])
  const 
  handleSearch=()=>{
     router.push({
      pathname:'/product',
      query:{
        search
      }
    })
  }
  
  
  return (
    <div>
      <button onClick={handleSearch}>serach</button>
      <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)}/>
    </div>
  )
}


export async function getServerSideProps({query}:any) {
  console.log("pugyoooooo")
  function timeout() {
    return new Promise(resolve => setTimeout(resolve, 3000));
}
  console.log("Req : ",query)
  await await timeout();
  return {
      props: {},
    }
  }
