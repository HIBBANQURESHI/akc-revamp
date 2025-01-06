import React, {useEffect} from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const cardsData = [
    { heading: "Finance", paragraph: "Create a professional and trustworthy brand identity for your financial services." },
    { heading: "Healthcare", paragraph: "Design a caring and reliable brand identity that builds trust in the healthcare industry." },
    { heading: "Media", paragraph: "Develop a bold and engaging brand presence that resonates with your media audience." },
    { heading: "Telecom", paragraph: "Craft a modern and reliable brand identity that highlights innovation in telecom." },
    { heading: "Logistics", paragraph: "Design a strong and efficient brand identity that reflects reliability in logistics." },
    { heading: "Automotive", paragraph: "Create a dynamic and cutting-edge brand identity that speaks to the automotive industry." },
    { heading: "Real Estate", paragraph: "Develop a professional and approachable brand identity that builds trust in real estate." },
    { heading: "Education", paragraph: "Craft an inspiring and forward-thinking brand identity that promotes learning and growth." },
    { heading: "Energy", paragraph: "Design an innovative and sustainable brand identity that reflects your commitment to the energy sector." },
  ];
  

export default function BrandingSwiper() {

  useEffect(() => {
      AOS.init({ duration: 1000, once: false }); // Initialize AOS with settings
      window.addEventListener('scroll', () => {
        AOS.refresh(); // Refresh AOS on scroll
      });
  
      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener('scroll', () => {
          AOS.refresh();
        });
      };
    }, []);
  

  return (
    <div className="container mx-auto mt-4" data-aos="fade-down" data-aos-duration="1000">
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
