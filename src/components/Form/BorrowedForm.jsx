import React, { useEffect, useState } from "react";
import Button from "../Shared/Button";
import toast from "react-hot-toast";
import usePost from "../../hooks/usePost";
import usePut from "../../hooks/usePut";
import useAuth from "../../hooks/useAuth";
import getTodayDate from "../../utilities/getTodayDate";

const BorrowedForm = ({ book }) => {
  const [date, setDate] = useState("");
  const { user } = useAuth();
  const [bookId, setBookId] = useState(null);

  useEffect(() => {
    setBookId(book?._id);
  }, [book?._id]);

  const queryKeys = [["BookDetails", book?._id]];

  const { mutateAsync: addToBorrowed } = usePost(null, "/borrowed");

  const { mutateAsync: updateBookQuantity } = usePut(
    queryKeys,
    `/book/${bookId}`
  );

  // console.log(`/book/${book?._id}`);

  // console.log(date.toString());

  const handleSubmit = async () => {
    // e.preventDefault();

    if (!date) {
      toast.error("Return date required for borrowing!");
      return;
    }

    const { _id, ...bookInfo } = book;

    const borrowedBook = {
      userName: user?.displayName,
      email: user?.email,
      borrowedDate: getTodayDate(),
      returnDate: date.replace(/-/g, "/"),
      bookId: book?._id,
      ...bookInfo,
    };

    const { quantity } = bookInfo;

    const quantityUpdatedBook = {
      ...bookInfo,
      quantity: quantity > 0 ? quantity - 1 : 0,
    };

    try {
      await toast.promise(addToBorrowed(borrowedBook), {
        loading: "Borrowing book...",
        success: "You have borrowed this book successfully!!",
        error: "Oops!! Something’s gone wrong!!",
      });

      await toast.promise(updateBookQuantity(quantityUpdatedBook), {
        loading: "Updating quantity...",
        success: "Quantity updated successfully!",
        error: "Failed to update quantity",
      });
    } catch (error) {
      console.log(error);
      toast.error("Oops!! Somethings gone wrong!!");
    }

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
