import React from "react";
import Button from "../Shared/Button";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AllBookCard = ({ book }) => {
  const {
    _id,
    image,
    name,
    quantity,
    author_name,
    category,
    short_description,
    rating,
    // content,
  } = book || {};

  const navigate = useNavigate();

  return (
    <div className="flex flex-col  border shadow-sm rounded-lg justify-between dark:bg-[#e7e7e7]">
      <div className=" p-4 flex justify-center items-center">
        <img src={image} alt={name} className="h-[300px] md:h-[200px]" />
      </div>
      <div className="p-4  dark:bg-dark-mode flex flex-col gap-2 mt-10">
        <p className="font-bold text-xl text-clip dark:text-dark-text">
          {name.split(" ").slice(0, 4)}{" "}
          <span className="text-[#808080] text-sm">
            {name.split(" ").length > 4 ? ". . ." : ""}
          </span>
        </p>
        <div className="flex justify-between items-center text-sm text-[#808080]">
          <p>{category}</p>
          <p>{author_name}</p>
        </div>
        <Rating
          name="half-rating-read"
          value={parseInt(rating)}
          precision={0.5}
          readOnly
        />
        <Button
          type="button"
          onClick={() => navigate(`/update-book/${_id}`)}
          className="dark:bg-dark-text dark:text-dark-mode border border-black py-2 mt-2 bg-black text-white hover:bg-white hover:text-black"
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default AllBookCard;
