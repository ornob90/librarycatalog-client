import React from "react";
import Container from "../../components/shared/Container";
import Button from "../../components/Shared/Button";
import SectionHeader from "../../components/shared/SectionHeader";

const About = () => {
  return (
    <Container className="">
      <SectionHeader
        header="About US"
        desc="Discover Our Commitment to Books and Readers"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 h-full  my-20 gap-8 md:gap-0">
        <div className="h-full lg:col-span-3 flex gap-2 justify-left">
          <div className=" ">
            <div className="w-[150px] h-[200px] lg:w-[200px] lg:h-[250px]  mb-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1664392455446-1e636959468b?auto=format&fit=crop&q=80&w=1345&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <div className="w-[150px] h-[200px] lg:w-[200px] lg:h-[250px] ">
              <img
                src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="-mt-3">
            <div className="w-[150px] h-[200px] lg:w-[200px] lg:h-[250px]  mb-2">
              <img
                src="https://images.unsplash.com/photo-1509266272358-7701da638078?auto=format&fit=crop&q=80&w=1372&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <div className="w-[150px] h-[200px] lg:w-[200px] lg:h-[250px] ">
              <img
                src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-4 justify-center text-center md:text-left">
          <h3 className="font-medium text-[#808080] text-md text-sm">
            About Us
          </h3>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-3xl lg:text-5xl">
            Explore Our Library
          </h1>
          <p className="text-[#808080] text-[13px] w-3/4 mx-auto md:m-0 lg:w-3/4 text-center md:text-left">
            "Welcome to our library, a haven of literary treasures. We're
            dedicated to fostering a love for reading, offering a diverse
            collection spanning various genres and authors. Our mission is to
            inspire, educate, and connect readers to a world of knowledge and
            imagination"
          </p>
          <div>
            <Button className="bg-black text-white py-1 px-6 md:py-2 md:px-8 rounded-sm text-sm md:text-base mt-2">
              Explore
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
