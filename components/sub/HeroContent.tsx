"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";  // Import the Link component

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 mt-20 lg:mt-40 w-full z-20"
    >
      <div className="flex flex-col gap-5 justify-center m-auto text-start lg:text-left w-full lg:max-w-[50%] px-4 lg:px-0">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90 flex items-center"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="Welcome-text text-sm md:text-base lg:text-lg">
            ZENEX Profile
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-[600px] w-full"
        >
          <span>
            Delivering
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}the best{" "}
            </span>
            quality service
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg lg:text-xl text-gray-400 my-5 max-w-[600px]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}ZENEX{" "}
          </span>
          is a leading GIS company providing innovative geospatial solutions for diverse industries, revolutionizing spatial data analysis and visualization.
        </motion.p>
        <Link href="/about" passHref> {/* Wrap the motion.a with Link */}
          <motion.div
            variants={slideInFromLeft(1)}
            className="py-2 px-4 button-primary text-sm md:text-base lg:text-lg text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto lg:mx-0"
          >
            Know More!
          </motion.div>
        </Link>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 lg:mt-0 lg:max-w-[50%] px-4 lg:px-0"
      >
        <video
          autoPlay
          muted
          loop
          className="w-full max-w-[600px] h-auto"
          src="earth.webm"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
