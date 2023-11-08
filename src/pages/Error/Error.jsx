import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Shared/Button";
import Container from "../../components/shared/Container";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="mx-auto flex flex-col justify-center items-center gap-6">
        <h1 className="font-extrabold text-black text-6xl lg:text-8xl">
          4<span className="text-orange-500">0</span>4
        </h1>
        <h3 className="text-md lg:text-xl text-black font-bold">
          PAGE NOT FOUND
        </h3>
        <p className="text-sm lg:text-base w-[60%] text-center">
          The page you are looking for might have been removed or had its name
          changed or is temporarily unavailable
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-white text-black  py-2 px-4  duration-[.3s] text-sm lg:text-base border border-black hover:bg-black hover:text-white "
        >
          GO TO HOMEPAGE
        </Button>
      </div>
    </div>
  );
};

export default Error;
