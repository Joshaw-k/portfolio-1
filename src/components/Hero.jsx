import React from "react";
import image from "../assets/concept-of-seo-ranking.svg";

const Hero = () => {
  return (
    <div className="md:flex items-center justify-between py-8 px-5 max-w-[100rem] m-auto">
      <div className="flex flex-col gap-y-5 mt-5 md:w-[45%]">
        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-start">
          I'm a Software <br />
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Developer
          </span>
        </h1>
        <p className="text-center md:text-start">
          My name is Emefiele-konyeri Awinrin, I'm a frontend web developer with
          a strong foundation in HTML, CSS, and JavaScript, I have successfully
          implemented numerous projects that showcase my expertise in frontend
          development. My portfolio reflects my passion for frontend
          development, featuring projects that demonstrate my ability to create
          intuitive interfaces, optimize website performance, and implement
          modern design trends. I am dedicated to staying up-to-date with the
          latest frontend technologies and continuously expanding my skill set
          to provide the best solutions for my clients.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-x-5 gap-y-3 px-8 md:pl-0">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 py-2 w-full md:w-auto md:px-5 text-lg rounded-full font-semibold text-white">
            Projects
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 py-2 w-full md:w-auto md:px-5 text-lg rounded-full font-semibold text-white">
            Contact Me
          </button>
        </div>
      </div>
      <div className="hidden md:block w-[55%]">
        <img src={image} className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
