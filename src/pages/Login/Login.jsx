import React from "react";
import Button from "../../components/Shared/Button";
import Container from "../../components/shared/Container";
import Input from "../../components/shared/Input";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="text-[#4A4A4A]  h-screen min-h-[400px] flex justify-center items-center lg:grid  lg:grid-cols-5 text-sm ml-[5%]">
      <div className="flex flex-col justify-center col-span-2 mx-auto w-[90%] sm:w-[70%] md:w-[50%] lg:w-3/4">
        <h3 className="text-[#151515] text-3xl font-bold">Hey, welcome back</h3>
        <p className="pt-2">Good to see you again!</p>
        <form className="flex flex-col gap-4 mt-8">
          <div>
            <p className="pb-2">Email address</p>

            <Input name="email" placeholder="Enter you email..." />
          </div>

          <div>
            <div className="flex justify-between mt-2">
              <p className="pb-2">Password</p>
              <p className="underline text-[12px] active:scale-95 duration-300 cursor-pointer">
                Forgot password?
              </p>
            </div>
            <Input
              name="password"
              placeholder="Enter your password..."
              type="password"
            />
          </div>

          <div className="flex justify-between">
            <Button className="px-4 py-2 font-medium text-white bg-black rounded-sm">
              Sign In
            </Button>
            <p
              onClick={() => navigate("/signup")}
              className="underline text-[12px] active:scale-95 duration-300 cursor-pointer"
            >
              Or sign up
            </p>
          </div>
        </form>

        <div className="border bg-[#1B73E8] text-white py-2 text-center mt-4 font-semibold flex justify-center items-center gap-4 rounded-md active:scale-95 duration-[.3s] cursor-pointer">
          <FcGoogle className="text-xl" />
          Sign In With Google
        </div>
      </div>
      <div className="hidden h-full col-span-3 lg:block lg:bg-black"></div>
    </div>
  );
};

export default Login;
