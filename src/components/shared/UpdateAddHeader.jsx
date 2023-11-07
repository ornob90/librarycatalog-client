import React from "react";
import { MdAddToPhotos } from "react-icons/md";

const UpdateAddHeader = () => {
  return (
    <div className="flex flex-row items-center gap-4 mb-5  w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
      <p className="font-bold text-3xl ">Entry Your Book</p>
      <MdAddToPhotos className="text-2xl" />
    </div>
  );
};

export default UpdateAddHeader;
