import React, { useEffect, useState } from "react";
import Container from "../../components/shared/Container";
import Button from "../../components/Shared/Button";
import BorrowCard from "../../components/Card/BorrowCard";
import useAuth from "../../hooks/useAuth";
import useGet from "../../hooks/useGet";
import getTodayDate from "../../utilities/getTodayDate";

const Borrowed = () => {
  const { user } = useAuth();
  const { email, displayName: userName } = user || {};

  const [activeCategory, setActiveCategory] = useState("All");
  const [booksToShow, setBooksToShow] = useState([]);

  const { data: categories, isLoading: categoryLoad } = useGet(
    ["BorrowedCategories"],
    "/categories-name"
  );

  const { data: borrowedBooks, isLoading: borrowedLoad } = useGet(
    ["BorrowedBooksByUserEmail", email],
    `/borrowed?email=${email}`
  );

  useEffect(() => {
    setBooksToShow(borrowedBooks);
  }, [borrowedBooks]);

  // console.log(borrowedBooks);

  useEffect(() => {
    // console.log(activeCategory);
    if (activeCategory === "All") {
      setBooksToShow(borrowedBooks);
    } else {
      setBooksToShow(
        borrowedBooks?.filter((book) => book.category === activeCategory)
      );
    }
  }, [activeCategory, borrowedBooks]);

  const handleDuplicateBorrow = () => {};

  return (
    <Container className="pt-[28%] md:pt-[10%] w-[80%] md:w-[60%]">
      <div className="flex flex-row justify-center md:justify-between items-start w-full">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-[130px] h-[130px] border border-black rounded-full">
            <img
              src={user?.photoURL}
              alt=""
              className="w-full h-full object-cover rounded-full border dark:border-white "
            />
          </div>
          <p className="text-3xl font-bold dark:text-dark-text">
            {user?.displayName[0].toUpperCase() +
              user?.displayName.substr(1).toLowerCase()}
          </p>
        </div>
        <Button className="dark:border-dark-text dark:text-dark-text border border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white duration-300 font-semibold hidden md:block">
          Explore
        </Button>
      </div>

      <div className="my-16">
        <div className="flex items-center justify-evenly md:justify-start gap-8 md:gap-10 text-medium font-medium">
          {categories
            ? [{ name: "All", _id: 12341243 }, ...categories].map(
                ({ name, _id }) => (
                  <p
                    key={_id}
                    className={`pb-2 text-sm md:text-base cursor-pointer ${
                      name === "All" ? "w-[40px]" : ""
                    } text-center ${
                      activeCategory === name ? "border-b-2 border-black" : ""
                    } dark:text-dark-text`}
                    onClick={() => setActiveCategory(name)}
                  >
                    {name || "..."}
                  </p>
                )
              )
            : [0, 1, 2, 3, 4, 5].map((value) => (
                <p
                  key={value}
                  className={`pb-2 text-sm md:text-base cursor-pointer  text-center `}
                >
                  ...
                </p>
              ))}
        </div>
        <hr className=" border border-gray-200" />
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {booksToShow?.map((book) => (
          <BorrowCard
            key={book?._id}
            book={book}
            handleDuplicateBorrow={handleDuplicateBorrow}
          />
        ))}
      </div>
    </Container>
  );
};

export default Borrowed;
