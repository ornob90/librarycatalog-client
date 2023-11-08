import React from "react";
import Container from "../../components/shared/Container";
import BookForm from "../../components/Form/BookForm";
import UpdateAddHeader from "../../components/shared/UpdateAddHeader";

const AddBook = () => {
  return (
    <Container className="w-[60%] pt-[28%] md:pt-[15%] lg:pt-[10%]">
      <UpdateAddHeader />
      <div className="mb-16 py-8 md:py-10 border bg-gray-200 rounded-lg w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
        <BookForm method="POST" />
      </div>
    </Container>
  );
};

export default AddBook;
