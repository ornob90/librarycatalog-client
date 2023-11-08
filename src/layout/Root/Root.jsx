import React from "react";
import Container from "../../components/shared/Container";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useAuth from "../../hooks/useAuth";

const Root = () => {
  const { loading } = useAuth();
  console.log(loading);
  return (
    <div className="relative dark:bg-dark-mode">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
