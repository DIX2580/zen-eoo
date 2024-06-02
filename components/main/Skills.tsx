import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  // Function to resize image if it is from pngegg.png
  const resizeImage = (src: string, width: number, height: number) => {
    if (src.includes("pngegg.png")) {
      return { width: width * 1.2, height: height * 0.8 }; // Example resize logic
    }
    return { width, height };
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3  h-full relative overflow-hidden"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap items-center w-full">
        {Skill_data.map((image, index) => {
          const { width, height } = resizeImage(image.Image, image.width, image.height);
          return (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={width}
              height={height}
              index={index}
            />
          );
        })}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
