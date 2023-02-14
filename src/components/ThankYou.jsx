import React from "react";
import tickSvg from "./imgs/approve-icon.svg";
import { motion } from "framer-motion";
import locationImg from "./imgs/location.svg";
function ThankYou() {
  return (
    <div
      id="contact"
      className="md:h-[65vh] h-[40vh] w-[100%] lg:w-[50%] relative flex-col flex   text-left md:flex-col 
  max-w-7xl px-10 justify-center items-center mt-4 mb-14 lg:mb-0"
    >
      <div className="flex justify-center items-center">
        <p className="inline text-3xl lg:text-4xl text-blue-500">ThankYou</p>
        <motion.img
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            scale: [1, 1, 1, 1.4, 1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            animationDelay: 2,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className="w-[15%] mx-3 inline"
          src={tickSvg}
          alt="success"
        />
      </div>
      <p>I will reach out to you as soon as possible!</p>
      <span className=" h-10 absolute -bottom-10 lg:-rotate-90 lg:-right-32 lg:bottom-44 z-20  flex justify-center items-center text-3xl lg:text-4xl">
        <img className="w-[8%] lg:w-[10%]" src={locationImg} alt="location" />{" "}
        where I live?
      </span>
    </div>
  );
}

export default ThankYou;
