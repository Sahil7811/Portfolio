import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaInstagram,
  FaFileAlt,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen py-20 md:py-0 flex items-center justify-center bg-black"
    >
      <div className="cntnr flex flex-col md:flex-row text-white w-full max-w-7xl px-4">
        {/* Image - adjusted positioning for big screens */}
        <div className="limg relative w-full md:w-[45%] h-72 sm:h-80 md:h-auto md:flex md:items-center md:justify-center mb-14 md:mb-0">
          <div className="relative w-full h-full md:h-[80%]">
            <img
              className="absolute scale-[0.7] sm:scale-[0.65] md:scale-[0.6] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="./boy-char.png"
              alt="Character avatar"
            />
          </div>
        </div>

        {/* Icons - horizontal on mobile, vertical on larger screens */}
        <div className="flex justify-center md:flex-col md:justify-center md:items-center w-full md:w-[8%] mb-14 md:mb-0">
          <div className="flex flex-row md:flex-col gap-8 md:gap-8">
            <a
              href="https://www.linkedin.com/in/sahil-lohar-bba509254/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white p-1.5 sm:p-2 border-2 border-gray-700 hover:border-green-500 rounded-full hover:text-green-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]"
            >
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://github.com/Sahil7811"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white p-1.5 sm:p-2 border-2 border-gray-700 hover:border-green-500 rounded-full hover:text-green-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]"
            >
              <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://leetcode.com/u/sahil_lohar_nitr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="text-white p-1.5 sm:p-2 border-2 border-gray-700 hover:border-green-500 rounded-full hover:text-green-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]"
            >
              <FaCode className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://www.instagram.com/sahilxlohar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white p-1.5 sm:p-2 border-2 border-gray-700 hover:border-green-500 rounded-full hover:text-green-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]"
            >
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://www.youtube.com/@SahilxNITian"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white p-1.5 sm:p-2 border-2 border-gray-700 hover:border-green-500 rounded-full hover:text-green-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]"
            >
              <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            <a
              href="mailto:sahilsanju7878@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="text-white p-1.5 sm:p-2 border-2 border-gray-700 hover:border-green-500 rounded-full hover:text-green-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]"
            >
              <MdEmail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        {/* Content - adjusted padding and text sizes for different screens */}
        <div className="rg w-full md:w-[45%] py-4 px-4 sm:px-6 md:py-20 md:px-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl pb-1 sm:pb-2 font-bold">
            From Concept to Code,
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            From Code to Change
          </h1>

          <div className="mt-6 sm:mt-8 lg:mt-10 space-y-3 sm:space-y-4 text-base sm:text-lg font-['Rubik'] leading-relaxed">
            <p>
              Hey, I'm Sahil — a Software Engineer and passionate problem-solver
              who sees code as more than syntax. For me, every bug is a riddle,
              every feature a challenge, and every project a chance to build
              something smarter, cleaner, and faster.
            </p>
            <p>
              I thrive on creating efficient, scalable software solutions —
              whether it's crafting intuitive UIs, building solid backend
              systems, or connecting it all with a dash of AI. Software Engineer
              by skill, curious by nature, and obsessed with writing code that
              not only works but works beautifully.
            </p>
            <p>
              If it pushes limits, solves real problems, or just sparks that
              creative flow — I'm all in. Let’s turn ideas into deploys, and
              deploys into impact.
            </p>
          </div>

          <div className="mt-8 sm:mt-10">
            <a
              // href="https://drive.google.com/file/d/1UZBbxW6BETzp3mxrso3Hq65smPvCavjZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F0C56D] hover:bg-[#DA8937] transition-colors duration-300 px-5 sm:px-6 py-2 sm:py-2.5 text-black text-lg sm:text-xl font-medium font-['Bebas_Neue'] tracking-wider rounded-xl inline-flex items-center gap-2"
            >
              VIEW CV <FaFileAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
