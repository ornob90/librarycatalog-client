import React, { useEffect, useState } from "react";
import Container from "../../components/shared/Container";
import Button from "../../components/Shared/Button";
import AllBookCard from "../../components/Card/AllBookCard";
import useGet from "../../hooks/useGet";
import useAuth from "../../hooks/useAuth";

const AllBooks = () => {
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState(false);
  const { user } = useAuth();
  const size = 5;

  const { data: numOfBooks, isLoading: numOfBookLoad } = useGet(
    ["NumOfBooks"],
    "/numOfBooks"
  );

  const { data: allBooks, isLoading: booksLoad } = useGet(
    ["BooksByPage", page],
    `/books?page=${page}&size=${size}`
  );

  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(allBooks);
  }, [allBooks, filter]);

  useEffect(() => {
    if (filter) {
      setBooks(books?.filter((book) => book.quantity > 0));
    }
  }, [filter]);

  const { totalCount: count, availableCount } = numOfBooks || {};
  const numOfPages = Math.ceil(count / size) || 3;
  // console.log(numOfPages);
  const pages = [...Array(numOfPages).keys()];

  return (
    <Container className="pt-[35%] md:pt-[15%] lg:pt-[10%] mb-16">
      <div className="flex flex-col md:flex-row justify-center md:justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl sm:text-3xl font-bold ">
            Complete Book Catalog
          </h2>
          <p className="text-[#808080] text-sm ">
            <span className="mr-4">
              <span className="font-bold text-black text-lg">
                {count || "..."}
              </span>{" "}
              Total{" "}
            </span>
            <span className="font-bold text-black text-lg">
              {availableCount || "..."}
            </span>{" "}
            Available
          </p>
          <div className="flex  gap-4 items-center">
            <div className="hidden md:block h-[30px] w-[30px] rounded-full border border-black">
              <img
                src={user?.photoURL}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="hidden md:block font-semibold">{user?.displayName}</p>
          </div>
        </div>

        <div className="flex justify-end flex-col">
          <Button
            onClick={() => setFilter(!filter)}
            className={`border border-gray-300 px-6 py-1 rounded-lg  duration-300 font-semibold ${
              filter
                ? "bg-black text-white hover:bg-white hover:text-black"
                : "hover:bg-black hover:text-white bg-white text-black"
            }`}
          >
            {filter ? "Filter All" : "Filter Available"}
          </Button>
        </div>
      </div>
      <hr className="mt-4 border border-gray-300" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-4">
        {books?.map((book) => (
          <AllBookCard key={book._id} book={book} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 sm:gap-8 mt-20">
        {pages?.map((value) => (
          <div
            key={value}
            onClick={() => setPage(value)}
            className={`w-[25px] sm:w-[30px] h-[25px] sm:h-[30px] border border-black rounded-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white duration-300 ${
              page === value
                ? "bg-black text-white hover:bg-black hover:text-white"
                : ""
            }`}
          >
            {value + 1}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AllBooks;
