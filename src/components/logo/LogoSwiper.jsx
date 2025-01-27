import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cardsData = [
  { heading: "Finance", paragraph: "Making money look good is our forte. From banks to fintech startups, our American logo designers craft logos that exude credibility and professionalism." },
  { heading: "Healthcare", paragraph: "We create visual identities that heal brand inconsistencies. Our professional logo design services deliver solutions that connect with patients and professionals alike." },
  { heading: "Media", paragraph: "We create logos that steal the spotlight. Media companies rely on our logo branding design services to stand out. Exceptionally dynamic versatile logos for broadcasters are our game." },
  { heading: "Telecom", paragraph: "Connecting visual dots across platforms, we strengthen brands with brand identity development for telecom giants and startups. We ensure your brand can connect with audiences." },
  { heading: "Logistics", paragraph: "Branding that delivers every time. From shipping companies to delivery startups, our brand strategy development services ensure a seamless identity that communicates reliability." },
  { heading: "Automotive", paragraph: "Designs that accelerate brand recognition. With logo branding design services and brand marketing services, we’ve helped automotive brands rev up their identities." },
  { heading: "Real Estate", paragraph: "Property brands that build equity. Our brand strategy service creates visuals that reflect value and growth. Through corporate brand development services, we design logos that capture the essence of the real estate world." },
  { heading: "Education", paragraph: "Learning institutions that look as smart as they teach. We offer brand development services tailored for schools, universities, and e-learning platforms." },
  { heading: "Energy", paragraph: "Powering brands with visual voltage. Energy companies trust our logo branding design services to illuminate their identity because we create logos that radiate innovation and sustainability." },
];

export default function LogoSwiper() {

    useEffect(() => {
      // Initialize AOS library
      AOS.init({ duration: 700 });
    }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-transparent border border-sky-300 shadow-lg rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos = "fade-down"
          >
            <div className="p-6 flex flex-col justify-between" data-aos = "fade-down">
              <h6 className="text-2xl lg:text-3xl text-white font-bold mb-4">{card.heading}</h6>
              <p className="text-lg lg:text-xl text-gray-300">{card.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
