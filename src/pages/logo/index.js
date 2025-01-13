import React, { useState, useEffect } from "react";
import Navbar from "@/components/DesktopMenu";
import FAQ from "@/components/website/FAQ";
import Footer from "@/components/Footer";
import LogoServices from "@/components/logo/LogoService";
import LogoSwiper from "@/components/logo/LogoSwiper";
import LogoFaq from "@/components/logo/LogoFaq";

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
      <div className="py-20 px-6 sm:py-32 sm:px-12 lg:px-28">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-yellow-500">
          Logo Design <br />
          <span className="font-bold">Services.</span>
        </h2>
        <p className="py-5 text-black text-lg sm:text-xl lg:text-2xl font-light text-left mb-6">
          At AKC, we specialize in crafting striking and memorable logo designs that elevate your brand and make a lasting impression.
        </p>
      </div>

      <div>
        <img
          src="https://biziq.com/wp-content/uploads/logo-design.jpg"
          alt="Web Development Services"
          className="w-full object-cover"
        />
      </div>

      <div className="px-6 sm:px-12 lg:px-28 py-20 sm:py-32">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-black">
          Comprehensive logo design services.
        </h2>
        <LogoServices />
      </div>

      <div
        className="py-24 sm:py-36 text-center relative"
        style={{
          backgroundImage:
            "radial-gradient(circle at left center, #fbbf24 5%, transparent 50%)",
          backgroundColor: "#3b82f6",
          backgroundSize: "100% 100%",
        }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-white mb-6">
          Serving a variety of
          <span className="text-yellow-500 ml-4">industry.</span>
        </h2>
        <p className="text-white text-lg sm:text-xl lg:text-2xl py-8">
          AKC provides innovative logo design solutions for businesses across various industries, helping them build a distinctive and memorable brand identity.
        </p>
        <LogoSwiper />
      </div>

      <div className="px-6 sm:px-12 lg:px-28 py-20 sm:py-32">
        <LogoFaq />
      </div>

      <div className="text-center px-6 sm:px-12 lg:px-28">
        <p className="text-lg sm:text-xl lg:text-2xl text-black font-normal mb-6">
          Pull The Trigger!
        </p>
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-black mb-6">
          Ready to design
          <span className="py-5 block">your logo?</span>
        </h2>
      </div>

      <div className="py-20 sm:py-36"></div>
      <div
        style={{
          backgroundImage:
            "radial-gradient(circle at left center, #fbbf24 5%, transparent 50%)",
          backgroundColor: "#3b82f6",
          backgroundSize: "100% 100%",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Index;