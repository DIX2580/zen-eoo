"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center p-4'>
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box border border-[#7042f88b] opacity-90 p-4 md:p-6 lg:p-8 flex items-center"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
        <h1 className="Welcome-text text-base md:text-lg lg:text-xl">
          Think better with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            ZENEX
          </span>
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-lg md:text-xl lg:text-2xl text-white font-medium mt-4 md:mt-6 lg:mt-8 text-center mb-4 md:mb-6 lg:mb-8'
      >
        Making Projects with modern thoughts
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-xl md:text-2xl lg:text-3xl text-gray-200 mb-6 md:mb-8 lg:mb-10 mt-4 md:mt-6 lg:mt-8 text-center'
      >
        Never miss a task, deadline or idea
      </motion.div>
      <motion.a
        variants={slideInFromLeft(1)}
        className="py-2 px-4 button-primary text-sm md:text-base lg:text-lg text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto"
      >
        Software we use
      </motion.a>
    </div>
  );
}

export default SkillText;
