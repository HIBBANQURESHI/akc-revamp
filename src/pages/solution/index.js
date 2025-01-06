import React, { useState, useEffect } from "react";
import Navbar from "@/components/DesktopMenu";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
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
    <div className="bg-slate-50">
      <Navbar />
      <div className="py-52 px-10 lg:px-72 flex items-center justify-between">
          <div className="text-container">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-yellow-500">
              Happy Force <br />
              <span className="font-bold text-black mt-6">your Ultimate </span><br />
              <span className="font-bold text-black mt-9">HR Solution. </span>
            </h2>
            <p className="py-5 text-black text-xl sm:text-2xl lg:text-4xl font-normal text-left mb-6">
              A data-driven SaaS HR software focused on empowering people and measuring performance.
            </p>
          </div>
          <div className="ml-16 relative ">
            <img src="https://images.ctfassets.net/mi665aivb0at/sI1J7u6H0FrF7UFKu3inj/c9b1b4ca9f6740055bd079d2429463ce/hppyforcenewHero.webp" alt="HR Solution" className="w-full h-full object-cover" />
          </div>
        </div>

      <div
        className="py-36"
        style={{
          backgroundImage:
            "radial-gradient(circle at left center, #fbbf24 5%, transparent 50%)",
          backgroundColor: "#3b82f6",
          backgroundSize: "100% 100%",
        }}
      >
        <h2 className="px-72 text-white text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-10">
        feature rich <span className="text-yellow-500 text-3xl sm:text-4xl lg:text-6xl font-semibold text-left"> innovative </span> HR <br/>
          <span className="text-white text-3xl sm:text-4xl lg:text-6xl font-semibold text-left">
          software development services.
          </span>
        </h2>
        <SolutionSwiper/>
      </div>

      <div className="py-52 px-10 lg:px-72" data-aos="fade-down" data-aos-duration="1000">
        <h2 className="px-3 text-black text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-10"> Transform your HR with AKC</h2>
        <AkcForce/>
        </div>

      <div className="">
        <SolutionFaq/>
      </div>

      <div className="text-center py-40" data-aos="fade-down" data-aos-duration="1000">
        <p className="text-xl text-black sm:text-sm lg:text-xl font-normal font-sans mb-6">
          Pull The Trigger!
        </p>
        <h2 className="text-5xl text-black sm:text-md lg:text-7xl font-bold font-sans mb-6">
          Ready to revolutionize
          <span className="py-5 block">your HR management?</span>
        </h2>
      </div>

      <div></div>
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
