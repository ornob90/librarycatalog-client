import React from "react";
import Container from "../../components/shared/Container";
import Banner from "./Banner";
import About from "./About";
import Testimonials from "./Testimonials";
import Categories from "./Categories";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/shared/Loading";

const Home = () => {
  const { loading } = useAuth();

  return (
    <div>
      <Banner />
      <Categories />
      <About />
      <Testimonials />
    </div>
  );
};

export default Home;
