import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <SideBar />
      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
