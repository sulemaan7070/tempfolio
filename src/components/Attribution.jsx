import React from "react";
import globe from "../components/imgs/code-circle-svgrepo-com.svg";
import codeSvg from "../components/imgs/website-click-svgrepo-com.svg";
import { motion } from "framer-motion";
function Attribution({ site, code, bool }) {
  return (
    <div className="flex items-center justify-center text-gray-100">
      {bool && (
        <a
          className="bg-blue-400 shadow-lg lg:w-[10rem] w-[6.5rem] rounded-md px-2 lg:px-4 py-2 lg:py-3 mx-2"
          href={site}
        >
          <img className="lg:w-[20%] w-[20%] inline" src={globe} alt="globe" />{" "}
          visit site
        </a>
      )}
      <a
        className="bg-blue-400 shadow-lg lg:w-[10rem] w-[6.5rem] rounded-md px-2 lg:px-4 py-2 lg:py-3 mx-2"
        href={code}
      >
        <img className="lg:w-[20%] w-[20%] inline" src={codeSvg} alt="code" />{" "}
        see code
      </a>
    </div>
  );
}

export default Attribution;
