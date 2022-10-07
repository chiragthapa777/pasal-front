// components/layout.js
import { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";

export default function Layout({ children }: any) {
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
      data-theme={theme ? "winter" : "night"}
    >
      <Navbar children={children} theme={theme} settheme={settheme} />
    </div>
  );
}
