import { Rating } from "@mui/material";
import React from "react";
import Button from "../Shared/Button";

const CardSkeleton = () => {
  return (
    <div className="flex flex-col p-4  border shadow-sm rounded-lg justify-between">
      <div className="bg-gray-300 flex justify-center items-center animate-pulse h-[200px]"></div>
      <div className="flex flex-col gap-2 mt-10">
        <p className="font-bold text-xl text-clip bg-gray-300 h-[20px] w-[60%]"></p>
        <div className="flex justify-between items-center text-sm text-[#808080]">
          <p className=" bg-gray-300 h-[15px] w-[20%]"></p>
          <p className=" bg-gray-300 h-[15px] w-[20%]"></p>
        </div>
        <div className="flex gap-2 items-center">
          {[1, 2, 3, 4, 5].map((value) => (
            <p key={value} className="h-[15px] w-[15px] bg-gray-300"></p>
          ))}
        </div>
        <div className="h-[40px] bg-gray-300"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
