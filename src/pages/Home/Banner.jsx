import React from "react";
import Container from "../../components/shared/Container";
import Slider from "../../components/shared/Slider";

const Banner = () => {
  const images = [
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="min-h-[500px] h-[70%] bg-gray-100 pt-[25%] sm:pt-[15%] md:pt-[7%] dark:bg-dark-bg-gray">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 h-full">
        <div
          className="lg:col-span-3 flex flex-col gap-4 
         justify-center text-center md:text-left"
        >
          <h3 className="font-medium text-[#808080] text-md sm:text-xl md:text-md lg:text-xl dark:text-dark-accent">
            Uncover Every Page of Knowledge.
          </h3>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-3xl lg:text-5xl dark:text-dark-text">
            The Catalog Corner: <br /> Discover Reads
          </h1>
          <p className="text-[#808080] text-[13px] w-3/4 mx-auto md:m-0 md:w-2/4 text-center md:text-left dark:text-dark-accent">
            "Discover a vast catalog of organized reads. Find diverse literature
            at your fingertips. Explore, connect, and delve into the world of
            books."
          </p>
        </div>
        <div className="h-full lg:col-span-2 flex flex-col justify-center ">
          {/* <img
            // src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src="https://www.breakthrough.org.hk/wp-content/gallery/e4bd90e695a6e5ba97/Homepage_slider-photo_BTG.jpg"
            alt=""
            className="h-[90%] object-cover w-full"
          /> */}
          <Slider images={images} loading={false} />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
