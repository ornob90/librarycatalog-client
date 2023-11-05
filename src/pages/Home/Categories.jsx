import React from "react";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const book_categories = [
    {
      id: 1,
      name: "Thriller",
      img: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-151584,resizemode-75,msid-101785727/top-trending-products/books/15-psychological-thriller-books.jpg",
    },
    {
      id: 2,
      name: "History",
      img: "https://th-thumbnailer.cdn-si-edu.com/EmucmTGSXIdWtEJkJlz_2g68Fd8=/800x600/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/38/1f/381fad60-cd30-4c5a-b0eb-3a7cf9217031/best-history-books-2016jpg__800x600_q85_crop.jpg",
    },
    {
      id: 3,
      name: "Sci-Fi",
      img: "https://i.insider.com/60dc9f1ccad1220011caf444?width=700",
    },
    {
      id: 4,
      name: "Novel",
      img: "https://thumbs.dreamstime.com/b/latest-english-famous-novels-sale-library-book-store-bucharest-romania-may-79743982.jpg",
    },
  ];

  const navigate = useNavigate();

  return (
    <Container>
      <SectionHeader
        header="Discover Your Genre"
        subHeader="Genre Explorer"
        desc="Explore a World of Varied Categories. Find Your Next Favorite Read."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        {book_categories.map(({ id, img, name }) => (
          <div
            key={id}
            className="bg-gray-100 h-[300px] rounded-lg shadow-lg active:scale-95 duration-300 hover:scale-[.98]"
            onClick={() => navigate(`/books/${name}`)}
          >
            <img
              src={img}
              alt=""
              className="h-[80%] w-full object-cover rounded-t-lg"
            />
            <div className="p-4 flex justify-between items-center">
              <p className="text-xl font-bold">{name}</p>
              <p className="w-[30px] h-[30px] border border-black rounded-full flex justify-center items-center bg-black text-white">
                <BsBoxArrowInUpRight />
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
