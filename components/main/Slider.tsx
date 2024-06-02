"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { images } from "./constants";
import Description from "./Description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const clickNext = () => {
    setActiveImage((prevActiveImage) => (prevActiveImage === images.length - 1 ? 0 : prevActiveImage + 1));
  };

  const clickPrev = () => {
    setActiveImage((prevActiveImage) => (prevActiveImage === 0 ? images.length - 1 : prevActiveImage - 1));
  };

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  useEffect(() => {
    const handleSpacebar = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener("keydown", handleSpacebar);

    return () => {
      window.removeEventListener("keydown", handleSpacebar);
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        clickNext() 
      }, 3000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [activeImage, isPlaying]);

  return (
    <div className="">
      <h1 className="max-w-3xl mx-auto text-center  bg-white rounded-r-[60px] rounded-l-[60px] md:rounded-r-[120px] md:rounded-l-[120px] mb-8 md:mb-16 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight border-t-4 border-b-4 border-purple-600 py-2 sm:py-3 md:py-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold">Some Projects</span>
      </h1>
      <main className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl ">
        <div className="w-full h-[60vh] md:h-[80vh] flex justify-center items-center gap-4 transition-transform ease-in-out duration-500  pl-6 pr-6 md:p-0 overflow-hidden">
          {images.map((elem, idx) => (
            <div
              key={idx}
              className={`${idx === activeImage ? "block w-full h-full object-cover transition-all duration-500 ease-in-out" : "hidden"}`}
            >
              <Image
                src={elem.src}
                alt=""
                width={400}
                height={400}
                className="w-full h-full rounded-lg object-cover max-h-[60vh] md:max-h-full"
              />
            </div>
          ))}
        </div>
        <Description
          activeImage={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          
        />
      </main>
    </div>
  );
};

export default Slider;
