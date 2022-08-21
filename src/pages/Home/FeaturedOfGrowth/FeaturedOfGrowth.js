import React from "react";
import code from "../../../asset/code.png";
import music from "../../../asset/music.png";
import digitalMarketing from "../../../asset/DigitalMarketing.png";
import calculator from "../../../asset/calculator.png";
import content from "../../../asset/content.png";
import pencilRular from "../../../asset/pencilRular.png";
import salesMarketing from "../../../asset/salesMarketing.png";

const FeaturedOfGrowth = () => {
  return (
    <div className="min-h-screen bg-accent md:p-20 p-5">
      <p className="sm:text-2xl text-xl text-secondary text-center">Lorem ipsum dolor sit amet, consectetur</p>
      <h1 className="mt-3 md:text-6xl text-3xl text-primary font-semibold  text-center">Features for Your Growth</h1>
      <div>
        <div className="mt-10 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2  sm:gap-10 gap-2">
          <div class="card  text-primary border-2 border-secondary">
            <div class="card-body items-center text-center">
              <img src={code} alt="" />
              <div class="card-actions justify-end mt-5 text-xl font-semibold">
                <p>Programming</p>
              </div>
            </div>
          </div>
          <div class="card  text-primary border-2 border-secondary">
            <div class="card-body items-center text-center">
              <img src={music} alt="" />
              <div class="card-actions justify-end mt-5 text-xl font-semibold">
                <p>Music</p>
              </div>
            </div>
          </div>
          <div class="card text-primary border-2 border-secondary">
            <div class="card-body items-center text-center">
              <img src={digitalMarketing} alt="" />
              <div class="card-actions justify-end mt-5 text-xl font-semibold">
                <p>Digital Marketing</p>
              </div>
            </div>
          </div>
          <div class="card  text-primary border-2 border-secondary">
            <div class="card-body items-center text-center">
              <img src={pencilRular} alt="" />
              <div class="card-actions justify-end mt-5 text-xl font-semibold">
                <p>Design & Art</p>
              </div>
            </div>
          </div>
          <div class="card  text-primary border-2 border-secondary">
            <div class="card-body items-center text-center">
              <img src={calculator} alt="" />
              <div class="card-actions justify-end mt-5 text-xl font-semibold">
                <p>Finance</p>
              </div>
            </div>
          </div>
          <div class="card  text-primary border-2 border-secondary">
            <div class="card-body items-center text-center">
              <img src={content} alt="" />
              <div class="card-actions justify-end mt-5 text-xl font-semibold">
                <p>Content</p>
              </div>
            </div>
          </div>
          <div class="card  text-primary border-2 border-secondary">
            <div class="card-body items-center text-center">
              <img src={salesMarketing} alt="" />
              <div class="card-actions justify-end mt-5 text-xl font-semibold">
                <p>Sales & Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOfGrowth;
