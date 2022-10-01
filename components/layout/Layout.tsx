// components/layout.js
import {useState} from "react"
import Navbar from "../navbar/Navbar";

export default function Layout({ children }: any) {
  const [theme, settheme] = useState(true)
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden" data-theme={theme?"winter":"night"}>
      <Navbar children={children} theme={theme} settheme={settheme} />
    </div>
  );
}
