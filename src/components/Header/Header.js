import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
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
              <HiMenuAlt1 onClick={toggleDrawer} className="text-3xl mr-3" />
              <Drawer open={isOpen} onClose={toggleDrawer} direction="right" className="">
                <div className="p-5 ">
                  <div className="flex justify-end items-center">
                    <button className="btn btn-secondary text-white">Be a freelancer</button>
                    <AiOutlineClose onClick={toggleDrawer} className="text-3xl  text-secondary ml-5" />
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="border-2 border-black  btn btn-ghost ">Login</button>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="btn btn-primary text-white">Sign Up</button>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
