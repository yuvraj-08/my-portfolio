"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full py-16 text-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <Image
              src="/hero-image-two.png"
              alt="About me"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl shadow-lg border-r-2 border-amber-400 pl-6"
            />
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col items-start text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-4">
            About Me
          </h2>
          <p className="text-md sm:text-lg text-gray-300 max-w-lg">
            Full-stack developer crafting scalable and efficient applications
            with React, TypeScript, Supabase & more. Passionate about clean
            code, great UX, and building real-time, offline-first solutions that
            enhance user experience.
          </p>
          <p className="text-md sm:text-lg text-gray-300 mt-4">
            Let’s build something amazing together! 🚀
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 transition">
              View My Work
            </button>
            <button className="px-4 py-2 border border-amber-400 rounded-lg hover:bg-amber-400 transition">
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
