import React from "react";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../components/Card/CategoryCard";
import useGet from "../../hooks/useGet";

const Categories = () => {
  const {
    data: book_categories,
    isLoading,
    isFetching,
  } = useGet(["book_categories"], "/categories");

  console.log(book_categories);

  return (
    <div className="dark:bg-dark-mode pb-20">
      <Container className=" ">
        <SectionHeader
          header="Discover Your Genre"
          subHeader="Genre Explorer"
          desc="Explore a World of Varied Categories. Find Your Next Favorite Read."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {book_categories?.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
