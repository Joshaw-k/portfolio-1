import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between py-5 px-3">
      <div>
        <h1>KoniesJay</h1>
      </div>
      <div>
        <AiOutlineMenu className="text-xl" />
      </div>
    </div>
  );
};

export default Navbar;
