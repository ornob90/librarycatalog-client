import React from "react";
import Button from "../Shared/Button";

const DetailSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0">
      <div className="md:col-span-3 h-ful w-[42%] mx-auto animation-pulse bg-gray-300">
        {/* <img
          src={image}
          alt={name}
          className="mx-auto w-[180px] sm:w-[250px] lg:w-[300px] "
        /> */}
      </div>

      <div className="md:col-span-2 flex flex-col  gap-4">
        <div>
          <p className="text-[#808080] font-bold animate-pulse h-[10px] w-[20%] bg-gray-200"></p>
          <h1 className="font-bold text-3xl my-3 animate-pulse h-[30px] w-[30%] bg-gray-200"></h1>
          <div className="flex items-center gap-2">
            <p className="animate-pulse h-[25px] w-[15%] bg-gray-200"></p>
            <p className="animate-pulse h-[25px] w-[10%] bg-gray-200"></p>
          </div>
        </div>
        <div className="flex flex-col gap-3 border min-h-[25%] animate-pulse bg-gray-200">
          <p className="text-sm text-gray-500 p-4 w-[80%] rounded-lg"></p>
        </div>
        <div className="border rounded-md p-4 w-full  h-[35%] flex flex-col justify-evenly gap-5">
          <div className="flex justify-between items-center">
            {/* <Rating
              name="half-rating-read"
              value={parseInt(rating)}
              precision={0.5}
              readOnly
            /> */}
            <div className="flex gap-2 items-center">
              {[1, 2, 3, 4, 5].map((value) => (
                <p key={value} className="h-[15px] w-[15px] bg-gray-300"></p>
              ))}
            </div>
            <p className="animate-pulse h-[25px] w-[25%] bg-gray-200"></p>
          </div>
          <div className="flex justify-between w-full">
            <Button className=" font-semibold w-2/5 py-5 animate-pulse bg-gray-300"></Button>

            <Button className=" font-semibold w-2/5 py-5 animate-pulse bg-gray-300"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
