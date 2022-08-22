import React, { useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Slider from "react-slick";
import personOne from "../../../asset/person-1.png";
const TrendingFreelencer = () => {
  const slideRef = useRef(null)
  const settings = {
    className: "",
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: '50px',
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <div className="md:p-20 p-5">
      <div className="sm:flex justify-between items-center">
        <div>
          <p className="sm:text-2xl text-xl text-secondary">Lorem ipsum dolor sit amet, consectetur</p>
          <h1 className="mt-3 md:text-6xl text-3xl text-primary font-semibold ">Trending Freelancer</h1>
        </div>
        <div className="flex justify-end gap-5 mt-5">
          <button onClick={() => slideRef.current.slickPrev()} className="btn btn-accent">
            <AiOutlineArrowLeft className=" text-black text-2xl cursor-pointer" />
          </button>
          <button onClick={() => slideRef.current.slickNext()} className="btn btn-primary">
            <AiOutlineArrowRight className="text-white text-2xl cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="mt-10">
        <div>
          <Slider ref={slideRef} {...settings}>
            <div>
              <div className="bg-accent w-80 rounded-xl shadow-lg text-center">
                <div className="card page4card">
                  <div class="avatar border-4 rounded-xl border-white mx-auto mt-5">
                    <div class="w-36 rounded-xl">
                      <img src={personOne} alt="Img" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="row">
                      <span className="text-3xl font-semibold ">
                        <b>Eleanor Pena</b>
                      </span>
                      <br />
                      <span className=" text-2xl ">
                        <small>Backend Developer</small>
                      </span>
                      <br />
                      <span className="flex text-xl gap-3 my-2 justify-center items-center">
                        <b>5.0</b>
                        <div className="flex">
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                        </div>
                      </span>
                    </div>
                    <p className="mb-3  text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex justify-around px-2 py-4 border-t-2 border-secondary">
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-accent w-80 rounded-xl shadow-lg text-center">
                <div className="card page4card">
                  <div class="avatar border-4 rounded-xl border-white mx-auto mt-5">
                    <div class="w-36 rounded-xl">
                      <img src={personOne} alt="Img" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="row">
                      <span className="text-3xl font-semibold ">
                        <b>Eleanor Pena</b>
                      </span>
                      <br />
                      <span className=" text-2xl ">
                        <small>Backend Developer</small>
                      </span>
                      <br />
                      <span className="flex text-xl gap-3 my-2 justify-center items-center">
                        <b>5.0</b>
                        <div className="flex">
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                        </div>
                      </span>
                    </div>
                    <p className="mb-3  text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex justify-around px-2 py-4 border-t-2 border-secondary">
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-accent w-80 rounded-xl shadow-lg text-center">
                <div className="card page4card">
                  <div class="avatar border-4 rounded-xl border-white mx-auto mt-5">
                    <div class="w-36 rounded-xl">
                      <img src={personOne} alt="Img" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="row">
                      <span className="text-3xl font-semibold ">
                        <b>Eleanor Pena</b>
                      </span>
                      <br />
                      <span className=" text-2xl ">
                        <small>Backend Developer</small>
                      </span>
                      <br />
                      <span className="flex text-xl gap-3 my-2 justify-center items-center">
                        <b>5.0</b>
                        <div className="flex">
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                        </div>
                      </span>
                    </div>
                    <p className="mb-3  text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex justify-around px-2 py-4 border-t-2 border-secondary">
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-accent w-80 rounded-xl shadow-lg text-center">
                <div className="card page4card">
                  <div class="avatar border-4 rounded-xl border-white mx-auto mt-5">
                    <div class="w-36 rounded-xl">
                      <img src={personOne} alt="Img" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="row">
                      <span className="text-3xl font-semibold ">
                        <b>Eleanor Pena</b>
                      </span>
                      <br />
                      <span className=" text-2xl ">
                        <small>Backend Developer</small>
                      </span>
                      <br />
                      <span className="flex text-xl gap-3 my-2 justify-center items-center">
                        <b>5.0</b>
                        <div className="flex">
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                        </div>
                      </span>
                    </div>
                    <p className="mb-3  text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex justify-around px-2 py-4 border-t-2 border-secondary">
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-accent w-80 rounded-xl shadow-lg text-center">
                <div className="card page4card">
                  <div class="avatar border-4 rounded-xl border-white mx-auto mt-5">
                    <div class="w-36 rounded-xl">
                      <img src={personOne} alt="Img" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="row">
                      <span className="text-3xl font-semibold ">
                        <b>Eleanor Pena</b>
                      </span>
                      <br />
                      <span className=" text-2xl ">
                        <small>Backend Developer</small>
                      </span>
                      <br />
                      <span className="flex text-xl gap-3 my-2 justify-center items-center">
                        <b>5.0</b>
                        <div className="flex">
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                        </div>
                      </span>
                    </div>
                    <p className="mb-3  text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex justify-around px-2 py-4 border-t-2 border-secondary">
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-accent w-80 rounded-xl shadow-lg text-center">
                <div className="card page4card">
                  <div class="avatar border-4 rounded-xl border-white mx-auto mt-5">
                    <div class="w-36 rounded-xl">
                      <img src={personOne} alt="Img" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="row">
                      <span className="text-3xl font-semibold ">
                        <b>Eleanor Pena</b>
                      </span>
                      <br />
                      <span className=" text-2xl ">
                        <small>Backend Developer</small>
                      </span>
                      <br />
                      <span className="flex text-xl gap-3 my-2 justify-center items-center">
                        <b>5.0</b>
                        <div className="flex">
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                        </div>
                      </span>
                    </div>
                    <p className="mb-3  text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex justify-around px-2 py-4 border-t-2 border-secondary">
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-accent w-80 rounded-xl shadow-lg text-center">
                <div className="card page4card">
                  <div class="avatar border-4 rounded-xl border-white mx-auto mt-5">
                    <div class="w-36 rounded-xl">
                      <img src={personOne} alt="Img" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="row">
                      <span className="text-3xl font-semibold ">
                        <b>Eleanor Pena</b>
                      </span>
                      <br />
                      <span className=" text-2xl ">
                        <small>Backend Developer</small>
                      </span>
                      <br />
                      <span className="flex text-xl gap-3 my-2 justify-center items-center">
                        <b>5.0</b>
                        <div className="flex">
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                        </div>
                      </span>
                    </div>
                    <p className="mb-3  text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex justify-around px-2 py-4 border-t-2 border-secondary">
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <FaUserAlt className="text-xl" />
                        <p className="text-xl ">Projects</p>
                        <p className="text-xl font-bold">90 +</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TrendingFreelencer;
