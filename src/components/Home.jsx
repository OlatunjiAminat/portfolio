import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#ccd6f6]">
          AMINAT OLATUNJI
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Hey there, I'm a frontend developer with a passion for creating user-friendly and visually appealing websites. I have experience in HTML, CSS, JavaScript, and React, and I'm always eager to learn new technologies and constantly striving to improve my skills and stay up to date with the latest web design trends. 
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
