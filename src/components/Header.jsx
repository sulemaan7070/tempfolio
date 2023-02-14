import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="sticky bg-white/50 top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/shaik-suleman-4604a1204/"
          fgColor="#111"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.github.com/sulemaan7070"
          fgColor="#111"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/im_sms777/"
          fgColor="#111"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/suleman007786"
          fgColor="#111"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/suleman.sms.3/"
          fgColor="#111"
          bgColor="transparent"
        />
      </motion.div>
      <motion.a
        href="#contact"
        className="flex flex-row items-center text-black-300 cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#111"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-black-400">
          get in touch
        </p>
      </motion.a>
    </header>
  );
}

export default Header;
