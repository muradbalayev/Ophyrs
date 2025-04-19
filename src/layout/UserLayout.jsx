import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
const UserLayout = () => {
  return (
    <div>
      <Menu />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default UserLayout;
