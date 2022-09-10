// components/layout.js
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout({ children }: any) {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Navbar children={children} />
    </div>
  );
}
