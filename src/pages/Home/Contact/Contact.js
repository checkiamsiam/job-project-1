import React from "react";

const Contact = () => {
  return (
    <div className="bg-secondary min-h-screen flex justify-center items-center">
      <div>
        <div className="lg:flex  gap-20 md:px-20 px-5">
          <div className="lg:w-1/2 flex justify-center items-center">
            <div>
              <h1 className="sm:text-2xl text-xl">Contact Us</h1>
              <p className="mt-3 md:text-6xl text-3xl text-white font-semibold ">Let’s have a conversation for your Query !</p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center py-10 lg:py-0">
            <div className="w-full sm:w-fit">
              <div className="card sm:w-96 w-full shadow-xl border  bg-white ">
                <div className="card-body">
                  <form>
                    <div>
                      <label className="ml-3 mb-2">Email</label>
                      <div className="form-control w-full  relative">
                        <input
                          type="email"
                          placeholder="eg.celestine@gmail.com"
                          className="p-3  bg-accent border-2 border-secondary focus:outline-primary  w-full  rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label className="ml-3 mb-2">Massage</label>
                      <div className="form-control w-full  relative">
                        <textarea
                          rows={4}
                          placeholder="type something...."
                          className="p-3  bg-accent border-2 border-secondary  focus:outline-primary w-full  rounded-xl"
                        />
                      </div>
                    </div>

                    <input className="btn w-full btn-primary text-white mt-10" type="submit" value="SEND REQUEST" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
