import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router-dom";
import SignUP from "../../pages/signup/SignUp";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleDrawerMenu = () => {
    setIsOpenMenu((prevState) => !prevState);
  };
  const [isOpenSignUP, setIsOpenSignUP] = useState(false);
  const toggleDrawerSignUP = () => {
    setIsOpenSignUP((prevState) => !prevState);
  };
  // const [isOpenEmailVerify, setIsOpenEmailVerify] = useState(false);
  // const toggleDrawerEmailVerify = () => {
  //   setIsOpenEmailVerify((prevState) => !prevState);
  // };
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
                <Link to="login" class="border-2 border-black  btn btn-ghost modal-button">
                  Login
                </Link>
                <button onClick={toggleDrawerSignUP} className="btn btn-primary text-white">
                  Sign Up
                </button>
                <Drawer open={isOpenSignUP} onClose={toggleDrawerSignUP} direction="left" size="50%" className="bla bla bla">
                  <SignUP toggleDrawerSignUP={toggleDrawerSignUP}></SignUP>
                </Drawer>
                <button className="btn btn-secondary text-white">Be a freelancer</button>
              </div>
            </div>
            <div className="md:hidden block">
              <HiMenuAlt1 onClick={toggleDrawerMenu} className="text-3xl mr-3" />
              <Drawer open={isOpenMenu} onClose={toggleDrawerMenu} direction="right" className="">
                <div className="p-5 ">
                  <div className="flex justify-end items-center">
                    <button className="btn btn-secondary text-white">Be a freelancer</button>
                    <AiOutlineClose onClick={toggleDrawerMenu} className="text-3xl  text-secondary ml-5" />
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
