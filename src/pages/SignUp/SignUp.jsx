import React from "react";
import Button from "../../components/Shared/Button";
import Container from "../../components/shared/Container";
import Input from "../../components/shared/Input";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="text-[#4A4A4A]  min-h-screen flex justify-center items-center lg:grid  lg:grid-cols-5 text-sm ml-[5%]">
      <div className="flex flex-col justify-center col-span-2 mx-auto w-[90%] sm:w-[70%] md:w-[50%] lg:w-3/4 ">
        <h3 className="text-[#151515] text-3xl font-bold">Join Us Today!</h3>
        <p className="pt-2">
          Start your journey with us and be part of our community
        </p>
        <form className="flex flex-col gap-4 mt-8">
          <div>
            <p className="pb-2">User</p>

            <Input name="name" placeholder="Enter your name..." />
          </div>
          <div>
            <p className="pb-2">Email address</p>

            <Input name="email" placeholder="Enter you email..." />
          </div>

          <div>
            <p className="pb-2">Password</p>

            <Input
              name="password"
              placeholder="Enter your password..."
              type="password"
            />
          </div>

          <div className="flex items-center justify-between">
            <Button className="px-4 py-2 font-medium text-white bg-black rounded-sm">
              Sign Up
            </Button>
            <p
              onClick={() => navigate("/login")}
              className="underline text-[12px] active:scale-95 duration-300 cursor-pointer"
            >
              Or sign in
            </p>
          </div>
        </form>
      </div>
      <div className="hidden h-full col-span-3 lg:block lg:bg-black"></div>
    </div>
  );
};

export default SignUp;
