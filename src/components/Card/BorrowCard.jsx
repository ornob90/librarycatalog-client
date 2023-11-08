import React from "react";
import Button from "../Shared/Button";
import useDelete from "../../hooks/useDelete";
import useAuth from "../../hooks/useAuth";
import usePut from "../../hooks/usePut";
import toast from "react-hot-toast";
import useGet from "../../hooks/useGet";

const BorrowCard = ({ book, handleDuplicateBorrow }) => {
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
    bookId,
    returnDate,
    borrowedDate,
  } = book || {};

  const { user } = useAuth();
  const { email } = user || {};

  const { data: bookToReturn, isLoading } = useGet(
    ["BookToReturn", bookId],
    `/book/${bookId}`
  );

  // console.log(bookToReturn);

  const { mutateAsync: deleteBorrowBook } = useDelete(
    [["BorrowedBooksByUserEmail", email]],
    `/borrowed/${book?._id}`
  );

  const { mutateAsync: updateBookQuantity } = usePut(
    [["BookDetails", book?.bookId]],
    `/book/${book?.bookId}`
  );

  const handleReturn = async () => {
    const { _id, ...bookInfo } = bookToReturn;

    const { quantity } = bookInfo;

    const quantityUpdatedBook = {
      ...bookInfo,
      quantity: quantity + 1,
    };

    // console.log(quantityUpdatedBook);

    try {
      await toast.promise(deleteBorrowBook(), {
        loading: "Returning book...",
        success: "Book returned successfully!!",
        error: "Failed to return book",
      });

      await toast.promise(updateBookQuantity(quantityUpdatedBook), {
        loading: "Updating quantity...",
        success: "Quantity updated successfully!",
        error: "Failed to update quantity",
      });
    } catch (error) {
      toast.error("Oops!! Somethings gone wrong!!");
    }
  };

  return (
    <div className="flex flex-col   border shadow-sm ">
      <div className="dark:bg-white flex justify-center items-center p-4">
        <img src={image} alt="" className="h-[300px] md:h-[200px]" />
      </div>
      <div className="p-4 mt-8 flex flex-col gap-2">
        <p className="text-[#808080] text-sm dark:text-dark-accent">
          {category}
        </p>
        <h3 className="font-bold text-lg dark:text-dark-text">
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
        <Button
          type="button"
          onClick={handleReturn}
          className="dark:bg-dark-text dark:text-dark-mode border border-black py-2 mt-2 hover:bg-black hover:text-white"
        >
          Return
        </Button>
      </div>
    </div>
  );
};

export default BorrowCard;
