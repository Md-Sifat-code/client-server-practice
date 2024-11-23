import React from "react";
import Navbar from "../fixed_component/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../fixed_component/Footer";

export default function Main_layout() {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
