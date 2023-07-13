import React from "react";

const Contact = () => {
  return (
    <div className="py-10 px-3">
      <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Contact Me
      </h1>
      <div className="flex flex-col gap-y-5">
        <h1 className="text-xl md:text-2xl font-semibold text-center">
          Let's work together
        </h1>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-2xl">
          <form className="flex-1 border bg-white rounded-2xl flex flex-col gap-y-6 pb-12 p-6">
            <input
              type="text"
              placeholder="Your name"
              className="bg-transparent border-b border-purple-500 py-3 outline-none w-full placeholder:text-wh focus:border-pink-500 transition-all"
            />
            <input
              type="text"
              placeholder="Your email"
              className="bg-transparent border-b border-purple-500 py-3 outline-none w-full placeholder:text-wh focus:border-pink-500 transition-all"
            />
            <textarea
              placeholder="Your message"
              className="bg-transparent border-b border-purple-500 py-3 outline-none w-full placeholder:text-wh focus:border-pink-500 transition-all resize-none mb-12"
            ></textarea>
            <button className="text-lg rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
