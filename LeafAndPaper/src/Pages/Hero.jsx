import React from "react";
// import heroImage from "../Assets/heromainImage.jpg";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text flex flex-col items-start pl-5  justify-center h-full text-white bg-opacity-50 ">
        <h1 className="font-bold text-6xl text-left w-[400px] mb-4">
          Welcome to Leaf & Paper
        </h1>
        <p className="text-left text-2xl mb-24">
          Your one-stop shop for eco-friendly stationery and office supplies.
        </p>
      </div>
    </div>
  );
}

export default Hero;
