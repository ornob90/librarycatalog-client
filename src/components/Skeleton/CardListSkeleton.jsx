import React from "react";
import CardSkeleton from "./CardSkeleton";

const CardListSkeleton = () => {
  return (
    <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
        <CardSkeleton key={value} />
      ))}
    </div>
  );
};

export default CardListSkeleton;
