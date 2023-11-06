import React from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { _id, img, name } = category;
  const navigate = useNavigate();

  return (
    <div
      className="bg-gray-100 h-[300px] rounded-lg shadow-lg active:scale-95 duration-300 "
      onClick={() => navigate(`/books/${name}`)}
    >
      <img
        src={img}
        alt=""
        className="h-[80%] w-full object-cover rounded-t-lg"
      />
      <div className="p-4 flex justify-between items-center">
        <p className="text-xl font-bold">{name}</p>
        <p className="w-[30px] h-[30px] border border-black rounded-full flex justify-center items-center bg-black text-white">
          <BsBoxArrowInUpRight />
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
