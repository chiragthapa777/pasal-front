import React from "react";
import { MdDarkMode,MdLightMode } from "react-icons/md";

export default function ThemeSwap({theme, settheme}:any) {
  return (
    <label className="swap swap-rotate text-base-content text-2xl md:text-3xl ml-1 rounded-full p-2 hover:bg-base-300">
      <input type="checkbox" checked={theme} onChange={()=>{settheme(!theme)}} />
      <MdDarkMode className="swap-on"/>
      <MdLightMode className="swap-off"/>
    </label>
  );
}
