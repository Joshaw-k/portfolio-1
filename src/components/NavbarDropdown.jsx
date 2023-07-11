import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineClose } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const NavbarDropdown = ({ handleDropdown }) => {
  return (
    <div className="absolute top-0 left-0 right-0 z-30 pt-5 pb-8 px-3 bg-white border-b-2 border-purple-500">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="text-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
            KoniesJay
          </h1>
        </div>
        <div onClick={() => handleDropdown()}>
          <AiOutlineClose className="text-2xl text-red-500" />
        </div>
      </div>
      <div className="flex flex-col gap-y-6 text-purple-500 text-lg mb-8">
        <p className="hover:text-pink-500">About Me</p>
        <p className="hover:text-pink-500">Projects</p>
        <p className="hover:text-pink-500">Contacts</p>
      </div>
      <div className="flex gap-6 text-purple-500  text-2xl w-36 m-auto">
        <AiFillGithub className="hover:text-pink-500" />
        <AiFillLinkedin className="hover:text-pink-500" />
        <BiLogoGmail className="hover:text-pink-500" />
      </div>
    </div>
  );
};

export default NavbarDropdown;
