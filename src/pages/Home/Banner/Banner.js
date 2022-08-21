import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import bannerImage from "../../../asset/banner-img.png";

const Banner = () => {
  return (
    <div className="bg-accent flex justify-center items-center">
      <div className="md:p-20 p-5">
        <div className="container mx-auto">
          <div className="lg:flex gap-10">
            <div className="lg:w-1/2 mb-2 pt-2">
              <div className="">
                <p className="lg:text-6xl sm:text-5xl text-3xl font-bold">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                <p className="sm:text-xl sm:mt-8 text-lg ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilisi tincidunt volutpat vestibulum,massa,imperdiet
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="">
                <img src={bannerImage} alt="Img" height="auto" className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
        <div className="form-control w-full  relative">
                <BiSearchAlt className="absolute left-3 top-4 text-xl"></BiSearchAlt>
                <input
                  type="text"
                  placeholder="What are you looking here eg. freelancer, projects"
                  className="p-3 pl-10 bg-white border-2 border-secondary focus:outline-primary  w-full shadow-xl  rounded-xl"
                />
              </div>
          <div className="flex">
            <span className=" mt-3">
              <span className="m-2 text-xl font-bold">Search:</span> <br className="sm:hidden"/>
              <span className="btn  btn-sm bg-[#B1B1B1] text-black px-2 m-2" id="color">
                Logo Design
              </span>
              <span className="btn  btn-sm bg-[#B1B1B1] text-black px-2 m-2" id="color">
                SEO
              </span>
              <span className="btn  btn-sm bg-[#B1B1B1] text-black px-2 m-2" id="color">
                Wordpress
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
