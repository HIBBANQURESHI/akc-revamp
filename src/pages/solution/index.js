import React, { useState, useEffect } from "react";
import Navbar from "@/components/DesktopMenu";
import Footer from "@/components/Footer";
import BrandingServices from "@/components/branding/BrandingServices";
import BrandingSwiper from "@/components/branding/BrandingSwiper";
import BrandingFaq from "@/components/branding/BrandingFaq";
import SMMServices from "@/components/SMM/SMMServices";
import SMMSwiper from "@/components/SMM/SMMSwiper";
import SMMFaq from "@/components/SMM/SMMFaq";
import SolutionSwiper from "@/components/solution/SolutionSwiper";
import AkcForce from "@/components/solution/AkcForce";
import SolutionFaq from "@/components/solution/SolutionFaq";

// Counter Component
const Counter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(endValue / (duration / 1000));
    let currentCount = 0;

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= endValue) {
        clearInterval(interval);
        setCount(endValue);
      } else {
        setCount(currentCount);
      }
    }, 1000 / 60); // Update approximately 60 times per second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [endValue, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const Index = () => {
  return (
    <div className="bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <div className="py-24 px-5 md:py-52 md:px-10 lg:px-72 flex flex-col md:flex-row items-center justify-between">
        <div className="text-container text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-6 text-sky-300">
          Break Free  
            <span className="font-semibold text-black"> from HR Headaches with </span>
            <span className="font-semibold text-black">AKC Link Tech Digitizing.</span>
          </h2>
          <p className="py-5 text-black text-lg sm:text-xl lg:text-2xl font-normal mb-6">
          Ready to turn your HR department from paper-pushing to pulse-racing? At AKC Link Tech Digitizing, we've cracked the code on making workforce management actually enjoyable.
          </p>
        </div>
        <div className="mt-10 md:mt-0 md:ml-16">
          <img
            src="https://images.ctfassets.net/mi665aivb0at/sI1J7u6H0FrF7UFKu3inj/c9b1b4ca9f6740055bd079d2429463ce/hppyforcenewHero.webp"
            alt="HR Solution"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-cover"
          />
        </div>
      </div>

      {/* Feature Section */}
      <div
        className="py-36 text-center"
        style={{
          backgroundImage:
            "radial-gradient(circle at left center,rgb(0, 0, 0) 5%, transparent 50%)",
          backgroundColor: "#000",
        }}
      >
        <h2 className="px-5 md:px-20 lg:px-72 text-white text-2xl sm:text-4xl lg:text-6xl font-semibold mb-10">
       <span className="text-sky-300"> Features </span> That'll Make You How You Lived without Them <span className="text-sky-300">Wonder</span> HR
          software development services.
        </h2>
        <SolutionSwiper />
      </div>

      {/* Transform Section */}
      <div className="py-24 px-5 md:py-52 md:px-10 lg:px-72">
        <h2 className="text-black text-2xl sm:text-4xl lg:text-6xl  font-semibold mb-10 text-center md:text-left">
        Why AKC Link Tech Digitizing? <span className="font-normal"> (Besides The Obvious)</span>
        </h2>
        <AkcForce />
      </div>

      {/* FAQ Section */}
      <div>
        <SolutionFaq />
      </div>

      <div className="py-16"></div>


      {/* Call to Action Section */}
      <div
            style={{
              backgroundImage: `
                radial-gradient(circle at left center, #7dd3fc 5%, transparent 50%), 
                radial-gradient(circle at right center, #7dd3fc 5%, transparent 50%)`,
              backgroundColor: "#fff",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
            className="text-center py-8"
          >        <p className="text-xl text-black sm:text-lg lg:text-xl font-normal mb-6">
        Ready to Light the Fuse?
        </p>
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6">
        Let's Cut to the Chase
          <span className="block">your HR management?</span>
        </h2>
      </div>
      <div className="py-16"></div>

      {/* Footer Section */}
      <div
        style={{
          backgroundImage:
            "radial-gradient(circle at left center,rgb(0, 0, 0) 5%, transparent 50%)",
          backgroundColor: "#000",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Index;