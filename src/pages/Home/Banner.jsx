import React from "react";
import Container from "../../components/shared/Container";

const Banner = () => {
  return (
    <div className="min-h-[200px] h-[70vh] bg-gray-100 pt-[7%]">
      <Container className="grid grid-cols-5 h-full  ">
        <div
          className="col-span-3 flex flex-col gap-4 
         justify-center"
        >
          <h3 className="font-medium text-[#808080] text-xl">
            Uncover Every Page of Knowledge.
          </h3>
          <h1 className="font-bold text-5xl">
            The Catalog Corner: <br /> Discover Reads
          </h1>
          <p className="text-[#808080] text-[13px] w-2/4">
            "Discover a vast catalog of organized reads. Find diverse literature
            at your fingertips. Explore, connect, and delve into the world of
            books."
          </p>
        </div>
        <div className="h-full col-span-2 flex flex-col justify-center">
          <img
            // src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-[90%] object-cover w-full"
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
