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
        <h2 className="text-3xl sm:text-4xl lg:text-7xl font-semibold text-left text-sky-300 py-14">
        No#1 Ranked Mobile<br />
          <span className="font-semibold">App Development Services.</span>
        </h2>
        <p className=" text-black text-lg sm:text-xl lg:text-3xl font-normal text-left mb-6">
        Did the light bulb of your head light up with a new app idea? Have no clue where to take it? Our custom web app development services code dreams into realities. So, are you ready to witness how magic happens? Let’s explore.
        </p>
      </div>

      <div>
      <Image
        src="/assets/mobile.jpg"
        alt="Web Development Services"
        className="rounded-lg w-full h-auto"
        width={1920} // Replace with actual width
        height={1080} // Replace with actual height
        priority
      />
      </div>

      <div className="px-6 sm:px-12 lg:px-28 py-20 sm:py-32">
        <MobileService />
      </div>

     <div
            style={{
              backgroundImage: `
                radial-gradient(circle at -30% 21% , rgb(108, 234, 243) 0px, transparent 30% ),
                 radial-gradient(circle at 130% 80%, rgb(108, 234, 243) 0px, transparent 30%)`,
              backgroundColor: "#000",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              
            }}
            className="text-center py-14"
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
        Let&apos;s Cut to The Chase
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
