import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { BiLock } from "react-icons/bi";
import usePasswordToggle from "../../hooks/usePasswordToggle";

const Login = () => {
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [inputType, icon] = usePasswordToggle();


  const onSubmit = (data) => {};

  const handleResetPassword = () => {};

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card w-96 shadow-xl border  bg-accent backdrop-blur-xl bg-opacity-40">
        <div className="card-body">
          <h2 className="text-3xl font-bold mb-10">Login as</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div>
              <label className="ml-3 mb-2">Email Adress</label>
              <div className="form-control w-full max-w-xs relative">
                <HiOutlineMail className="absolute left-3 top-4 text-xl"></HiOutlineMail>
                <input
                  type="email"
                  placeholder="eg.celestine@gmail.com"
                  className="p-3 pl-10 bg-white border-2 border-secondary focus:outline-primary  w-full max-w-xs rounded-xl"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please provide your email",
                    },
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                  {errors.email?.type === "pattern" && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                </label>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="ml-3 mb-2">Password</label>
              <div className="form-control w-full max-w-xs relative">
                <BiLock className="absolute left-3 top-4 text-xl"></BiLock>
                <input
                  type={inputType}
                  placeholder="* * * * * * *"
                  className="p-3 pl-10 bg-white border-2 border-secondary  focus:outline-primary w-full max-w-xs rounded-xl"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Please enter your password",
                    },
                  })}
                />
                <span className="absolute top-4 right-3 cursor-pointer text-xl">{icon}</span>
                <label className="label">
                  {errors.password?.type === "required" && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
                </label>
                <div className="text-accent text-right  cursor-pointer text-xs hover:underline mb-5 " onClick={handleResetPassword}>
                  Forgot Password?
                </div>
              </div>
            </div>

            <input className="btn w-full btn-primary text-white" type="submit" value="Login" />
          </form>

          <p className="block lg:hidden text-center mt-2 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-secondary link-hover">
              Register Now{" "}
            </Link>
          </p>

          <div className="divider">OR</div>

          <div>
            <h1 className="text-center">New User Account ? <Link className="font-bold text-secondary link-hover" to='/signup'>Sign Up</Link></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
