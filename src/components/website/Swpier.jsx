import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const cardsData = [
  { heading: "Finance", paragraph: "FinTech solutions that turn bean counters into believers." },
  { heading: "Healthcare", paragraph: "We make patient portals that heal user experience headaches." },
  { heading: "Media", paragraph: "Streaming platforms that keep eyeballs glued and servers flourishing." },
  { heading: "Telecom", paragraph: "We connect dots and people across the digital universe." },
  { heading: "Logistics & Automotive", paragraph: "Providing fleet management that runs like a well-oiled machine." },
  { heading: "Real Estate", paragraph: "Property platforms that turn tire-kickers into key-holders." },
  { heading: "Education", paragraph: "Learning management systems that make students forget they're studying." },
  { heading: "Energy", paragraph: "Powering the future with code that's cleaner than solar panels on a sunny day." },
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
