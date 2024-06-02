import React from "react";
import { images } from "./constants";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  activeImage: number;
  clickNext: () => void;
  clickPrev: () => void;
  isPlaying: boolean;
  togglePlayPause: () => void;
};

const Description = ({ activeImage, clickNext, clickPrev, isPlaying, togglePlayPause }: Props) => {
  return (
    <div className="grid  place-items-start w-full bg-[#e7dfd9] relative md:rounded-tr-3xl md:rounded-br-3xl">
      <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline">
        </div>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${idx === activeImage ? "block w-full h-full md:h-[80vh] md:py-20 md:px-20 px-10 text-left" : "hidden"}`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 1: 3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 0,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="py-16 text-5xl font-extrabold">{elem.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600">
              {elem.desc}
            </div>
          </motion.div>

          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div className="absolute pe-10 bottom-2 right-32 cursor-pointer" onClick={clickPrev}>
              <Image src="/left.svg" alt="Previous" width={50} height={30} loading="eager" />
            </div>

            <div className="absolute bottom-2 right-20 cursor-pointer" onClick={togglePlayPause}>
              <Image className=" items-center mr-5 "
                src={isPlaying ? "/pause.svg" : "/play.svg"}
                alt={isPlaying ? "Pause" : "Play"}
                width={50}
                height={30}
                loading="eager"
              />
            </div>

            <div className="absolute bottom-2 right-10 cursor-pointer" onClick={clickNext}>
              <Image src="/right.svg" alt="Next" width={50} height={30} loading="eager" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
