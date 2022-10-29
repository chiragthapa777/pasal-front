// components/layout.js
import { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { useSelector, useDispatch } from 'react-redux'
import { setAge } from "../../store/slice/profile";
import Head from 'next/head';

export default function Layout({ children }: any) {
  const dispatch=useDispatch()
  const changeAge=()=>{
    dispatch(setAge(10))
  }
  const [theme, settheme] = useState(true);
  useEffect(() => {
    if(window.localStorage.getItem("lightMode")){
      settheme(
        window.localStorage.getItem("lightMode") === "true" ? true : false
      );
    }
  }, []);
  return (
    <div
      className="font-mono min-h-screen flex flex-col justify-between overflow-x-hidden"
      data-theme={theme ? "light" : "dark"}
    >
      <Head>
        <title>पसल - muiltivendor ecommerce</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Navbar children={children} theme={theme} settheme={settheme} />
    </div>
  );
}
