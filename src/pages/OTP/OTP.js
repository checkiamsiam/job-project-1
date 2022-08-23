import React from "react";
import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";

const OTP = () => {
  const {
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <>
      <div className="card max-w-md mx-auto my-5   bg-accent backdrop-blur-xl bg-opacity-40">
        <div className="card-body">
          <h2 className="text-3xl font-bold mb-5">OTP Authentication</h2>
          <p className="sm:text-xl mb-5">Please type 6 digit otp is shared on abc@gmail.com</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="ml-3 mb-2  font-bold">OTP</label>
              <div className="form-control w-full">
                <div className="flex justify-around">
                <input
                  type="text"
                  className="text-center font-semibold text-3xl bg-white border-2 border-secondary focus:outline-primary  w-12 h-12  rounded-md" 
                />
                <input
                  type="text"
                  className="text-center font-semibold text-3xl bg-white border-2 border-secondary focus:outline-primary  w-12 h-12  rounded-md" 
                />
                <input
                  type="text"
                  className="text-center font-semibold text-3xl bg-white border-2 border-secondary focus:outline-primary  w-12 h-12  rounded-md" 
                />
                <input
                  type="text"
                  className="text-center font-semibold text-3xl bg-white border-2 border-secondary focus:outline-primary  w-12 h-12  rounded-md" 
                />
                <input
                  type="text"
                  className="text-center font-semibold text-3xl bg-white border-2 border-secondary focus:outline-primary  w-12 h-12  rounded-md" 
                />
                </div>
              </div>
            </div>

            <input className="btn w-full btn-primary text-white  mt-6" type="submit" value="CONFIRM" />
          </form>

          

          
        </div>
      </div>
    </>
  );
};

export default OTP;
