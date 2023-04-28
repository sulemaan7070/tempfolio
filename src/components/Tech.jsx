import React from "react";
import { motion } from "framer-motion";

function Tech({ img, title, i, duration }) {
  return (
    <div className="flex justify-center  items-center flex-col mx-2 lg:mx-3 ">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default Tech;
