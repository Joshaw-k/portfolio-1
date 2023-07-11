import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Navbar = ({ handleDropdown }) => {
  return (
    <div className="py-5 px-3">
      <div className="hidden md:flex items-center justify-between">
        <h1 className="text-4xl lg:text-5xl  bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
          KoniesJay
        </h1>
        <div className="flex gap-x-6 text-purple-500 text-2xl ">
          <p className="hover:text-pink-500">About Me</p>
          <p className="hover:text-pink-500">Projects</p>
          <p className="hover:text-pink-500">Contacts</p>
        </div>
        <div className="flex gap-x-6 text-purple-500  text-3xl ">
          <AiFillGithub className="hover:text-pink-500" />
          <AiFillLinkedin className="hover:text-pink-500" />
          <BiLogoGmail className="hover:text-pink-500" />
        </div>
      </div>
      <div className="flex md:hidden justify-between items-center">
        <div>
          <h1 className="text-2xl  bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
            KoniesJay
          </h1>
        </div>
        <div onClick={() => handleDropdown()}>
          <AiOutlineMenu className="text-2xl text-purple-500" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
