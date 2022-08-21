import React from "react";
import camera from "../../../asset/recordingCamera.png";
import { GoLocation } from "react-icons/go";
import { GiHammerSickle } from "react-icons/gi";

const WhatWeOffer = () => {
  return (
    <div className="min-h-screen bg-secondary md:p-20 p-5">
      <div className="lg:flex">
        <div className="lg:w-1/2 ">
          <img src={camera} alt="" className="w-full lg:w-fit" />
        </div>
        <div className="lg:w-1/2">
          <div>
            <p className="sm:text-2xl text-xl text-primary mt-3">Lorem ipsum dolor sit amet, consectetur</p>
            <h1 className="mt-3 md:text-6xl text-3xl text-white font-semibold  ">What We Offer You !</h1>
          </div>
          <div className="mt-10">
            <div className="flex gap-5">
              <div className="p-5 border-2 w-28 h-24 flex justify-center items-center border-white bg-[#59C4B3] rounded-xl">
                <GoLocation className="text-4xl text-white" />
              </div>
              <div>
                <h1 className="sm:text-2xl text-xl text-white ">Location By Developer</h1>
                <p className="sm:text-xl text-md text-white pt-3">
                  Lorem ipsum dolor sit amet, consectetur elit. Felis donec volutpat duis diam tempor.
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-20">
              <div className="p-5 border-2 w-28 h-24 flex justify-center items-center border-white bg-[#59C4B3] rounded-xl">
                <GiHammerSickle className="text-4xl text-white" />
              </div>
              <div>
                <h1 className="sm:text-2xl text-xl text-white ">Client & Freelancer Features</h1>
                <p className="sm:text-xl text-md text-white pt-3">
                  Lorem ipsum dolor sit amet, consectetur elit. Felis donec volutpat duis diam tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
