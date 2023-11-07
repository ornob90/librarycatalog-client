import React, { useState } from "react";
import Button from "../Shared/Button";
import toast from "react-hot-toast";
import usePost from "../../hooks/usePost";

const BorrowedForm = ({ book }) => {
  const [date, setDate] = useState("");

  // const {mutateAsync} = usePost("")

  // console.log(date.toString());

  const handleSubmit = (e) => {
    // e.preventDefault();
    // toast.success("You have borrowed this book successfully!");
  };
  return (
    <form
      onSubmit={handleSubmit}
      method="dialog"
      className="w-[90%] sm:w-[400px] lg:w-[500px]  bg-white flex flex-col gap-5 p-5 "
    >
      <label htmlFor="date" className="font-bold text-lg">
        Return Date
      </label>
      <input
        type="date"
        name="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="focus:outline-none border py-4 px-2"
      />
      <button className="border border-black py-2 mt-2 bg-black text-white hover:bg-white hover:text-black">
        Submit
      </button>
    </form>
  );
};

export default BorrowedForm;
