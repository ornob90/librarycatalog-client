import React from "react";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import BookCard from "../../components/Card/BookCard";

const BookByCategory = () => {
  return (
    <div className="mb-14">
      <div className="bg-gray-200 pt-[25%] sm:pt-[20%] lg:pt-[5%] ">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 h-max">
            <div
              className="lg:col-span-3 flex flex-col gap-4 
   justify-center text-center md:text-left"
            >
              <h3 className="font-medium text-[#808080] text-md sm:text-xl md:text-md lg:text-xl">
                Explore the Past
              </h3>
              <h1 className="font-bold text-3xl sm:text-4xl md:text-3xl lg:text-5xl">
                Historical Chronicles
              </h1>
              <p className="text-[#808080] text-[13px] w-3/4 mx-auto md:m-0 md:w-2/4 text-center md:text-left">
                "Immerse yourself in rich historical accounts and captivating
                stories within our History book collection."
              </p>
            </div>
            <div className="h-[300px] lg:col-span-2 flex flex-col justify-center">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-[80%] object-cover w-full"
              />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="text-center text-2xl md:text-4xl font-bold my-10">
          <h1>Discover You Books</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%] mx-auto">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </Container>
    </div>
  );
};

export default BookByCategory;
