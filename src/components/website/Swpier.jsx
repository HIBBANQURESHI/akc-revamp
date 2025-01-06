import React from "react";

const cardsData = [
  { heading: "Finance", paragraph: "Improve efficency and security." },
  { heading: "Healthcare", paragraph: "Enhance patient care and streamline processes." },
  { heading: "Media", paragraph: "Engage wider audience with advance solution." },
  { heading: "Telecom", paragraph: "Innovative solutn for better customer management." },
  { heading: "Logistics", paragraph: "Optimize operations and reduce overheads." },
  { heading: "Automative", paragraph: "Enhance customer loyalty and vehicle management." },
  { heading: "Real Estate", paragraph: "Simplify property management and sales." },
  { heading: "Education", paragraph: "Revolutionize learning and student management." },
  { heading: "Energy", paragraph: "Improve operation and safety." },
];

export default function Swiper() {
  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-transparent border border-gray-200 shadow-lg rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-4 w-[317.91px] h-[235px] flex flex-col justify-between">
              <h6 className="text-3xl text-white font-semibold mb-2">{card.heading}</h6>
              <p className="text-xl text-white">{card.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
