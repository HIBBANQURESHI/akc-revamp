import React, { useState, useEffect } from "react";
import Navbar from "@/components/DesktopMenu";
import Footer from "@/components/Footer";
import BrandingServices from "@/components/branding/BrandingServices";
import BrandingSwiper from "@/components/branding/BrandingSwiper";
import BrandingFaq from "@/components/branding/BrandingFaq";

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
      <div className="py-20 px-6 sm:px-10 lg:px-20 xl:px-72">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-left mb-6 text-yellow-500">
          Branding <br />
          <span className="font-bold">Services.</span>
        </h2>
        <p className="py-5 text-black text-lg sm:text-xl lg:text-2xl xl:text-4xl font-light text-left mb-6">
          At AKC, we specialize in crafting powerful and effective branding solutions that help your business stand out and resonate with your audience through memorable logos, cohesive brand identities, and impactful design strategies.
        </p>
      </div>

      <div>
        <img
          src="https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Photos/Office%20Life/Netguru-Biuro-2018-6078%20_HD.jpg?width=2074&height=2074"
          alt="Web Development Services"
          className="w-full"
        />
      </div>

      <div className="px-6 sm:px-10 lg:px-20 xl:px-72 py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-black">
          Comprehensive branding services.
        </h2>
        <BrandingServices />
      </div>

      <div
        className="py-20 sm:py-28 lg:py-36"
        style={{
          backgroundImage: "radial-gradient(circle at left center, #fbbf24 5%, transparent 50%)",
          backgroundColor: "#3b82f6",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="px-6 sm:px-10 lg:px-20 xl:px-72">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6">
            Serving a variety of
            <span className="text-yellow-500 ml-2">industries.</span>
          </h2>
          <p className="text-white text-lg sm:text-xl lg:text-2xl mb-10">
            AKC provides innovative branding solutions for businesses across multiple sectors.
          </p>
        </div>
        <BrandingSwiper />
      </div>

      <div className="py-20 sm:py-28 lg:py-36">
        <BrandingFaq />
      </div>

      <div className="text-center px-6 sm:px-10 lg:px-20 xl:px-72 py-10">
        <p className="text-lg sm:text-xl lg:text-2xl font-normal mb-6">
          Pull The Trigger!
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Ready to build
          <span className="block py-5">your brand?</span>
        </h2>
      </div>

      <div
        style={{
          backgroundImage: "radial-gradient(circle at left center, #fbbf24 5%, transparent 50%)",
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
