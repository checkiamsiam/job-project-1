import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  return (
    <div className="bg-accent">
      <div class="container  mx-auto lg:pt-3 relative z-50">
        <div class="navbar ">
          <div class="flex-1">
            <a class="btn btn-secondary px-10 normal-case text-white text-xl">LOGO</a>
          </div>
          <div class="flex-none">
            <div className="md:block hidden">
              <div className="flex gap-5 ">
                <button className="border-2 border-black  btn btn-ghost ">Login</button>
                <button className="btn btn-primary text-white">Sign Up</button>
                <button className="btn btn-secondary text-white">Be a freelancer</button>
              </div>
            </div>
            <div className="md:hidden block">
              <div class="dropdown dropdown-left">
                <label tabindex="0" class=" m-1">
                  <HiMenuAlt1 className="text-3xl mr-3" />
                </label>
                <ul tabindex="0" class="dropdown-content menu p-2 my-3 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <button className="border-2 border-black my-3  btn btn-ghost ">Login</button>
                  </li>
                  <li>
                    <button className="btn btn-primary mb-3 text-white">Sign Up</button>
                  </li>
                  <li>
                    <button className="btn btn-secondary mb-3 text-white">Be a freelancer</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
