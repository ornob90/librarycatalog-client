import React from "react";
import Button from "../Shared/Button";

const DetailSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0">
      <div className="md:col-span-3 h-ful w-[42%] mx-auto border border-black">
        {/* <img
          src={image}
          alt={name}
          className="mx-auto w-[180px] sm:w-[250px] lg:w-[300px] "
        /> */}
      </div>

      <div className="md:col-span-2 flex flex-col  gap-4">
        <div>
          <p className="text-[#808080] font-bold">author_name</p>
          <h1 className="font-bold text-3xl my-3 ">name</h1>
          <p>
            <span className="text-xl font-semibold">quantity</span> available
          </p>
        </div>
        <div className="flex flex-col gap-3 border min-h-[25%]">
          <p className="text-sm text-gray-500 p-4 w-[80%] rounded-lg">
            Short Description
          </p>
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
            <p className="font-bold text-xl">category</p>
          </div>
          <div className="flex justify-between w-full">
            <Button className="border border-black font-semibold w-2/5 py-2">
              Borrow
            </Button>

            <Button className="bg-black w-2/5 text-white font-semibold">
              Read
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
