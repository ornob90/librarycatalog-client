import React from "react";
import loadingAnimation from "../../assets/animation/loading.json";
import Lottie from "react-lottie";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-full min-h-screen  absolute top-[-2.2%] left-0  bg-gray-200 flex justify-center items-center">
      {/* <span className="loading loading-bars loading-lg"></span> */}
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  );
};

export default Loading;
