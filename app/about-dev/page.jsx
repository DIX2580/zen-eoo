import React from 'react';
import Image from 'next/image';
const UserProfile = () => {
  return (
    <div className="w-full m-10 max-w-7xl px-4 mx-auto sm:px-8 mt-24">
      <blockquote className="relative grid items-center bg-white shadow-xl md:grid-cols-3 rounded-xl overflow-hidden">
        <Image 
          className="hidden object-cover w-full h-full md:block md:col-span-1" 
          style={{ clipPath: 'polygon(0 0%, 100% 0%, 75% 100%, 0% 100%)' }} 
          src="/Untitled.png" 
          width={1000}
          height={1000}
          alt="Profile"
        />
        
        <article className="relative p-6 md:p-8 md:col-span-2">
          <div className="space-y-8">
            <h1 className='font-bold font-serif text-center text-3xl bg-teal-400 rounded-xl pe-2 ps-2'>About the Developer</h1>
            <p className=" bg-black rounded-xl p-2  text-white text-base leading-relaxed md:text-2xl">
              Hi, I&apos;m Dibya. I&apos;m a 23-year-old Web Developer with a passion for creating innovative solutions.
              I completed my MCA from KIIT University and have been working in
              the tech industry for several years. Throughout my career, I have gained extensive experience in
              programming languages like C, C++, and Java. I thrive in challenging environments and enjoy
              collaborating with teams.
            </p>

            <footer className="flex items-center 4">
              <Image 
                className="w-30 h-16 rounded-full md:hidden" 
                src="/Untitled.png" 
                width={120}
          height={1000}
                alt="Profile"
              />
              <span className="font-bold text-lg bg-teal-400 rounded-xl pe-2 ps-2">Dibyanjaya Panda</span>
            </footer>
          </div>
        </article>
      </blockquote>
    </div>
  );
};

export default UserProfile;
