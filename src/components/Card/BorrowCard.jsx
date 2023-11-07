import React from "react";
import Button from "../Shared/Button";

const BorrowCard = ({ book }) => {
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
    returnDate,
    borrowedDate,
  } = book || {};

  return (
    <div className="flex flex-col p-4  border shadow-sm rounded-lg">
      <div className=" flex justify-center items-center">
        <img
          src="https://m.media-amazon.com/images/I/81XCRGlex6L._AC_UF1000,1000_QL80_.jpg"
          alt=""
          className="h-[300px] md:h-[200px]"
        />
      </div>
      <div className="mt-8 flex flex-col gap-2">
        <p className="text-[#808080] text-sm">{category}</p>
        <h3 className="font-bold text-lg">
          {name.split(" ").slice(0, 4)}{" "}
          <span className="text-[#808080] text-sm">
            {name.split(" ").length > 4 ? ". . ." : ""}
          </span>
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-black text-white mt-4 text-md">
            <p className="text-gray-200 font-medium pb-1">Borrowed</p>
            <p className="font-bold">{borrowedDate}</p>
          </div>
          <div className="p-2 bg-black text-white mt-4 text-md">
            <p className="text-gray-200 font-medium pb-1">Return</p>
            <p className="font-bold">{returnDate}</p>
          </div>
        </div>
        <Button className="border border-black py-2 mt-2 hover:bg-black hover:text-white">
          Return
        </Button>
      </div>
    </div>
  );
};

export default BorrowCard;
