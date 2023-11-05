import React from "react";
import Button from "../Shared/Button";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BookCard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 h-[400px] border rounded-lg shadow-lg">
      <div className="py-4 h-[60%] bg-gray-200 rounded-t-lg">
        <img
          src="https://m.media-amazon.com/images/I/81XCRGlex6L._AC_UF1000,1000_QL80_.jpg"
          alt=""
          className="h-full object-cover mx-auto  rounded-lg"
        />
      </div>
      <div className="p-4  flex flex-col justify-between h-[40%]">
        <div className="flex items-center justify-between">
          <p className="text-[#808080]">Author</p>
          <Rating
            name="half-rating-read"
            value={4.5}
            precision={0.5}
            readOnly
          />
        </div>
        <div className="flex items-center justify-between ">
          <p className="font-bold text-xl">Name Nameee...</p>
          <p className="text-black font-semibold ">History</p>
        </div>

        <Button
          className="bg-black text-white py-1 px-2 md:py-2 md:px-5  text-sm md:text-base w-full rounded-lg font-bold "
          onClick={() => navigate("/book/1")}
        >
          Details
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
