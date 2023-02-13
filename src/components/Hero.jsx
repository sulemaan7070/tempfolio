import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import hero from "./imgs/hero.svg";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Full time <Developer/>",
      "Front end Enthusiast",
      "part time mentor.",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  function url() {
    window.location.href = "https://www.github.com/sulemaan7070";
  }
  return (
    <main className=" w-[85%] mx-auto font-Inter h-[90vh] xl:h-[90vh] flex gap-4 justify-around  items-center flex-col xl:flex-row-reverse border-b-2 border-dotted border-[#2c65ce]">
      <div className="xl:w-[50%]">
        <img className="" src={hero} alt="" />
      </div>

      <div className=" xl:w-[50%]">
        <h1 className="text-3xl lg:text-5xl font-semibold scroll-px-10 h-30 xl:mx-5">
          Hi, Iam suleman <br />{" "}
          <span className="text-[#2c65ce] pt-2">{text}</span>
          <Cursor cursorColor="#111" />
        </h1>
        <div className="button__div flex mt-4 lg:mt-6 justify-between xl:mx-5">
          <button onClick={url} className="btn mr-2 ">
            <SocialIcon
              url="https://www.github.com/sulemaan7070"
              fgColor="#fff"
              bgColor="transparent"
            />
            Link to github
          </button>
          <a
            href="../../ContentCreatorResume.pdf"
            target="_blank"
            download="resume"
            className="btn2 cursor-pointer px-6 rounded-md flex justify-center items-center lg:pl-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 pr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download resume
          </a>
        </div>
      </div>
    </main>
  );
}

export default Hero;
