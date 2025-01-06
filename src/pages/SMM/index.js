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
      <div className="py-52 px-10 lg:px-72">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-yellow-500">
          SMM <br />
          <span className="font-bold">Services.</span>
        </h2>
        <p className="py-5 text-black text-xl sm:text-2xl lg:text-4xl font-normal text-left mb-6">
        At AKC, we provide effective Social Media Marketing (SMM) services to help your business build a strong online presence, engage your audience, and drive growth through targeted strategies and compelling content.        </p>
      </div>

      <div>
        <img
          src="https://www.anyawebsolution.in/images/smo-smm-services.jpg"
          alt="Web Development Services"
          className="w-full"
        />
      </div>

      <div className="px-72 py-40">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-black">
          Comprehensive SMM services.
        </h2>
        <SMMServices/>
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
          Serving a variety of 
          <span className="text-yellow-500 text-3xl sm:text-4xl lg:text-6xl font-semibold text-left ml-4">
             industry.
          </span>
        </h2>
        <p className="px-72 text-white text-xl sm:text-sm lg:text-xl font-normal text-left mb-10">
        AKC provides innovative Social Media Marketing solutions that help businesses across various sectors enhance their online presence, engage their audience, and drive growth.
        </p>
        <SMMSwiper/>
      </div>

      <div className="py-32">
        <SMMFaq/>
      </div>

      <div className="text-center" data-aos="fade-down" data-aos-duration="1000">
        <p className="text-xl text-black sm:text-sm lg:text-xl font-normal font-sans mb-6">
          Pull The Trigger!
        </p>
        <h2 className="text-5xl text-black sm:text-md lg:text-7xl font-bold font-sans mb-6">
          Ready to boost
          <span className="py-5 block">your social media?</span>
        </h2>
      </div>

      <div className="py-36"></div>
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
