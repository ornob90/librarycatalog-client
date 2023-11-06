import React from "react";
import Container from "../../components/shared/Container";
import Button from "../../components/Shared/Button";

const AllBooks = () => {
  return (
    <Container className="pt-[35%] md:pt-[15%] lg:pt-[10%] mb-16">
      <div className="flex flex-col md:flex-row justify-center md:justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl sm:text-3xl md:text-2xl font-bold ">
            Complete Book Catalog
          </h2>
          <p className="text-[#808080] ">
            <span className="font-bold">3</span> Total{" "}
            <span className="font-bold">2</span> Available
          </p>
          <div className="flex  gap-4 items-center">
            <div className="hidden md:block h-[30px] w-[30px] rounded-full border border-black"></div>
            <p className="hidden md:block font-semibold">Kazi Towfiq</p>
          </div>
        </div>

        <div className="flex justify-end flex-col">
          <Button className="border border-gray-300 px-6 py-1 rounded-lg hover:bg-black hover:text-white duration-300 font-semibold">
            Filter Available
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default AllBooks;
