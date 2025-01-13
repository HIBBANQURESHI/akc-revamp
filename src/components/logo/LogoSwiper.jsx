import React from "react";

const cardsData = [
  { heading: "Finance", paragraph: "Create a professional and trustworthy logo for your financial brand." },
  { heading: "Healthcare", paragraph: "Design a logo that reflects care, trust, and professionalism in the healthcare industry." },
  { heading: "Media", paragraph: "Develop a captivating logo that resonates with your audience and reflects your media presence." },
  { heading: "Telecom", paragraph: "Craft a modern and reliable logo for telecom companies, focusing on connectivity and innovation." },
  { heading: "Logistics", paragraph: "Design a logo that represents efficiency, reliability, and movement in the logistics sector." },
  { heading: "Automotive", paragraph: "Create a logo that reflects speed, precision, and innovation in the automotive industry." },
  { heading: "Real Estate", paragraph: "Design a sleek and professional logo that conveys trust and expertise in the real estate market." },
  { heading: "Education", paragraph: "Craft a logo that symbolizes knowledge, growth, and accessibility for educational institutions." },
  { heading: "Energy", paragraph: "Develop a dynamic and powerful logo that conveys sustainability and innovation in the energy sector." },
];

export default function LogoSwiper() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-transparent border border-sky-300 shadow-lg rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-6 flex flex-col justify-between">
              <h6 className="text-2xl lg:text-3xl text-white font-bold mb-4">{card.heading}</h6>
              <p className="text-lg lg:text-xl text-gray-300">{card.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
