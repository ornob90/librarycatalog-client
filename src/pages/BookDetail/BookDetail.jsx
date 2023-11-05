import React from "react";
import Container from "../../components/shared/Container";

const BookDetail = () => {
  return (
    <Container className="min-h-screen pt-[10%] mb-14">
      <div className="grid grid-cols-5 ">
        <div className="col-span-3 ">
          <img
            src="https://pictures.abebooks.com/isbn/9780794524784-uk.jpg"
            alt=""
            className="mx-auto"
          />
        </div>
        <div className="col-span-2"></div>
      </div>
    </Container>
  );
};

export default BookDetail;
