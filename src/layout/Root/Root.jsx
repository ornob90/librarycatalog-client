import React from "react";
import Container from "../../components/shared/Container";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="relative dark:bg-dark-mode">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
