import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ handleDropdown }) => {
  return (
    <div className="flex justify-between items-center py-5 px-3">
      <div>
        <h1 className="text-2xl  bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
          KoniesJay
        </h1>
      </div>
      <div onClick={() => handleDropdown()}>
        <AiOutlineMenu className="text-2xl text-purple-500" />
      </div>
    </div>
  );
};

export default Navbar;
