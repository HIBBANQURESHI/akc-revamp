import React, {useEffect} from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

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
