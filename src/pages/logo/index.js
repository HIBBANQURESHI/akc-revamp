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
      <div className="py-20 px-6 sm:py-32 sm:px-12 lg:px-72">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-sky-300">
        Trendsetting Professional  <br />
          <span className="font-semibold">Logo Design Services</span>
        </h2>
        <p className="py-5 text-black text-lg sm:text-xl lg:text-2xl font-normal text-left mb-6">
        At AKC Link Tech Digitizing, we sketch logo impressions that will stay with your users long after seeing them. Are you ready to turn heads and drop jaws?
        </p>
      </div>

      <div>
        <img
          src="https://biziq.com/wp-content/uploads/logo-design.jpg"
          alt="Web Development Services"
          className="w-full object-cover"
        />
      </div>

      <div className="px-6 sm:px-12 lg:px-72 py-20 sm:py-32">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-black">
        Transform Your Brand's DNA with Custom Logo Design Services
        </h2>
        <LogoServices />
      </div>

      <div
        className="py-24 sm:py-36 text-center relative"
        style={{
          backgroundImage:
            "radial-gradient(circle at left center,rgb(0, 0, 0) 5%, transparent 50%)",
          backgroundColor: "#000",
          backgroundSize: "100% 100%",
        }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-white mb-6">
        Industry We’ve Taken by 
          <span className="text-sky-300 ml-4">Storm.</span>
        </h2>
        <p className="text-white text-lg sm:text-xl lg:text-2xl py-8 " >
        Our brand development services hit the mark for your logo needs, irrespective of the industry you aim for. Here’s how we’ve helped transform each industry
        </p>
        <LogoSwiper />
      </div>

      <div className="px-6 sm:px-12 lg:px-28 py-20 sm:py-32">
        <LogoFaq />
      </div>

      <div
            style={{
              backgroundImage: `
                radial-gradient(circle at left center, #7dd3fc 5%, transparent 50%), 
                radial-gradient(circle at right center, #7dd3fc 5%, transparent 50%)`,
              backgroundColor: "#fff",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
            className="text-center"
          >
        <p className="text-lg sm:text-xl lg:text-2xl text-black font-normal mb-6">
        Ready to Light the Fuse?
        </p>
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-black mb-6">
        Let's Cut to The Chase
          <span className="py-5 block"></span>
        </h2>
      </div>

      <div className="py-20 sm:py-36"></div>
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