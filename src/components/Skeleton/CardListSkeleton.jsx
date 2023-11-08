import React from "react";
import CardSkeleton from "./CardSkeleton";

const CardListSkeleton = ({ col }) => {
  return (
    <div
      className={`-z-10 my-16 grid grid-cols-1 md:grid-cols-2 ${
        col === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      } gap-2`}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
        <CardSkeleton key={value} />
      ))}
    </div>
  );
};

export default CardListSkeleton;
