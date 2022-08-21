import React from "react";
import imgOne from "../../../asset/choice1.png";
import imgTwo from "../../../asset/choice2.png";
import imgThree from "../../../asset/choice3.png";
import imgFour from "../../../asset/choice4.png";
import imgFive from "../../../asset/choice5.png";
import imgSix from "../../../asset/choice6.png";

const OurChoice = () => {
  return (
    <div className="bg-secondary md:p-20 p-5">
      <div className="xl:flex gap-20">
        <div className="xl:w-1/3 flex justify-center items-center">
          <div>
            <h1 className="sm:text-2xl text-xl text-center">Lorem ipsum dolor sit amet, consectetur</h1>
            <p className="mt-5 md:text-6xl text-3xl text-white font-semibold text-center xl:pb-0 pb-10">Our Choices with different technology</p>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 grid-cols-2 md:gap-10 gap-3 xl:w-2/3 ">
          <div className="relative">
            <img src={imgOne} alt="" className="w-full" />
            <h1 className="absolute w-full h-full top-0 left-0 rounded-2xl bg-black bg-opacity-50 text-white text-xl flex items-end ">
              <p className="mb-5 ml-3">Content Writing</p>
            </h1>
          </div>

          <div className="relative">
            <img src={imgTwo} alt="" className="w-full" />
            <h1 className="absolute w-full h-full top-0 left-0 rounded-2xl bg-black bg-opacity-50 text-white text-xl flex items-end ">
              <p className="mb-5 ml-3">Graphics Design</p>
            </h1>
          </div>
          <div className="relative">
            <img src={imgThree} alt="" className="w-full" />
            <h1 className="absolute w-full h-full top-0 left-0 rounded-2xl bg-black bg-opacity-50 text-white text-xl flex items-end ">
              <p className="mb-5 ml-3">Finance</p>
            </h1>
          </div>
          <div className="relative">
            <img src={imgFour} alt="" className="w-full" />
            <h1 className="absolute w-full h-full top-0 left-0 rounded-2xl bg-black bg-opacity-50 text-white text-xl flex items-end ">
              <p className="mb-5 ml-3">SEO</p>
            </h1>
          </div>
          <div className="relative">
            <img src={imgFive} alt="" className="w-full"  />
            <h1 className="absolute w-full h-full top-0 left-0 rounded-2xl bg-black bg-opacity-50 text-white text-xl flex items-end ">
              <p className="mb-5 ml-3">Game Development</p>
            </h1>
          </div>
          <div className="relative">
            <img src={imgSix} alt="" className="w-full"  />
            <h1 className="absolute w-full h-full top-0 left-0 rounded-2xl bg-black bg-opacity-50 text-white text-xl flex items-end ">
              <p className="mb-5 ml-3">Logo Design</p>
            </h1>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default OurChoice;
