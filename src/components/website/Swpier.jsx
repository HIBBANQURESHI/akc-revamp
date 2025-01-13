import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const cardsData = [
  { heading: "Finance", paragraph: "Improve efficiency and security." },
  { heading: "Healthcare", paragraph: "Enhance patient care and streamline processes." },
  { heading: "Media", paragraph: "Engage a wider audience with advanced solutions." },
  { heading: "Telecom", paragraph: "Innovative solutions for better customer management." },
  { heading: "Logistics", paragraph: "Optimize operations and reduce overheads." },
  { heading: "Automotive", paragraph: "Enhance customer loyalty and vehicle management." },
  { heading: "Real Estate", paragraph: "Simplify property management and sales." },
  { heading: "Education", paragraph: "Revolutionize learning and student management." },
  { heading: "Energy", paragraph: "Improve operations and safety." },
];

export default function Swiper() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with settings
    window.addEventListener("scroll", () => {
      AOS.refresh(); // Refresh AOS on scroll
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div className="container mx-auto mt-4 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-transparent border border-sky-300 shadow-lg rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-6 flex flex-col justify-between">
              <h6 className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-2">{card.heading}</h6>
              <p className="text-base sm:text-lg lg:text-xl text-white">{card.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
