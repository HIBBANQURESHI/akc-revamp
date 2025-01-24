import React, { useState, useEffect } from "react";
import Navbar from "@/components/DesktopMenu";
import Footer from "@/components/Footer";
import BrandingServices from "@/components/branding/BrandingServices";
import BrandingSwiper from "@/components/branding/BrandingSwiper";
import BrandingFaq from "@/components/branding/BrandingFaq";
import Image from "next/image";


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
        <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-semibold text-left text-sky-300 py-20">
        Top Class Brand Identity  <br />
          <span className="font-semibold">Development Services.</span>
        </h2>
        <p className="text-black text-lg sm:text-xl lg:text-3xl xl:text-3xl font-normal text-left mb-6">
        Is your branding missing the hues? Welcome to the intersection of strategy and style. Our brand development services provide commercial crusaders that dominate markets and drop jaws. As leaders in corporate brand development services, we know the difference between good and unforgettable.
        </p>
      </div>

      <div>
      <Image
        src="/assets/branding.jpg"
        alt="Web Development Services"
        className="rounded-lg w-full h-auto"
        width={1920} // Replace with actual width
        height={1080} // Replace with actual height
        priority
      />
      </div>

      <div className="px-6 sm:px-10 lg:px-20 xl:px-72 py-20">
        <h2 className="text-xs sm:text-lg lg:text-6xl font-semibold mb-6 text-black">
        Finding Professional Branding Services? You’re In the Right Place
        </h2>
        <BrandingServices />
      </div>

      <div
        className="py-20 sm:py-28 lg:py-36"
        style={{
          backgroundImage: "radial-gradient(circle at left center,rgb(0, 0, 0) 5%, transparent 50%)",
          backgroundColor: "#000",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="px-6 sm:px-10 lg:px-20 xl:px-72">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6">
          How We Shifted Brands into Industry 
            <span className="text-sky-300 ml-2">Leaders.</span>
          </h2>
        </div>
        <BrandingSwiper />
      </div>

      <div className="py-20 sm:py-28 lg:py-36">
        <BrandingFaq />
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
          >        <p className=" text-black text-lg sm:text-xl lg:text-2xl font-normal mb-6">
        Ready to Light the Fuse?
        </p>
        <h2 className="text-black text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
        Let&apos;s Cut to The Chase
          <span className="block py-5"></span>
        </h2>
      </div>

      <div className="py-20"></div>

      <div
        style={{
          backgroundImage: "radial-gradient(circle at left center,rgb(0, 0, 0) 5%, transparent 50%)",
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
