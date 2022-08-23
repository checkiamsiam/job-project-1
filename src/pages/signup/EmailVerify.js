import React from 'react';

const EmailVerify = ({toggleDrawerEmailVerify}) => {
  return (
    <div className='bg-accent h-full flex items-center justify-center'>
      <div className="card max-w-md     bg-accent backdrop-blur-xl bg-opacity-40">
        <div className="card-body">
          <h2 className="text-3xl font-bold mb-5">Email Confirmation</h2>
          <p className="sm:text-xl mb-5">Please verify the given abc@gmail.com email id</p>
          <form>
            <div>
              <label className="ml-3   font-bold">6 Digit OTP</label>
              <div className="form-control mt-5 w-full">
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

            <input onClick={toggleDrawerEmailVerify} className="btn w-full btn-primary text-white  mt-6" type="submit" value="CONFIRM" />
          </form>

          

          
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;