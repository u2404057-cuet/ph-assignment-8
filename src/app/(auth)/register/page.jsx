'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";


const RegisterPage = () => {

    const { register, handleSubmit } = useForm();

    const handleRegister = (data) => {
      const {name, email, photo, password} = data;
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form
        className="card bg-base-100 w-full max-w-sm shadow-2xl shadow-red-300"
        onSubmit={handleSubmit(handleRegister)}
      >
        <h1 className="font-bold text-2xl text-center mt-4 bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          Register a new account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
              {...register("name")}
            />
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
            <label className="label">Photo</label>
            <input
              type="text"
              className="input"
              placeholder="Photo"
              name="photo"
              {...register("photo")}
              required
            />
            <p>
              Already have an account?{" "}
              <Link className="text-blue-400" href={"/login"}>
                Login
              </Link>
            </p>

            <button className="btn bg-linear-to-r from-red-400 to-orange-400 mt-4">Register</button>
          </fieldset>
        </div>
      </form>
        </div>
    );
};

export default RegisterPage;