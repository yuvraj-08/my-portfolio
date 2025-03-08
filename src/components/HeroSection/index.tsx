import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-container relative w-full min-h-screen flex justify-center items-center grid-container">
      <div className="flex-col-reverse md:grid md:grid-cols-2 gap-4 z-20 h-[calc(100vh-5rem)]">
        <div className="right-col max-w-[80%] mx-auto flex flex-col justify-center items-start gap-5 sm:gap-10">
          <h1 className="sm:text-4xl font-bold text-2xl">
            Hi, I`m Yuvraj Singh <br></br> – A Passionate Front-end Developer!
          </h1>
          <p className="sm:text-lg text-md max-w-md  max-sm:max-w-[80%]">
            I specialize in building modern, user-friendly web applications with
            Next.js, Tailwind, and more.
          </p>
          <div className="flex gap-5">
            <button className="border border-amber-400 px-3 py-2 rounded-lg cursor-pointer">
              View My Work
            </button>
            <button className="bg-amber-600 px-3 py-2 rounded-lg cursor-pointer">
              Contact me
            </button>
          </div>
        </div>
        <div className="left-col flex justify-center items-center">
          <Image
            src="/hero-man-img.webp"
            alt="profile"
            width={400}
            height={400}
            className="max-sm:w-[250px] max-sm:h-[250px]"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-30 bg-[var(--color-gray-900)] clip-slant"></div>
    </div>
  );
};

export default HeroSection;
