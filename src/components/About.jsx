import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about-id"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-[28px] font-bold">
            <p>
              Hi. I'm Aminat Olatunji, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              Hi there! I'm a frontend developer with a passion for bringing a unique blend of technical expertise and creative flair to every project I work on. I love nothing more than bringing my clients' visions to life through stunning, custom-designed websites that are optimized for performance and user experience. In my free time, I enjoy experimenting with new programming languages and exploring the latest trends in web design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
