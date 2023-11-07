import React from "react";
import Container from "../../components/shared/Container";
import { Rating } from "@mui/material";
import Button from "../../components/Shared/Button";
import BorrowedForm from "../../components/Form/BorrowedForm";
import { useNavigate, useParams } from "react-router-dom";
import useGet from "../../hooks/useGet";

const BookDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data: book, isLoading } = useGet(["BookDetails", id], `/book/${id}`);

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

  console.log(rating);

  return (
    <Container className="min-h-screen pt-[33%] sm:pt-[28%]   md:pt-[15%] lg:pt-[12%] mb-14">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0">
        <div className="md:col-span-3 ">
          <img
            src={image}
            alt={name}
            className="mx-auto w-[180px] sm:w-[250px] lg:w-[300px] "
          />
        </div>

        <div className="md:col-span-2 flex flex-col  gap-4">
          <div>
            <p className="text-[#808080] font-bold">{author_name}</p>
            <h1 className="font-bold text-3xl my-3 ">{name}</h1>
            <p>
              <span className="text-xl font-semibold">{quantity}</span>{" "}
              available
            </p>
          </div>
          <div className="flex flex-col gap-3 border min-h-[25%]">
            <p className="text-sm text-gray-500 p-4 w-[80%] rounded-lg">
              {short_description}
            </p>
          </div>
          <div className="border rounded-md p-4 w-full  h-[35%] flex flex-col justify-evenly gap-5">
            <div className="flex justify-between items-center">
              <Rating
                name="half-rating-read"
                value={parseInt(rating)}
                precision={0.5}
                readOnly
              />
              <p className="font-bold text-xl">{category}</p>
            </div>
            <div className="flex justify-between w-full">
              <Button
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                className="border border-black font-semibold w-2/5 py-2"
              >
                Borrow
              </Button>
              <dialog id="my_modal_1" className="modal">
                <BorrowedForm book={book} />
              </dialog>

              <Button
                onClick={() => navigate("/read/1")}
                className="bg-black w-2/5 text-white font-semibold"
              >
                Read
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookDetail;
