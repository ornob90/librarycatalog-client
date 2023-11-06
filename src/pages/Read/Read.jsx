import React from "react";
import Container from "../../components/shared/Container";

const Read = () => {
  return (
    <div className="min-h-screen mb-20">
      <div className=" lg:h-[400px] bg-gray-100 pt-[30%] sm:pt-[20%] md:pt-[15%] lg:pt-[10%]">
        <Container className="flex flex-col md:flex-row lg:grid-cols-5 h-full w-[90%]  md:w-[80%] lg:w-[60%] pb-4">
          <div
            className="lg:col-span-3 flex flex-col gap-4 
         justify-center  items-center md:items-start text-center md:text-left sm:w-[80%] md:w-[90%] mx-auto mb-10"
          >
            <p className=" text-[#808080] text-md text-[12px] md:text-sm">
              Pages weave stories, transport minds, kindle imaginations—a
              universe in every book
            </p>
            <h1 className="font-bold text-3xl sm:text-2xl md:text-3xl lg:text-4xl ">
              A single thread
            </h1>
            <p className="text-[#808080] text-[13px] w-3/4 mx-auto md:m-0 md:w-3/4 text-center md:text-left">
              "Discover a vast catalog of organized reads. Find diverse
              literature at your fingertips. "
            </p>
          </div>

          <div className="h-full lg:col-span-2 flex  justify-center items-center">
            <img
              src="https://m.media-amazon.com/images/I/81XCRGlex6L._AC_UF1000,1000_QL80_.jpg"
              alt=""
              className=" w-[35%]"
            />
          </div>
        </Container>
      </div>
      <Container className=" md:w-[80%] lg:w-[60%] mt-10 ">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quaerat
          vel numquam eveniet a tenetur nam quae, ipsum sapiente consequatur?
          Error ut blanditiis commodi itaque impedit eos pariatur placeat sed
          vitae quaerat, soluta provident adipisci, animi nisi nobis aut aliquam
          minima autem? Possimus ipsa ducimus consequatur laudantium sed.
          Repellat beatae, quae consectetur eaque repellendus possimus
          doloremque magni ea sequi commodi accusantium soluta, incidunt aperiam
          amet inventore assumenda provident, nam tempora saepe magnam! Qui
          consequuntur vero culpa tenetur fugiat numquam iure dignissimos
          voluptatum unde quod cum dolorum, fuga ea ipsam labore asperiores,
          nobis sit, dolorem corporis ratione laborum aperiam molestiae
          possimus!
        </p>
      </Container>
    </div>
  );
};

export default Read;
