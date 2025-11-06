import React from "react";

function Card({ heading, details }) {
  return (
    <div className="flex items-center lg:w-[400px] lg:h-[184px] justify-center flex-col p-6 rounded-lg shadow bg-white shadow-lg transition-shadow py-10">
      <p className="text-yellow-500 text-3xl font-bold">*****</p>
      <h1 className="text-xl font-bold mb-2">{heading}</h1>
      <p className="font-semibold text-xs">{details}</p>
    </div>
  );
}

export default Card;
