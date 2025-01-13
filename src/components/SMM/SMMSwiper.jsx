import React from "react";

const cardsData = [
  { heading: "Finance", paragraph: "Create targeted social media campaigns to build trust and engage your financial audience." },
  { heading: "Healthcare", paragraph: "Develop compassionate and informative social media strategies that build trust in the healthcare industry." },
  { heading: "Media", paragraph: "Craft bold and interactive social media content to enhance your media brand presence." },
  { heading: "Telecom", paragraph: "Run innovative social media campaigns to highlight your telecom services and connect with customers." },
  { heading: "Logistics", paragraph: "Engage your audience with efficient social media strategies that highlight your logistics reliability." },
  { heading: "Automotive", paragraph: "Create dynamic social media campaigns that resonate with automotive enthusiasts and potential buyers." },
  { heading: "Real Estate", paragraph: "Utilize social media to promote property listings and engage clients with real estate insights." },
  { heading: "Education", paragraph: "Craft social media strategies that connect with students and educators, promoting learning and growth." },
  { heading: "Energy", paragraph: "Leverage social media to showcase your commitment to sustainable practices and energy solutions." },
];

export default function SMMSwiper() {
  return (
    <div className="container mx-auto mt-4 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-transparent border border-sky-300 shadow-lg rounded-3xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-6 flex flex-col justify-between">
              <h6 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                {card.heading}
              </h6>
              <p className="text-lg sm:text-xl text-white">{card.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
