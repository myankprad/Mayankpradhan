import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-800">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Mayank Pradhan
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a ReactJs / JavaScript FrontEnd Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a FrontEnd Developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, i'm focused on
          building responsive Full-stack web applications{" "}
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-3 flex items-center hover:bg-pink-600 hover:border-x-pink-50 hover:animate-bounce">
             View Work
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3"/>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
