import React, { useState, useEffect } from "react";
import Navbar from "@/components/DesktopMenu";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Services from "@/components/website/Services";
import Swiper from "@/components/website/Swpier";
import FAQ from "@/components/website/FAQ";
import Footer from "@/components/Footer";
import MobileService from "@/components/mobile/MobileService";
import Testimonial from "@/components/Testimonial";
import MobileFaq from "@/components/mobile/MobileFaq";

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
    window.addEventListener("scroll", () => {
      AOS.refresh(); // Refresh AOS on scroll
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div className="bg-slate-50">
      <Navbar />
      <div className="py-20 px-6 sm:py-32 sm:px-12 lg:px-72">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-sky-300">
          App Development <br />
          <span className="font-bold">Services.</span>
        </h2>
        <p className="py-5 text-black text-lg sm:text-xl lg:text-2xl font-normal text-left mb-6">
          Build reliable and easy-to-use Android apps with our expert developers, ensuring smooth performance and a seamless experience for all users.
        </p>
      </div>

      <div>
        <img
          src="https://images.ctfassets.net/mi665aivb0at/4FYzdSQJjSN4oZ3FZDpKEy/5ef6b3c4a1c5759c2175e642f7ae3f97/adndroidserviceHero.webp"
          alt="Web Development Services"
          className="w-full object-cover"
        />
      </div>

      <div className="px-6 sm:px-12 lg:px-28 py-20 sm:py-32">
        <MobileService />
      </div>

      <div
        className="py-24 sm:py-36 text-center relative"
        style={{
          backgroundImage: "radial-gradient(circle at left center,rgb(0, 0, 0) 5%, transparent 50%)",
          backgroundColor: "#000",
          backgroundSize: "100% 100%",
        }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-white">
          Our clients simply love{" "}
          <span className="text-sky-300">what we do.</span>
        </h2>
        <p className="text-white text-lg sm:text-xl lg:text-2xl py-8">
          Proud to serve as the innovation partner for industry leaders who have experienced our
          expertise and excellence firsthand.
        </p>
        <Testimonial />
      </div>

      <div className="px-6 sm:px-12 lg:px-28 py-20 sm:py-32">
        <MobileFaq />
      </div>

      <div className="text-center px-6 sm:px-12 lg:px-28">
        <p className="text-lg sm:text-xl lg:text-2xl text-black font-normal mb-6">
          Pull The Trigger!
        </p>
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-black mb-6">
          Ready to build
          <span className="py-5 block">your App?</span>
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
