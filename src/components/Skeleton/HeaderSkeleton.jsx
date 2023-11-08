import React from "react";
import Container from "../shared/Container";
import Button from "../Shared/Button";

const HeaderSkeleton = () => {
  return (
    <div>
      <div className="-z-10 flex flex-col md:flex-row justify-center md:justify-between">
        <div className="flex flex-col gap-4 w-[80%]">
          <h2 className="text-xl sm:text-3xl font-bold animate-pulse bg-gray-300 w-[40%] h-[60px]"></h2>
          <div className="flex gap-2 items-center">
            <p className="text-[#808080] text-sm mr-4 bg-gray-300 animate-pulse h-[10px] w-[10%]"></p>
            <p className="text-[#808080] text-sm mr-4 bg-gray-300 animate-pulse h-[10px] w-[10%]"></p>
          </div>
          <div className="flex  gap-4 items-center">
            <div className="hidden md:block h-[30px] w-[30px] rounded-full  bg-gray-300 animate-pulse"></div>
            <p className="hidden md:block font-semibold bg-gray-300 h-[24px] w-[100px]"></p>
          </div>
        </div>

        <div className="flex justify-end flex-col">
          <Button
            className={`border border-gray-300 px-6 py-1 rounded-lg  duration-300 font-semibold bg-gray-300 animate-pulse h-[30px] w-[180px]`}
          ></Button>
        </div>
      </div>
      <hr className="mt-4 border border-gray-300 " />
    </div>
  );
};

export default HeaderSkeleton;
