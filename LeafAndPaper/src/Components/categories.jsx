import React from "react";
import nightWear from "../assets/NightWear.jpeg";
import TraditionalWear from "../assets/TraditionalWear.jpeg";
import ProfessionalWear from "../assets/ProfetionalModel.jpeg";
import SareeCollection from "../assets/SaariModel.jpeg";

const categories = [
  { name: "Saree Collection", image: SareeCollection },
  { name: "Professional Wear", image: ProfessionalWear },
  { name: "Traditional Wear", image: TraditionalWear },
  { name: "Nightwear", image: nightWear },
];

export default function Categories() {
  return (
    <div className="p-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Our Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div key={cat.name}>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full">
              <div className="p-4 text-center bg-white">
                <h3 className="text-lg font-semibold">{cat.name}</h3>
              </div>
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
