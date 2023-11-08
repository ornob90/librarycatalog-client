import React from "react";
import Container from "../../components/shared/Container";
import Button from "../../components/Shared/Button";
import Lottie from "react-lottie";
import reviewAnimation from "../../assets/animation/reviews.json";
import SectionHeader from "../../components/shared/SectionHeader";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      review:
        "The library's collection is vast and diverse, offering a plethora of genres to explore. Absolutely fantastic place!",
      name: "Emily Parker",
      bio: "Book Enthusiast",
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      review:
        "I was amazed by the incredible selection available here. It's a paradise for any voracious reader like me.",
      name: "Alex Johnson",
      bio: "Voracious Reader",
      img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      review:
        "This is the best library I've come across. The variety of books is outstanding. Highly recommended.",
      name: "Sarah Chen",
      bio: "Literature Lover",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Additional testimonials can be added here
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reviewAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="dark:bg-dark-mode">
      <div className="h-auto pb-20 max-w-[1440px] mx-auto">
        <div className="bg-gray-100 dark:bg-dark-secondary">
          {/* <SectionHeader
          subHeader="Reader Voices"
          header="Our Readers Speak"
          desc="Genuine Experiences, Real Testimonials"
        /> */}

          <div className="pt-15 md:pt-20 mb-5 md:mb-10 mx-auto flex flex-col  justify-center items-center gap-4 text-center">
            <h3 className=" font-semibold text-lg md:text-xl dark:text-dark-accent">
              Reader Voices
            </h3>

            <h1 className=" text-3xl md:text-5xl font-bold dark:text-dark-text">
              Our Readers Speak
            </h1>

            <p
              className={`w-[90%] md:w-[70%]  text-center  text-sm md:text-base dark:text-dark-accent`}
            >
              Genuine Experiences, Real Testimonials
            </p>
          </div>

          <Container className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 h-full relative pb-20">
            <div
              className="lg:col-span-3 flex flex-col gap-4 
         justify-center text-center md:text-left"
            >
              <h3 className="font-medium text-[#808080] text-md text-sm dark:text-dark-accent">
                Testimonials
              </h3>
              <h1 className="font-bold text-3xl sm:text-4xl md:text-3xl lg:text-5xl dark:text-dark-text">
                Reader Reviews
              </h1>
              <p className="text-[#808080] text-[13px] w-3/4 mx-auto md:m-0 lg:w-2/4 text-center md:text-left dark:text-dark-accent">
                "Discover what our readers have to say. Explore genuine
                testimonials and experiences shared by our book-loving
                community."
              </p>
            </div>
            <div className="h-full lg:col-span-2 flex  justify-evenly">
              <Lottie options={defaultOptions} height={250} width={250} />
            </div>
          </Container>
        </div>
        <div className="w-[70%] -mt-[10%] lg:-mt-[5%] mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-4 pb-12">
          {testimonials.map(({ id, name, review, bio, img }) => (
            <div
              key={id}
              className="bg-black text-white p-6 flex flex-col gap-4 rounded-lg dark:bg-gray-200 dark:text-dark-mode"
            >
              <p className="font-bold text-4xl">"</p>
              <p className="text-lg">{review}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p>
                    <span>@</span> {name}
                  </p>
                  <p className="text-sm text-[#808080]">{bio}</p>
                </div>
                <div className="w-[40px] h-[40px] border-2 border-white dark:border-dark-mode rounded-full">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
