import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import hero from "./imgs/hero.svg";
import { motion } from "framer-motion";
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

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(`ContentCreatorResume.pdf`).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <main className="  w-full lg:w-[85%] px-3 lg:px-0  mx-auto font-Inter h-[90vh] xl:h-[90vh] flex gap-4 justify-around  items-center flex-col xl:flex-row-reverse border-b-2 border-dotted border-[#2c65ce]">
      <div className="xl:w-[50%]">
        <img className="" src={hero} alt="" />
      </div>

      <div className=" xl:w-[50%]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold scroll-px-10 h-30 xl:mx-5">
          Hi, Iam suleman <br />{" "}
          <span className="text-[#2c65ce] pt-2">{text}</span>
          <Cursor cursorColor="#111" />
        </h1>
        <div className="button__div max-w-lg flex mt-4 lg:mt-6 justify-between xl:mx-5">
          <motion.a
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.9 }}
            href="https://www.github.com/sulemaan7070"
            target="_blank"
            className="bg-black shadow-xl  md:px-3 lg:px-6 lg:py-1 text-sm md:text-base lg:text-lg md:pr-3 text-white rounded-lg pr-1 min-w-[10rem] mr-2"
          >
            <SocialIcon
              url="https://www.github.com/sulemaan7070"
              fgColor="#fff"
              bgColor="transparent"
            />
            <span>Link to github</span>
          </motion.a>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.9 }}
            onClick={onButtonClick}
            className="bg-white px-1 md:px-3 lg:px-6  lg:text-lg shadow-lg text-sm md:text-base md:pr-3 text-black rounded-lg pr-1 min-w-[10rem] mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 pr-1 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download resume
          </motion.button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
