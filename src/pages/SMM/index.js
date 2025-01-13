import React, { useState, useEffect } from "react";
import Navbar from "@/components/DesktopMenu";
import Footer from "@/components/Footer";
import SMMServices from "@/components/SMM/SMMServices";
import SMMSwiper from "@/components/SMM/SMMSwiper";
import SMMFaq from "@/components/SMM/SMMFaq";

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
      <div className="py-16 px-4 sm:py-20 lg:py-32 sm:px-10 lg:px-72">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-left mb-6 text-sky-300">
          SMM <br />
          <span className="font-bold">Services.</span>
        </h2>
        <p className="py-5 text-black text-lg sm:text-xl lg:text-2xl font-normal text-left mb-6">
          At AKC, we provide effective Social Media Marketing (SMM) services to help your business build a strong online presence, engage your audience, and drive growth through targeted strategies and compelling content.
        </p>
      </div>

      <div>
        <img
          src="https://www.anyawebsolution.in/images/smo-smm-services.jpg"
          alt="Web Development Services"
          className="w-full"
        />
      </div>

      <div className="px-4 sm:px-10 lg:px-72 py-20 lg:py-32">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-black">
          Comprehensive SMM services.
        </h2>
        <SMMServices />
      </div>

      <div
        className="py-20 lg:py-32"
        style={{
          backgroundImage:
            "radial-gradient(circle at left center,rgb(0, 0, 0) 5%, transparent 50%)",
          backgroundColor: "#000",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="px-4 sm:px-10 lg:px-36">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-5xl font-semibold mb-6">
            Serving a variety of 
            <span className="text-sky-300"> industries.</span>
          </h2>
          <p className="text-white text-lg sm:text-xl font-normal mb-10">
            AKC provides innovative Social Media Marketing solutions that help businesses across various sectors enhance their online presence, engage their audience, and drive growth.
          </p>
          <SMMSwiper />
        </div>
      </div>

      <div className="py-20 lg:py-32">
        <SMMFaq />
      </div>

      <div className="text-center py-20">
        <p className="text-lg sm:text-xl font-normal text-black mb-6">
          Pull The Trigger!
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
          Ready to boost
          <span className="block py-2">your social media?</span>
        </h2>
      </div>

      <div className="py-20 lg:py-32"></div>
      <div
        style={{
          backgroundImage:
            "radial-gradient(circle at left center,rgb(0, 0, 0) 5%, transparent 50%)",
          backgroundColor: "#000",
          backgroundSize: "100% 100%",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Index;
