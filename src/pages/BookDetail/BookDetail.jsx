import React from "react";
import Container from "../../components/shared/Container";
import { Rating } from "@mui/material";
import Button from "../../components/Shared/Button";
import BorrowedForm from "../../components/Form/BorrowedForm";
import { useNavigate } from "react-router-dom";

const BookDetail = () => {
  const navigate = useNavigate();

  return (
    <Container className="min-h-screen pt-[28%] md:pt-[10%] mb-14">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0">
        <div className="md:col-span-3 ">
          <img
            src="https://pictures.abebooks.com/isbn/9780794524784-uk.jpg"
            alt=""
            className="mx-auto"
          />
        </div>

        <div className="md:col-span-2 flex flex-col  gap-4">
          <div>
            <p className="text-[#808080] font-bold">Explore</p>
            <h1 className="font-bold text-3xl my-3 ">
              The Us borne Book of World History
            </h1>
            <p>
              <span className="text-xl font-semibold">10</span> available
            </p>
          </div>
          <div className="flex flex-col gap-3 border">
            <p className="text-sm text-gray-500 p-4 w-[80%] rounded-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              saepe, quis temporibus cumque iusto dolorum.
            </p>
          </div>
          <div className="border rounded-md p-4 w-full  h-[35%] flex flex-col justify-evenly gap-5">
            <div className="flex justify-between items-center">
              <Rating
                name="half-rating-read"
                value={4.5}
                precision={0.5}
                readOnly
              />
              <p className="font-bold text-xl">History</p>
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
                <BorrowedForm />
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
