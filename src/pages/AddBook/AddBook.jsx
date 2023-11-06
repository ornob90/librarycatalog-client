import React from "react";
import Container from "../../components/shared/Container";
import { MdAddToPhotos } from "react-icons/md";
import BookForm from "../../components/Form/BookForm";

const AddBook = () => {
  return (
    <Container className="w-[60%] pt-[28%] md:pt-[15%] lg:pt-[10%]">
      <div className="flex flex-row items-center gap-4 mb-5  w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
        <p className="font-bold text-3xl ">Entry Your Book</p>
        <MdAddToPhotos className="text-2xl" />
      </div>
      <div className="mb-16 py-8 md:py-10 border bg-gray-200 rounded-lg w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
        <BookForm />
      </div>
    </Container>
  );
};

export default AddBook;
