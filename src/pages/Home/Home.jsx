import React from "react";
import Container from "../../components/shared/Container";
import Banner from "./Banner";
import About from "./About";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Testimonials />
    </div>
  );
};

export default Home;
