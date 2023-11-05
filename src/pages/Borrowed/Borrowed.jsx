import React from "react";
import Container from "../../components/shared/Container";
import Button from "../../components/Shared/Button";
import BorrowCard from "../../components/Card/BorrowCard";

const Borrowed = () => {
  return (
    <Container className="pt-[28%] md:pt-[10%] w-[80%] md:w-[60%]">
      <div className="flex flex-row justify-center md:justify-between items-start w-full">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-[130px] h-[130px] border border-black rounded-full"></div>
          <p className="text-3xl font-bold">Kazi Towfiq</p>
        </div>
        <Button className="border border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white duration-300 font-semibold hidden md:block">
          Explore
        </Button>
      </div>

      <div className="my-16">
        <div className="flex items-center justify-evenly md:justify-start gap-8 md:gap-10 text-medium font-medium">
          <p className="pb-2 border-b-[3px] border-b-black  text-sm md:text-base">
            History
          </p>
          <p className="pb-2 text-sm md:text-base">Novel</p>
          <p className="pb-2 text-sm md:text-base">Thriller</p>
          <p className="pb-2 text-sm md:text-base">Sci-Fi</p>
        </div>
        <hr className=" border border-gray-200" />
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <BorrowCard />
      </div>
    </Container>
  );
};

export default Borrowed;
