import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="bg-gray-100 p-12">
       <h2 className="text-3xl font-bold text-center mb-6">Testimonals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 p-4 gap-6 pt-10 ">
        <div className="flex items-center justify-center">
          <Card
            heading={"Style That Speaks"}
            details={
              "Trendy designs crafted to match your personality and confidence."
            }
          />
        </div>
        <div className="flex items-center justify-center">
          <Card
            heading={"Comfort Meets Quality"}
            details={"Premium fabrics that feel as good as they look."}
          />
        </div>
        <div className="flex items-center justify-center">
          <Card
            heading={"Made for Every Moment"}
            details={
              "From casual days to special nights — we’ve got your look covered."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
