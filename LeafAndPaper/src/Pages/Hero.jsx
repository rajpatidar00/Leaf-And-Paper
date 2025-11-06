import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero-container flex items-center justify-center">
      <motion.div
        initial={{ y: 60, opacity: 0 }} // start below
        animate={{ y: 0, opacity: 1 }} // move up & fade in
        transition={{ duration: 1.2, ease: "easeOut" }} // slow & smooth
        className="hero-text flex flex-col items-start md:pl-5 px-10 justify-center h-full text-white bg-opacity-50 md:w-[70%]"
      >
        <h1 className="font-bold text-4xl md:text-6xl text-left md:w-[400px] mb-4">
          Welcome to Leaf & Paper
        </h1>

        <p className="text-left text-xl md:text-2xl mb-24">
          Your one-stop shop for eco-friendly stationery and office supplies.
        </p>
      </motion.div>
    </div>
  );
}

export default Hero;
