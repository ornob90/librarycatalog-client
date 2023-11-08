import { useState } from "react";
import Button from "../../components/Shared/Button";
import Container from "../../components/shared/Container";
import Input from "../../components/shared/Input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import loginAnimation from "../../assets/animation/book.json";
import Lottie from "react-lottie";
import Loading from "../../components/shared/Loading";

const Login = () => {
  const { signInMethod, googleSignInMethod } = useAuth();

  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.email.value = "";
    e.target.password.value = "";

    signInMethod(email, password)
      .then((res) => {
        setErrorMsg("");

        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }

        setLoading(false);
        toast.success("You have successfully signed in!!");
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.message);
        console.log(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);

    googleSignInMethod()
      .then((res) => {
        setErrorMsg("");
        toast.success("You have successfully signed in!!");
        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.message);
        console.log(err);
      });
  };

  return (
    <div className="text-[#4A4A4A]  h-screen min-h-[500px] flex justify-center items-center lg:grid  lg:grid-cols-5 text-sm ml-[5%] ">
      <div className="flex flex-col justify-center col-span-2 mx-auto w-[90%] sm:w-[70%] md:w-[50%] lg:w-3/4">
        <h3 className="text-[#151515] text-3xl font-bold">Hey, welcome back</h3>
        <p className="pt-2">Good to see you again!</p>
        <form onSubmit={handleSignIn} className="flex flex-col gap-4 mt-8">
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
          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}

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

        <div
          onClick={handleGoogleSignIn}
          className="border bg-[#1B73E8] text-white py-2 text-center mt-4 font-semibold flex justify-center items-center gap-4 rounded-md active:scale-95 duration-[.3s] cursor-pointer"
        >
          <FcGoogle className="text-xl" />
          Sign In With Google
        </div>
      </div>
      <div className="hidden h-full col-span-3 lg:flex lg:bg-black  justify-center items-center ">
        <Lottie options={defaultOptions} height={450} width={300} />
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default Login;
