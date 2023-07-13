import React from "react";
import { projects } from "../utils/projects";
import image from "../assets/photo-1503023345310-bd7c1de61c7d.avif";

const Projects = () => {
  return (
    <div className="py-8 px-3">
      <h1 className="text-2xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        My Projects
      </h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 items-start md:gap-x-3 lg:grid-cols-3 lg:gap-x-5 max-w-6xl m-auto gap-y-5">
        {projects.map((items, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-xl"
            >
              <div className="w-full rounded-tl-xl rounded-tr-xl overflow-hidden h-64">
                <img src={items.img == "" && image} alt="proj-img" />
              </div>
              <div className="bg-white p-3 flex flex-col gap-y-2 rounded-bl-xl rounded-br-xl">
                <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                  {items.title}
                </h2>
                <p>{items.desc}</p>
                <p className="text-purple-500 text-lg font-semibold">Stack</p>
                <div className="grid grid-cols-2">
                  {items.stack.map((item, index) => {
                    return (
                      <div key={index} className="flex items-center gap-x-2">
                        <div className="w-[20%]">
                          <img
                            src={item.img}
                            alt="stack-img"
                            className="w-full"
                          />
                        </div>
                        <h3 className="w-[80%] text-pink-500 font-medium text-sm">
                          {item.title}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
