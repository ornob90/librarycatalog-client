import React from "react";
import Button from "../Shared/Button";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  const {
    _id,
    image,
    name,
    // quantity,
    author_name,
    category,
    // short_description,
    rating,
    // content,
  } = book || {};

  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 h-[400px] border rounded-lg shadow-lg">
      <div className="py-4 h-[60%] bg-gray-200 rounded-t-lg">
        <img
          src={image}
          alt=""
          className="h-full object-cover mx-auto  rounded-lg"
        />
      </div>
      <div className="p-4  flex flex-col justify-between h-[40%]">
        <div className="flex items-center justify-between">
          <p className="text-[#808080]">{author_name}</p>
          <Rating
            name="half-rating-read"
            value={rating}
            precision={0.5}
            readOnly
          />
        </div>
        <div className="flex items-center justify-between ">
          <p className="font-bold text-xl">{name}</p>
          <p className="text-black font-semibold ">{category}</p>
        </div>

        <Button
          className="bg-black text-white py-1 px-2 md:py-2 md:px-5  text-sm md:text-base w-full rounded-lg font-bold "
          onClick={() => navigate(`/book/${_id}`)}
        >
          Details
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
