import Drawer from "react-modern-drawer";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineUser } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { IoEarthSharp } from "react-icons/io5";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import EmailVerify from "./EmailVerify";

const SignUP = ({ toggleDrawerSignUP }) => {
  const [isOpenEmailVerify, setIsOpenEmailVerify] = React.useState(false);
  const toggleDrawerEmailVerify = () => {
    setIsOpenEmailVerify((prevState) => !prevState);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [inputType, icon] = usePasswordToggle();

  const onSubmit = (data) => {
    toggleDrawerEmailVerify();
  };

  return (
    <>
      <div className="card h-full  bg-accent backdrop-blur-xl bg-opacity-40">
        <div className="card-body px-20">
          <h2 className="text-3xl font-bold mb-3">Forgot Password ?</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <div className="flex gap-5">
                <div className="form-control w-1/2 ">
                  <label className="ml-3 mb-2">First Name</label>
                  <div className="relative">
                    <AiOutlineUser className="absolute left-3 top-3 text-xl"></AiOutlineUser>
                    <input
                      type="text"
                      placeholder="eg. celestin"
                      className="p-2 pl-10 bg-white border-2 border-secondary focus:outline-primary  w-full  rounded-xl"
                    />
                  </div>
                </div>

                <div className="form-control w-1/2 ">
                  <label className="ml-3 mb-2">Last Name</label>
                  <div className="relative">
                    <AiOutlineUser className="absolute left-3 top-3 text-xl"></AiOutlineUser>
                    <input
                      type="text"
                      placeholder="eg. dsouza"
                      className="p-2 pl-10 bg-white border-2 border-secondary focus:outline-primary  w-full  rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="ml-3 mb-2">Contact Number</label>
              <div className="form-control w-full  relative">
                <HiOutlineMail className="absolute left-3 top-3 text-xl"></HiOutlineMail>
                <input
                  type="number"
                  placeholder="eg. 9870085422"
                  className="p-2 pl-10 bg-white border-2 border-secondary focus:outline-primary  w-full  rounded-xl"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="ml-3 mb-2">Email Adress</label>
              <div className="form-control w-full  relative">
                <HiOutlineMail className="absolute left-3 top-3 text-xl"></HiOutlineMail>
                <input
                  type="email"
                  placeholder="eg.celestine@gmail.com"
                  className="p-2 pl-10 bg-white border-2 border-secondary focus:outline-primary  w-full  rounded-xl"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="ml-3 mb-2">Country</label>
              <div className="form-control w-full  relative">
                <IoEarthSharp className="absolute left-3 top-3 text-xl"></IoEarthSharp>
                <select class=" p-2 pl-10 bg-white border-2 border-secondary focus:outline-primary  w-full  rounded-xl">
                  <option disabled selected>
                    Select Country
                  </option>
                  <option>Bangladesh</option>
                  <option>India</option>
                  <option>Nepal</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex gap-5">
                <div className="form-control w-1/2 ">
                  <label className="ml-3 mb-2">Password</label>
                  <div className="relative">
                    <BiLock className="absolute left-3 top-3 text-xl"></BiLock>
                    <input
                      type={inputType}
                      placeholder="* * * * * * *"
                      className="p-2 pl-10 bg-white border-2 border-secondary  focus:outline-primary w-full  rounded-xl"
                    />
                    <span className="absolute top-4 right-3 cursor-pointer text-xl">{icon}</span>
                  </div>
                </div>

                <div className="form-control w-1/2 ">
                  <label className="ml-3 mb-2">Confirm Password</label>
                  <div className="relative">
                    <BiLock className="absolute left-3 top-3 text-xl"></BiLock>
                    <input
                      type={inputType}
                      placeholder="* * * * * * *"
                      className="p-2 pl-10 bg-white border-2 border-secondary  focus:outline-primary w-full  rounded-xl"
                    />
                    <span className="absolute top-4 right-3 cursor-pointer text-xl">{icon}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-10 mb-1">
              <div className="flex items-center">
                <input type="radio" name="radio-3" class="radio radio-secondary" checked />
                <label className="ml-3 mb-2 ">Freelancer</label>
              </div>
              <div className="flex items-center">
                <input type="radio" name="radio-3" class="radio radio-secondary" />
                <label className="ml-3 mb-2">Freelancer</label>
              </div>
            </div>
            <p>By signing up you agree to ABC Terms of Service & Privacy policy</p>

            <input className="btn w-full btn-primary text-white mt-2" type="submit" value="Login" />
          </form>
        </div>
      </div>
      <Drawer size="100%" open={isOpenEmailVerify} onClose={toggleDrawerEmailVerify} direction="left" className="">
        <EmailVerify toggleDrawerEmailVerify={toggleDrawerEmailVerify}></EmailVerify>
      </Drawer>
    </>
  );
};

export default SignUP;
