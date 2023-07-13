import React from "react";
import { stack } from "../utils/projects";

const Stack = () => {
  return (
    <div className="py-8 px-3">
      <h1 className="text-2xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Stack
      </h1>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 items-start gap-x-2 md:gap-x-3 lg:grid-cols-4 lg:gap-x-5 max-w-6xl m-auto gap-y-5">
        {stack.map((items, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-xl h-[12rem]"
            >
              <div className="bg-white h-[100%] rounded-xl">
                <div className="w-full overflow-hidden pt-5 h-32">
                  <img
                    src={items.img}
                    alt="stack-img"
                    className="w-24 m-auto"
                  />
                </div>
                <div className="p-3 flex flex-col gap-y-2">
                  <h2 className="text-lg md:text-xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                    {items.title}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stack;
