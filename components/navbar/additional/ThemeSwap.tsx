import React from "react";
import { MdDarkMode,MdLightMode } from "react-icons/md";

export default function ThemeSwap({theme, settheme}:any) {
  const themeFunc: any=()=>{
    const mode=window.localStorage.getItem("lightMode")? window.localStorage.getItem("lightMode")=== "true" ? true : false:true
    localStorage.setItem("lightMode",mode?"false":"true")
    settheme(!mode)
  }
  return (
    <label className="swap swap-rotate text-base-content text-2xl md:text-3xl ml-1 rounded-full pl-1 sm:p-2 hover:bg-base-300">
      <input type="checkbox" checked={theme} onChange={themeFunc} />
      <MdDarkMode className="swap-on"/>
      <MdLightMode className="swap-off"/>
    </label>
  );
}
