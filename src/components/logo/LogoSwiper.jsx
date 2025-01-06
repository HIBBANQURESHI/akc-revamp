import React, {useEffect} from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

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
