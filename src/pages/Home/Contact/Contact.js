import React from "react";

const Contact = () => {
  return (
    <div className="bg-secondary mt-2 min-h-screen flex justify-center items-center">
      <div>
        <div className="flex  gap-20 px-20">
          <div className="w-1/2 flex justify-center items-center">
            <div>
              <h1 className="text-2xl">Contact Us</h1>
              <p className="mt-5 text-6xl text-white font-bold">Let’s have a conversation for your Query !</p>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div>
              <div className="card w-96 shadow-xl border  bg-white ">
                <div className="card-body">
                  <form>
                    <div>
                      <label className="ml-3 mb-2">Email</label>
                      <div className="form-control w-full max-w-xs relative">
                        <input
                          type="email"
                          placeholder="eg.celestine@gmail.com"
                          className="p-3  bg-accent border-2 border-secondary focus:outline-primary  w-full max-w-xs rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label className="ml-3 mb-2">Massage</label>
                      <div className="form-control w-full max-w-xs relative">
                        <textarea
                          rows={4}
                          placeholder="type something...."
                          className="p-3  bg-accent border-2 border-secondary  focus:outline-primary w-full max-w-xs rounded-xl"
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
