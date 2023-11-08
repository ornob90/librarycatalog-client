import React, { useContext, useState } from "react";
import Button from "../../components/Shared/Button";
import Container from "../../components/shared/Container";
import Input from "../../components/shared/Input";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { updateProfile } from "firebase/auth";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import signupAnimation from "../../assets/animation/book2.json";
import Lottie from "react-lottie";
import Loading from "../../components/shared/Loading";

const SignUp = () => {
  const { signUpMethod } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: signupAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    if (password.length < 6) {
      setErrorMsg("Password Length Must Be More Then 6 Characters!!");
      return;
    }

    if (/^[^A-Z]*$/.test(password)) {
      setErrorMsg("Password must contain atleast one capital letter");
      return;
    }

    if (/^[a-zA-Z0-9\s]*$/.test(password)) {
      setErrorMsg("Password must contain a special character");
      return;
    }
    setLoading(true);

    e.target.email.value = "";
    e.target.password.value = "";
    e.target.name.value = "";
    e.target.photo.value = "";

    signUpMethod(email, password)
      .then((res) => {
        setErrorMsg("");
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        });

        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }
        setLoading(false);
        toast.success("You have successfully signed up!");
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.message);
        console.log(err);
      });
  };

  return (
    <div className="text-[#4A4A4A]  min-h-screen flex justify-center items-center lg:grid  lg:grid-cols-5 text-sm ml-[5%]">
      <div className="flex flex-col justify-center col-span-2 mx-auto w-[90%] sm:w-[70%] md:w-[50%] lg:w-3/4 ">
        <h3 className="dark:text-dark-text text-[#151515] text-3xl font-bold">
          Join Us Today!
        </h3>
        <p className="dark:text-dark-accent pt-2">
          Start your journey with us and be part of our community
        </p>
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-4 mt-8 dark:text-dark-text"
        >
          <div>
            <p className="pb-2">User</p>

            <Input name="name" placeholder="Enter your name..." />
          </div>
          <div>
            <p className="pb-2">Photo URL</p>

            <Input name="photo" placeholder="Enter Photo Url..." />
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
          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
          <div className="flex items-center justify-between">
            <Button className="px-4 py-2 font-medium text-white bg-black rounded-sm dark:text-dark-mode dark:bg-dark-text">
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
      <div className="hidden h-full col-span-3 lg:flex lg:bg-black justify-center items-center">
        <Lottie options={defaultOptions} height={450} width={350} />
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default SignUp;
