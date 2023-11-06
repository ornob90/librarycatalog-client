import React from "react";
import Button from "../Shared/Button";
import { Rating } from "@mui/material";

const AllBookCard = () => {
  return (
    <div className="flex flex-col p-4  border shadow-sm rounded-lg">
      <div className=" flex justify-center items-center">
        <img
          src="https://m.media-amazon.com/images/I/81XCRGlex6L._AC_UF1000,1000_QL80_.jpg"
          alt=""
          className="h-[300px] md:h-[200px]"
        />
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <p className="font-bold text-xl">Name</p>
        <div className="flex justify-between items-center text-sm text-[#808080]">
          <p>History</p>
          <p>Author Name....</p>
        </div>
        <Rating name="half-rating-read" value={4.5} precision={0.5} readOnly />
        <Button className="border border-black py-2 mt-2 bg-black text-white hover:bg-white hover:text-black">
          Update
        </Button>
      </div>
    </div>
  );
};

export default AllBookCard;
