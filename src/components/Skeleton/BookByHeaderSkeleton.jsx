import React from "react";
import Container from "../shared/Container";

const BookByHeaderSkeleton = () => {
  return (
    <div className="bg-gray-200 pt-[25%] sm:pt-[20%] lg:pt-[5%] ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 h-max">
          <div
            className="lg:col-span-3 flex flex-col gap-4 
justify-center text-center md:text-left items-center md:items-start"
          >
            <h3 className="bg-white animation-pulse w-[30%] h-[25px] font-medium text-[#808080] text-md sm:text-xl md:text-md lg:text-xl"></h3>
            <h1 className="bg-white animation-pulse w-[20%] h-[40px] font-bold text-3xl sm:text-4xl md:text-3xl lg:text-5xl"></h1>
            <p className="text-[#808080] text-[13px] mx-auto md:m-0 md:w-2/4 text-center md:text-left bg-white animation-pulse w-3/4 h-[12px]"></p>

            <p className="text-[#808080] text-[13px] mx-auto md:m-0 md:w-2/4 text-center md:text-left bg-white animation-pulse w-3/4 h-[12px]"></p>
          </div>
          <div className="h-[300px] lg:col-span-2 flex flex-col justify-center">
            <p className="h-[80%] object-cover w-full bg-white animate-pulse"></p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookByHeaderSkeleton;
