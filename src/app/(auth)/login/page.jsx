"use client";
import { authClient } from "@/lib/auth-client";
import { toast } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();


  const handleRegisterWithGoogle = async () => {
    const { data, error, u } = await authClient.signIn.social({
      provider: "google",
    });
    if (error) toast.danger(error.message);
    if(data) {
        toast.success("Login successful");
        redirect('/');
    }
  };


  const handleLogin = async (data) => {
    const { email, password } = data;

    const { data: loginUserData , error } = await authClient.signIn.email({
        email: email, // required
        password: password, // required
        rememberMe: true,
        callbackURL: "/",
    });
    console.log(loginUserData, error);

    if(error){
        toast.danger(error.message);
    }

    if(loginUserData){
        toast.success("Login successful");
    }
  };

  
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="card bg-base-100 w-full max-w-sm shadow-2xl shadow-red-300"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h1 className="font-bold text-2xl text-center mt-4 bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          Login to your account
        </h1>
        <div className="flex justify-center">
          <button className="btn w-10/12 btn-outline hover:bg-linear-to-r from-red-400 to-orange-400 hover:text-white" onClick={handleRegisterWithGoogle}>
            <FaGoogle />
            Login with Google
          </button>
        </div>
        <div className="divider">OR</div>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              {...register("email")}
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              {...register("password")}
              required
            />
            <p>
              Create a new account?{" "}
              <Link className="text-blue-400" href={"/register"}>
                Register
              </Link>
            </p>
            <button className="btn bg-linear-to-r from-red-400 to-orange-400 text-white mt-4">
              Login
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
