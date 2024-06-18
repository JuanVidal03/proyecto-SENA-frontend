import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import './layout.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout-navbar">
        <Navbar />
      </div>
      <div className="layout-sidebar-content">

        <Sidebar />
        <div className="layout-content">{children}</div>
      </div>
    </div>
  );
}
