import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
 

  FaGithub,
} from "react-icons/fa";


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["programmer.", "font-end Developer.", "juniour MERN stack developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Rabbi hosen</span>
        </h1>
        <h2 className="text-4xl font-bold text-sky-300">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a Front-End Developer and MERN Stack Developer passionate about building modern, responsive web applications. I specialize in React, Tailwind CSS, and DaisyUI, crafting user-friendly interfaces while seamlessly integrating MongoDB, Express.js, and Node.js for robust backend functionality.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/rabbi-hosen00" target="blank">
              <span className="bannerIcon shadow-2xl">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.facebook.com/share/15K7joG11J/" target="blank">
              <span className="bannerIcon shadow-2xl">
                <FaFacebookF />
              </span>
            </a>
            
          </div>
        </div>
        <div>


        </div>
      </div>
      {/* <button
            className="p-ripple bg-cyan-800 py-2 rounded-lg text-white w-36 text-xl  btn outline-none border-none hover:bg-emerald-500"
            pulseColor="#ff5733"
            duration="2s"
            onClick={() => window.open('https://drive.google.com/file/d/1YZg-9pQhRyFm449q2r1sbtpkOn80YiWb/view?usp=sharing')}
          >
           
            Resume
          </button> */}
      <button
        className="p-ripple bg-cyan-800 py-2 rounded-lg text-white w-36 text-xl btn outline-none border-none hover:bg-emerald-500"
        pulseColor="#ff5733"
        duration="2s"
        onClick={() => window.location.href = 'https://drive.google.com/uc?export=download&id=1YZg-9pQhRyFm449q2r1sbtpkOn80YiWb'}
      >
        Resume
      </button>
    </div>
  );
};

export default LeftBanner;
