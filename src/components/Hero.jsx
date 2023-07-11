import React from "react";

const Hero = () => {
  return (
    <div className="py-8 px-3">
      <div className="flex flex-col gap-y-5 mt-5">
        <h1 className="text-4xl font-bold text-center">
          I'm a Software <br />
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Developer
          </span>
        </h1>
        <p className="text-center">
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
        <div className="flex flex-col gap-y-3 px-8">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 py-2 text-lg rounded-full font-semibold text-white">
            Projects
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 py-2 text-lg rounded-full font-semibold text-white">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
