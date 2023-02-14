import React from "react";
import { motion } from "framer-motion";

function Tech({ img, title, i, duration }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: duration,
      }}
      viewport={{ once: true }}
      className="flex justify-center items-center flex-col mx-2 lg:4"
    >
      <img src={img} alt={title} />
      <p>{title}</p>
    </motion.div>
  );
}

export default Tech;
