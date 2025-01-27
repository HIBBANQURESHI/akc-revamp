import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cardsData = [
  { heading: "Finance", paragraph: "From investment firms to cryptocurrency platforms, our social media marketing services make complex financial concepts easy to digest and even easier to love." },
  { heading: "Healthcare", paragraph: "We’ve mastered the art of translating medical jargon into relatable, shareable content. We craft campaigns that educate, engage, and empower patients across platforms." },
  { heading: "Media", paragraph: "When media meets meta, we create viral campaigns that leave an impression. We ensure maximum ROI while keeping your audience glued to their screens." },
  { heading: "Telecom", paragraph: "Our social media marketing agency helps telecom brands connect with their customers in meaningful ways." },
  { heading: "Logistics", paragraph: "From warehouse updates to real-time tracking solutions, our social media marketing management services transform logistics content into fascinating narratives." },
  { heading: "Automotive", paragraph: "With custom social media marketing services, we’ve driven automotive brands to the forefront of social platforms. At AKC, we help brands accelerate their digital journeys." },
  { heading: "Real Estate", paragraph: "Our social media marketing services are perfect for real estate agencies, helping them turn properties into must-see destinations." },
  { heading: "Education", paragraph: "Whether it’s universities or e-learning platforms, our services help education brands connect with students in creative, relatable ways." },
  { heading: "Energy", paragraph: "From renewable energy startups to power giants, we energize brands with expert SMM services that captivate and convert." },
];

export default function SMMSwiper() {

    useEffect(() => {
      // Initialize AOS library
      AOS.init({ duration: 700 });
    }, []);
  

  return (
    <div className="container mx-auto mt-4 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-transparent border border-sky-300 shadow-lg rounded-3xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos="fade-down"
          >
            <div className="p-6 flex flex-col justify-between" data-aos="fade-down">
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
