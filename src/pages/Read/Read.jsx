import React from "react";
import Container from "../../components/shared/Container";
import { containerClasses } from "@mui/material";
import useGet from "../../hooks/useGet";
import { useParams } from "react-router-dom";

const Read = () => {
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
    content,
  } = book || {};

  return (
    <div className="min-h-screen mb-20">
      <div className=" lg:h-[400px] bg-gray-100 pt-[30%] sm:pt-[20%] md:pt-[15%] lg:pt-[10%] dark:bg-dark-gray w-full">
        <Container className="flex flex-col md:flex-row lg:grid-cols-5 h-full w-[90%]  md:w-[80%] lg:w-[60%] pb-4 mt-10">
          <div
            className="lg:col-span-3 flex flex-col gap-4 
         justify-center  items-center md:items-start text-center md:text-left sm:w-[80%] md:w-[90%] mx-auto mb-10  "
          >
            <p className=" text-[#808080] text-md text-[12px] md:text-sm dark:text-dark-accent">
              Pages weave stories, transport minds, kindle imaginations—a
              universe in every book
            </p>
            <h1 className="font-bold text-3xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-dark-text">
              {name}
            </h1>
            <p className="text-[#808080] text-[13px] w-3/4 mx-auto md:m-0 md:w-3/4 text-center md:text-left dark:text-dark-accent">
              "{short_description}"
            </p>
          </div>

          <div className="h-full lg:col-span-2 flex  justify-center items-center w-[40%]">
            <img src={image} alt="" className=" w-[80%] pb-16" />
          </div>
        </Container>
      </div>
      <Container className=" md:w-[80%] lg:w-[60%] mt-20 dark:text-dark-text">
        <h1 className="text-xl font-bold mb-4">Know About This Book!!</h1>
        <p>{content}</p>
      </Container>
    </div>
  );
};

export default Read;
