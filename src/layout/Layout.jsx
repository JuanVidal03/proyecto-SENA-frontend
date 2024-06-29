import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";


export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex">

        <Sidebar />
        <div className="w-full max-w-[70%] relative mt-[-8.5%]">{children}</div>
      </div>
    </div>
  );
}
