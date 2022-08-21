import React from "react";
import imgOne from "../../../asset/choice1.png";
import imgTwo from "../../../asset/choice2.png";
import imgThree from "../../../asset/choice3.png";
import imgFour from "../../../asset/choice4.png";
import imgFive from "../../../asset/choice5.png";
import imgSix from "../../../asset/choice6.png";

const OurChoice = () => {
  return (
    <div className="bg-secondary py-20 px-20">
      <div className="flex gap-20">
        <div className="w-1/3 flex justify-center items-center">
          <div>
            <h1 className="text-2xl">Lorem ipsum dolor sit amet, consectetur</h1>
            <p className="mt-5 text-6xl text-white font-semibold">Our Choices with different technology</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 w-2/3 ">
          <div className="relative">
            <img src={imgOne} alt="" />
            <h1 className="absolute w-[93%] h-full top-0 left-0 rounded-2xl bg-black bg-opacity-50 text-white text-xl flex items-end ">
              <p className="mb-5 ml-3">Content Writing</p>
            </h1>
          </div>

          <div className="relative">
            <img src={imgTwo} alt="" />
            <h1 className="absolute w-[93%] h-full top-0 left-0 rounded-2xl bg-black bg-opacity-50 text-white text-xl flex items-end ">
              <p className="mb-5 ml-3">Graphics Design</p>
            </h1>
          </div>
          <div className="relative">
            <img src={imgThree} alt="" />
            <h1 className="absolute w-[93%] h-full top-0 left-0 rounded-2xl bg-black bg-opacity-50 text-white text-xl flex items-end ">
              <p className="mb-5 ml-3">Finance</p>
            </h1>
          </div>
          <div className="relative">
            <img src={imgFour} alt="" />
            <h1 className="absolute w-[93%] h-full top-0 left-0 rounded-2xl bg-black bg-opacity-50 text-white text-xl flex items-end ">
              <p className="mb-5 ml-3">SEO</p>
            </h1>
          </div>
          <div className="relative">
            <img src={imgFive} alt="" />
            <h1 className="absolute w-[93%] h-full top-0 left-0 rounded-2xl bg-black bg-opacity-50 text-white text-xl flex items-end ">
              <p className="mb-5 ml-3">Game Development</p>
            </h1>
          </div>
          <div className="relative">
            <img src={imgSix} alt="" />
            <h1 className="absolute w-[93%] h-full top-0 left-0 rounded-2xl bg-black bg-opacity-50 text-white text-xl flex items-end ">
              <p className="mb-5 ml-3">Logo Design</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurChoice;
